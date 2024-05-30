import { View, Text, ScrollView } from "react-native";
import React from "react";
import OrderCard from "@/components/OrderCard";

const data = [
  {
    id: "a1",
    date: "2021-10-10",
    price: "Rp 100.000",
    status: "Delivered",
    picture: "https://picsum.photos/200",
  },
  {
    id: "a2",
    date: "2021-10-10",
    price: "Rp 100.000",
    status: "Delivered",
    picture: "https://picsum.photos/200",
  },
  {
    id: "a3",
    date: "2021-10-10",
    price: "Rp 100.000",
    status: "Delivered",
    picture: "https://picsum.photos/200",
  },
  {
    id: "a4",
    date: "2021-10-10",
    price: "Rp 100.000",
    status: "Delivered",
    picture: "https://picsum.photos/200",
  },
  {
    id: "a5",
    date: "2021-10-10",
    price: "Rp 100.000",
    status: "Delivered",
    picture: "https://picsum.photos/200",
  },
];

const OrderHistory = () => {
  return (
    <ScrollView>
      <View className="px-3">
        {data.map((item, index) => (
          <OrderCard order={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default OrderHistory;
