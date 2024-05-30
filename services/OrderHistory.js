import { FIRESTORE_DB } from "../config/firebaseConfig";
import {
  Timestamp,
  collection,
  doc,
  onSnapshot,
  writeBatch,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function getOrderHistoryByUserId(userId) {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(FIRESTORE_DB, "orderHistory"),
      async (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const orderHistory = data.filter((order) => order.userId.id === userId);

        setOrderHistory(orderHistory);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return { orderHistory, loading, error };
}

export function addOrderHistory(cart) {
  return new Promise(async (resolve, reject) => {
    try {
      const accumulatedProducts = {};

      cart.forEach((productQuantity) => {
        const productId = productQuantity.productId.id;
        if (accumulatedProducts[productId]) {
          accumulatedProducts[productId].quantity += productQuantity.quantity;
        } else {
          accumulatedProducts[productId] = {
            userId: productQuantity.userId,
            productId: productQuantity.productId,
            quantity: productQuantity.quantity,
          };
        }
      });

      const batch = writeBatch(FIRESTORE_DB);

      for (const productId in accumulatedProducts) {
        const order = {
          userId: accumulatedProducts[productId].userId,
          productId: accumulatedProducts[productId].productId,
          quantity: accumulatedProducts[productId].quantity,
          date: Timestamp.now(),
        };

        const orderRef = doc(collection(FIRESTORE_DB, "orderHistory"));
        batch.set(orderRef, order);
      }

      // Delete all product quantities
      cart.forEach((productQuantity) => {
        const productQuantityRef = doc(
          FIRESTORE_DB,
          "productQuantity",
          productQuantity.id
        );
        batch.delete(productQuantityRef);
      });

      await batch.commit();

      resolve("Order history added successfully");
    } catch (error) {
      reject(error);
    }
  });
}
