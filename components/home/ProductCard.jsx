import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { formatNumberToK } from "../../utils/currency";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const formatAmountInRupiah = (amount) => {
    const parsedAmount = parseInt(amount, 10);

    if (isNaN(parsedAmount)) {
      return "Invalid Amount";
    }

    const formattedAmount = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(parsedAmount);

    return formattedAmount;
  };

  return (
    <TouchableOpacity
      className="p-3 rounded-xl w-64 h-44 bg-white shadow-[10] mr-3 my-3"
      style={styles.card}
      onPress={() => router.push(`/${product.id}`)}
    >
      <Image
        className="w-full aspect-[5/2] rounded-md"
        resizeMethod="cover"
        source={{ uri: product.productPicture }}
      />
      <View className="mt-1 flex-row justify-between w-full flex-1 items-center">
        <View className="flex-1 mr-4">
          <Text className="font-isemibold text-[15px]" numberOfLines={1}>
            {product.name}
          </Text>
          <Text className="font-iregular text-gray-500 text-[11px]">
            {product.productOwner}
          </Text>
        </View>
        <View>
          <Text className="font-ibold text-purple-700 text-base">
            Rp {formatNumberToK(product.price)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow properties for Android
    elevation: 5,
  },
});

export default ProductCard;
