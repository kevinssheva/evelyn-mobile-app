import { View, ScrollView } from "react-native";
import React from "react";
import OrderCard from "@/components/OrderCard";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { getOrderHistoryByUserId } from "../../services/OrderHistory";
import { ActivityIndicator } from "react-native";

const OrderHistory = () => {
  const auth = FIREBASE_AUTH;
  const { orderHistory, loading } = getOrderHistoryByUserId(
    auth.currentUser.uid
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#741CCB" />;
  }

  return (
    <ScrollView>
      <View className="px-3">
        {orderHistory.map((item, index) => (
          <OrderCard key={index} order={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default OrderHistory;
