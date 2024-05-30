import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import SearchBar from "../../components/search";
import ProductCard from "../../components/home/ProductCard";
import { GetProducts } from "../../services/ProductService";

const Freelance = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { products } = GetProducts();

  return (
    <ScrollView>
      <View className="px-[6vw] pt-[3vh]">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <Text className="text-black font-bold text-[18px] mb-[2vh] mx-[6vw]">
        For You
      </Text>
      <ScrollView horizontal={true}>
        <View className="w-6" />
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => router.push("/jobs/10")}
        className="mt-[2vh] rounded-[10px] mb-[2vh] w-full px-[6vw]"
      >
        <Image
          source={require("../../assets/images/discover_ungu.png")}
          className="h-[20vh] w-full rounded-[10px]"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text className="text-black font-bold text-[18px] mb-[2vh] mx-[6vw]">
        Inclusive Tech
      </Text>

      <ScrollView horizontal={true}>
        <View className="w-6" />
        {/* filter only products with "type": "Handicraft"*/}
        {products
          .filter((product) => product.type === "Handicraft")
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Freelance;
