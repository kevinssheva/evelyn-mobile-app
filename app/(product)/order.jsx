import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Order = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ScrollView>
        <View className="px-[6vw] py-[3vh]">
          <Text className="font-bold text-[20px] mb-[3vh]">
            Order Information
          </Text>

          <View className="flex-row w-full justify-between mb-8">
            <View className="flex-row items-center">
              <Image
                source={require("../../assets/images/discover_ungu.png")}
                className="w-[15vw] aspect-square rounded-[100px]"
                resizeMode="cover"
              />
              <View className="flex-col gap-1 ml-3">
                <Text className="font-bold text-[14px]">Cookies</Text>
                <Text className="font-regular text-[12px]">Anna M</Text>
              </View>
            </View>
            <View className="flex-col gap-1 ml-3 justify-center items-end">
              <Text className="font-regular text-[12px]">29-10-2023</Text>
              <Text className="font-regular text-[12px]">18:29</Text>
            </View>
          </View>

          <View className="flex-col gap-3">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-[16px]">Order ID</Text>
              <Text className="font-regular text-[14px]">ABVGDVHUDHEU</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold text-[16px]">Address</Text>
              <Text className="font-regular text-[14px]">ABC St. 123</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold text-[16px]">Payment</Text>
              <Text className="font-regular text-[14px]">BCA</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold text-[16px]">Order Status</Text>
              <Text className="font-regular text-[14px]">Delivered</Text>
            </View>
          </View>

          <Text className="font-bold text-[16px] mt-5">Customer Notes</Text>
          <View className="w-full rounded-[5px] bg-gray-200 min-h-[14vh] px-3 py-2 border-gray-300 border-[2px] mt-3">
            <Text>ABCmkdmkamdas;d,cl,sd;</Text>
          </View>

          <Text className="font-bold text-[20px] mt-5">Order Details</Text>
          <View className="flex-col">
            <View className="flex-row justify-between my-1">
              <View className="flex-row">
                <Text className="font-regular text-[12px]">Cookies </Text>
                <Text className="font-regular text-[12px] text-[#969595]">
                  x20
                </Text>
              </View>
              <Text className="font-regular text-[12px]">$100</Text>
            </View>
          </View>
          <View className="flex-row justify-between my-1">
            <Text className="font-regular text-[12px]">Delivery Fee</Text>
            <Text className="font-regular text-[12px]">$20</Text>
          </View>
          <View className="flex-row justify-between my-1">
            <Text className="font-regular text-[12px]">Other Fees</Text>
            <Text className="font-regular text-[12px]">$5</Text>
          </View>
          <View className="w-full h-[1px] bg-gray-500 my-1"></View>
          <View className="flex-row justify-between my-1">
            <Text className="font-regular text-[12px]">Grand Total</Text>
            <Text className="font-regular text-[12px]">$125</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.push("home")}
        className="fixed bottom-0 bg-blue-900 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-bold text-[18px] text-white">Rate Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Order;
