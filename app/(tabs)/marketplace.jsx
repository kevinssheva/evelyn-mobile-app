import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Marketplace = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Marketplace</Text>
      <TouchableOpacity onPress={() => router.push("/10")}>
        <Text>Go To Product 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Marketplace;
