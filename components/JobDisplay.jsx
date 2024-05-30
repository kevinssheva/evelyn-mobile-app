import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const JobDisplay = ({ job }) => {
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
      className="p-3 rounded-xl w-72 h-[240px] bg-white shadow-[10] mr-3 my-3"
      style={styles.card}
      onPress={() => router.push(`/jobs/${job.id}`)}
    >
      <Image
        className="w-full aspect-[5/2] rounded-md"
        resizeMethod="cover"
        source={{ uri: job.companyPicture }}
      />
      <View className="mt-1 w-full flex-1 justify-between">
        <View className="flex-row justify-between items-center w-full">
          <View className="flex-1 mr-3">
            <Text className="font-isemibold text-[15px]" numberOfLines={1}>
              {job.name}
            </Text>
            <Text className="font-iregular text-gray-500 text-[11px]">
              {job.company}
            </Text>
          </View>
          <Text className="font-ibold">{job.type}</Text>
        </View>
        <View className="flex flex-row items-start mt-auto flex-wrap gap-1 w-full">
          {job.disabilityType.slice(0, 2).map((disability, index) => (
            <Text
              key={index}
              className="font-iregular text-[11px] bg-purple-200 text-purple-800 px-2 py-1 rounded-full"
            >
              {disability}
            </Text>
          ))}
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

export default JobDisplay;
