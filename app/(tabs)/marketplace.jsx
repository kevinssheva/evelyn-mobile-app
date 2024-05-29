import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import SearchBar from "../../components/search";
import ProductCard from "../../components/home/ProductCard";

const Marketplace = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const a = [1, 2, 3, 4, 5];
  const trendingData = [
    {
      photoUrl: "https://picsum.photos/200",
      title: "Product 1",
      price: 200,
      owner: "John Doe",
    },
    {
      photoUrl: "https://picsum.photos/200",
      title: "Product 2",
      price: 300,
      owner: "Jane Doe",
    },
    {
      photoUrl: "https://picsum.photos/200",
      title: "Product 3",
      price: 400,
      owner: "John Doe",
    },
    {
      photoUrl: "https://picsum.photos/200",
      title: "Product 4",
      price: 500,
      owner: "Jane Doe",
    },
    {
      photoUrl: "https://picsum.photos/200",
      title: "Product 5",
      price: 600,
      owner: "John Doe",
    },
    {
      photoUrl: "https://picsum.photos/200",
      title: "Product 6",
      price: 700,
      owner: "Jane Doe",
    },
  ];

  const products = [
    {
      productId: 1,
      title: "Product 1",
      owner: "Seller A",
      price: 10,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 2,
      title: "Product 2",
      owner: "Seller B",
      price: 20,
      photoUrl: "https://picsum.photos/200",
    },
    {
      productId: 3,
      title: "Product 3",
      owner: "Seller C",
      price: 30,
      photoUrl: "https://picsum.photos/200",
    },
    // Add more dummy product data as needed
  ];

  return (
    <ScrollView>
      <View className="px-[6vw] pt-[3vh]">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <Text className="text-black font-bold text-[18px] mb-[2vh] mx-[6vw]">
        For You
      </Text>
      <View className="h-[25vh]">
        <ScrollView horizontal={true}>
          <View className="w-6" />
          {trendingData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/10")}
        className="mt-[2vh] rounded-[10px] mb-[2vh] w-full px-[6vw]"
      >
        <Image
          source={require("../../assets/images/discover_ungu.png")}
          className="h-[20vh] w-full rounded-[10px]"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text className="text-black font-bold text-[18px] mb-[2vh] mx-[6vw]">
        Handicrafts
      </Text>
      <View className="h-[25vh]">
        <ScrollView horizontal={true}>
          <View className="w-6" />
          {trendingData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Marketplace;
