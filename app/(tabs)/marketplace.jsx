import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Input,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import SearchBar from "../../components/search";

const Marketplace = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const a = [1, 2, 3, 4, 5];
  const products = [
    {
      productId: 1,
      name: "Product 1",
      sellerName: "Seller A",
      price: 10,
      imagePath: "https://example.com/product1.jpg",
    },
    {
      productId: 2,
      name: "Product 2",
      sellerName: "Seller B",
      price: 20,
      imagePath: "https://example.com/product2.jpg",
    },
    {
      productId: 3,
      name: "Product 3",
      sellerName: "Seller C",
      price: 30,
      imagePath: "https://example.com/product3.jpg",
    },
    // Add more dummy product data as needed
  ];
  return (
    <View className="px-[6vw] py-[3vh]">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Text className="text-black font-bold text-[18px] mb-[2vh]">For You</Text>
      <View className="h-[25vh]">
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetail", {
                  productId: item.productId,
                })
              }
              className="mx-2 p-2 border border-gray-200 rounded-lg"
            >
              <View className="items-center">
                <Image
                  source={require("../../assets/images/icon.png")}
                  className="h-[12.5vh] w-[25vw]"
                  resizeMode="cover"
                />
                <View className="mt-2 w-full">
                  <Text
                    className="text-black font-bold text-lg"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <Text
                    className="text-black font-medium text-sm"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.sellerName}
                  </Text>
                  <Text className="text-black font-bold text-lg">
                    ${item.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.productId.toString()}
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/10")}
        className="mt-[2vh] rounded-[10px] mb-[2vh]"
      >
        <Image
          source={require("../../assets/images/discover_ungu.png")}
          className="h-[20vh] w-full rounded-[10px]"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text className="text-black font-bold text-[18px] mb-[2vh]">
        Handicrafts
      </Text>
      <TouchableOpacity onPress={() => router.push("/10")}>
        <Text>Go To Product 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Marketplace;
