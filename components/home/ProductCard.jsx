import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ProductCard = ({ product }) => {
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
    <View
      className="p-3 rounded-xl w-44 h-44 bg-white shadow-[10] mr-3 my-3"
      style={styles.card}
    >
      <Image
        className="w-full aspect-[5/3] rounded-sm"
        resizeMethod="cover"
        source={{ uri: product.productPicture }}
      />
      <View className="mt-1 flex-row justify-between w-full flex-1 items-center">
        <View>
          <Text className="font-ibold text-[15px]">{product.name}</Text>
          <Text className="font-iregular text-gray-500">{product.productOwner}</Text>
        </View>
        <Text className="font-ibold">{formatAmountInRupiah(product.price)}</Text>
      </View>
    </View>
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
