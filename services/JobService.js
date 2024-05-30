import { FIRESTORE_DB } from "../config/firebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function getJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "jobs"),
      async (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setJobs(data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return { jobs, loading, error };
}

export function getJobById(jobId) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(FIRESTORE_DB, "jobs", jobId), (doc) => {
      if (doc.exists()) {
        setJob({ id: doc.id, ...doc.data() });
      } else {
        setError("Job not found");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [jobId]);

  return { job, loading, error };
}

export function applyJob(userId, jobId) {
  return addDoc(collection(FIRESTORE_DB, "appliedJobs"), {
    userId: doc(FIRESTORE_DB, "users", userId),
    jobId: doc(FIRESTORE_DB, "jobs", jobId),
    timestamp: Timestamp.now(),
  });
}

export function getAppliedJobsByUserId(userId) {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "appliedJobs"),
      async (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const appliedJobs = data.map(async (appliedJob) => {
          const docData = appliedJob;

          const jobRef = docData["jobId"];
          const jobSnap = await getDoc(jobRef);
          const jobData = {
            id: jobSnap.id,
            ...jobSnap.data(),
          };

          const userRef = docData["userId"];
          const userSnap = await getDoc(userRef);
          const userData = {
            id: userSnap.id,
            ...userSnap.data(),
          };

          return {
            ...docData,
            jobId: jobData,
            userId: userData,
          };
        });

        const appliedJobsData = await Promise.all(appliedJobs);

        const filteredData = appliedJobsData.filter(
          (appliedJob) => appliedJob.userId.id === userId
        );

        setAppliedJobs(filteredData);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return { appliedJobs, loading, error };
}
