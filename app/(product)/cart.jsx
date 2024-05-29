import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Cart = () => {
  const router = useRouter();
  const products = [
    {
      productId: 1,
      title: "Product 1",
      owner: "Seller A",
      sum: 4,
      price: 10,
      totalPrice: 40,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 2,
      title: "Product 2",
      owner: "Seller B",
      sum: 3,
      price: 20,
      totalPrice: 60,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      sum: 3,
      price: 30,
      totalPrice: 90,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      sum: 3,
      price: 30,
      totalPrice: 90,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      sum: 3,
      price: 30,
      totalPrice: 90,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      sum: 3,
      price: 30,
      totalPrice: 90,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      sum: 3,
      price: 30,
      totalPrice: 90,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      sum: 3,
      price: 30,
      totalPrice: 90,
      photoUrl: "https://picsum.photos/200",
    },
    // Add more dummy product data as needed
  ];

  return (
    <View className="flex-1">
      <ScrollView>
        <View className="px-[6vw] py-[3vh]">
          <Text className="font-bold text-[20px]">Your Cart</Text>
          {products.map((product, index) => (
            <View key={index} className="pt-[2vh] flex-col gap-4">
              <View className="flex-row justify-between">
                <View className="flex-row">
                  <Image
                    className="w-[35vw] aspect-[3/2] rounded-sm"
                    resizeMethod="cover"
                    source={{ uri: product.photoUrl }}
                  />
                  <View className="flex-col justify-between ml-4">
                    <View className="flex-col">
                      <View className="flex-row items-end">
                        <Text className="font-bold text-[14px]">
                          {product.title}{" "}
                        </Text>
                        <Text className="font-regular text-[12px] text-[#969595]">
                          x{product.sum}
                        </Text>
                      </View>
                      <Text className="font-regular text-[12px] mt-1">
                        {product.owner}
                      </Text>
                    </View>
                    <Text className="font-regular text-[12px] text-[#969595]">
                      14-01-2023
                    </Text>
                  </View>
                </View>

                <View className="flex-col justify-between items-end">
                  <Text className="font-bold text-[12px]">
                    ${product.totalPrice}
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/10")}
                    className="bg-[#FF0000] py-1.5 px-6 rounded-[5px]"
                  >
                    <Text className="font-semibold text-white text-[10px]">
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="h-[1px] w-full bg-gray-400"></View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.push("order")}
        className="fixed bottom-0 bg-green-700 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-bold text-[18px] text-white">Make Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
