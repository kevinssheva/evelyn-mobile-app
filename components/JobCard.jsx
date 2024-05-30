import { View, Text, Image } from "react-native";
import React from "react";

const JobCard = ({ job }) => {
  return (
    <View className="w-full border-[1px] border-gray-200 rounded-md bg-white my-2 py-3 px-4 flex-row items-start">
      <View className="w-16 aspect-square rounded-full overflow-hidden self-center">
        <Image
          source={{ uri: job.jobId.companyPicture }}
          className="w-full h-full rounded-md bg-pink-300"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 mx-3">
        <Text className="font-isemibold text-[15px]">{job.jobId.name}</Text>
        <Text className="font-iregular">{job.jobId.companyName}</Text>
        <Text className="font-iregular text-gray-400">Bandung, Indonesia</Text>
      </View>
      <Text className="font-isemibold text-blue-600 bg-blue-200 px-2 py-1 rounded-lg text-[12px]">
        On Review
      </Text>
    </View>
  );
};

export default JobCard;
