import { View, Text, Image } from "react-native";
import React from "react";

const StoryCard = ({ story }) => {
  return (
    <View className="w-full px-2 py-3 border-[1px] border-gray-200 rounded-md my-2 flex-row">
      <View className="flex-1 mr-3">
        <Text numberOfLines={2} className="font-ibold text-[15px] mb-1">{story.title}</Text>
        <Text numberOfLines={3} className="font-iregular text-gray-500 text-xs">{story.description}</Text>
      </View>
      <View className="w-1/3 aspect-square">
        <Image
          className="w-full h-full rounded-md"
          resizeMethod="cover"
          source={{ uri: story.photoUrl }}
        />
      </View>
    </View>
  );
};

export default StoryCard;
