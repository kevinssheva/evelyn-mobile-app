import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import JobCard from "@/components/JobCard";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { getAppliedJobsByUserId } from "../../services/JobService";

const data = [
  {
    name: "Frontend Developer",
    company: "Google",
    location: "Jakarta",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Backend Developer",
    company: "Facebook",
    location: "Bandung",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "UI/UX Designer",
    company: "Instagram",
    location: "Surabaya",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Data Scientist",
    company: "Twitter",
    location: "Yogyakarta",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Product Manager",
    company: "LinkedIn",
    location: "Semarang",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Software Engineer",
    company: "Tiktok",
    location: "Bali",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Software Engineer",
    company: "Tiktok",
    location: "Bali",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Software Engineer",
    company: "Tiktok",
    location: "Bali",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
];

const AppliedJob = () => {
  const auth = FIREBASE_AUTH;
  const { appliedJobs, loading } = getAppliedJobsByUserId(auth.currentUser.uid);

  return (
    <ScrollView>
      <View className="px-3">
        {loading ? (
          <ActivityIndicator size="large" color="#741CCB" />
        ) : (
          appliedJobs.map((item, index) => <JobCard key={index} job={item} />)
        )}
      </View>
    </ScrollView>
  );
};

export default AppliedJob;
