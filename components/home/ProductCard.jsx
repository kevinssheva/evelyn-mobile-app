import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <View
      className="p-3 rounded-xl w-44 h-44 bg-white shadow-[10] mr-3 my-3"
      style={styles.card}
    >
      <Image
        className="w-full aspect-[5/3] rounded-sm"
        resizeMethod="cover"
        source={{ uri: product.photoUrl }}
      />
      <View className="mt-1 flex-row justify-between w-full flex-1 items-center">
        <View>
          <Text className="font-ibold text-[15px]">{product.title}</Text>
          <Text className="font-iregular text-gray-500">{product.owner}</Text>
        </View>
        <Text className="font-ibold">${product.price}</Text>
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
