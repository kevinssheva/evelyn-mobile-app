import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useRouter } from "expo-router";
import SearchBar from "../../components/search";
import ProductCard from "../../components/home/ProductCard";
import { GetProducts } from "../../services/ProductService";

const Marketplace = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { products, loading } = GetProducts();
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  if (loading)
    return (
      <View className="h-full items-center justify-center">
        <ActivityIndicator size="large" color="#741CCB" />
      </View>
    );

  return (
    <ScrollView>
      <View className="px-[6vw] pt-[3vh]">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      {searchQuery.length === 0 ? (
        <>
          <Text className="text-black font-ibold text-[18px] mx-[6vw]">
            For You
          </Text>
          <ScrollView horizontal={true}>
            <View className="w-6" />
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </ScrollView>
          <View className="mt-[2vh] rounded-[10px] mb-[2vh] w-full px-6">
            <Image
              source={require("../../assets/images/discover_ungu.png")}
              className="h-[20vh] w-full rounded-[10px]"
              resizeMode="cover"
            />
          </View>
          <Text className="text-black font-bold text-[18px] mx-[6vw]">
            Handicrafts
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
        </>
      ) : (
        <View className="items-center">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Marketplace;
