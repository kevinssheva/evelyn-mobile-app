import { FIRESTORE_DB } from "../config/firebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// get productQuantity where productQuantity.userId = userId
export function GetProductQuantitiesByUserId(userId) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "productQuantity"),
      async (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const productQuantities = data.map(async (productQuantity) => {
          const docData = productQuantity;

          const productRef = docData["productId"];
          const productSnap = await getDoc(productRef);
          const productData = {
            id: productSnap.id,
            ...productSnap.data(),
          };

          const userRef = docData["userId"];
          const userSnap = await getDoc(userRef);
          const userData = {
            id: userSnap.id,
            ...userSnap.data(),
          };

          return {
            ...docData,
            productId: productData,
            userId: userData,
          };
        });

        const cartData = await Promise.all(productQuantities);

        const filteredData = cartData.filter(
          (productQuantity) => productQuantity.userId.id === userId
        );

        setCart(filteredData);
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
  }, [userId]);

  return { cart, loading, error };
}

export function DeleteProductQuantityById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(FIRESTORE_DB, "productQuantity", id));
      resolve("Document successfully deleted!");
    } catch (error) {
      reject(error);
    }
  });
}

export function addToCart(userId, productId, quantity, totalPrice) {
  return new Promise(async (resolve, reject) => {
    try {
      await addDoc(collection(FIRESTORE_DB, "productQuantity"), {
        productId: doc(FIRESTORE_DB, "products", productId),
        userId: doc(FIRESTORE_DB, "users", userId),
        quantity: quantity,
        totalPrice: totalPrice,
        timestamp: Timestamp.now(),
      });
      resolve("Document successfully written!");
    } catch (error) {
      reject(error);
    }
  });
}
