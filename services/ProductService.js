import { FIREBASE_AUTH, FIRESTORE_DB } from "../config/firebaseConfig";
import {
  collection,
  doc,
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
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { products, loading, error };
}

export function GetProductById(id) {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            doc(FIRESTORE_DB, `products/${id}`),
            (doc) => {
                const data = {id: id, ...doc.data()};
                setProduct(data);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching collection: ", error);
                setError(error);
                setLoading(false);
            }
        );

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return { product, loading, error };
}
