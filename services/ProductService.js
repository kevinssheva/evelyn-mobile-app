import { FIREBASE_AUTH, FIRESTORE_DB } from "../config/firebaseConfig";
import {
  DocumentReference,
  Timestamp,
  collection,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function GetProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "products"),
      async (snapshot) => {
        let products = [];
        snapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setProducts(products);
        setLoading(false);
      },
      (error) => {
        setError(error);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { products, loading, error };
}
