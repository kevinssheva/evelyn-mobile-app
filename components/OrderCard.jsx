import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const OrderCard = ({ order }) => {
  return (
    <View className="w-full border-[1px] border-gray-200 rounded-md bg-white my-2 py-3 px-4 flex-row">
      <View className="w-16 aspect-square rounded-full overflow-hidden self-center">
        <Image
          source={{ uri: order.picture }}
          className="w-full h-full rounded-md bg-pink-300"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 mx-3 self-center">
        <Text className="font-isemibold text-[15px]">{order.id}</Text>
        <Text className="font-iregular text-gray-400">{order.date}</Text>
        <Text className="font-isemibold">{order.price}</Text>
      </View>
      <View className="justify-between items-end">
        <Text className="font-isemibold text-blue-600 bg-blue-200 px-2 py-1 rounded-lg text-[12px] mb-7">
          {order.status}
        </Text>
        <Pressable className="bg-purple-800 px-4 py-2 rounded-md">
          <Text className="text-white font-isemibold">Detail</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderCard;
