import { View, Text } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Checkbox = ({ title, value = true, otherStyles }) => {
  return (
    <View className={`flex-row space-x-1 items-center ${otherStyles}`}>
      <View className="w-5 aspect-square border-2 rounded-md border-gray-400 justify-center items-center">
        {value && (
          <FontAwesome name="check" size={15} color="black" />
        )}
      </View>
      <Text>{title}</Text>
    </View>
  );
};

export default Checkbox;
