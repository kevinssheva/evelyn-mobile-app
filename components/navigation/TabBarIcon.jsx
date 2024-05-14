// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";

export function TabBarIcon({ name, text, color, focused }) {
  return (
    <View className="justify-center items-center">
      <Ionicons size={28} style={{ color: color }} name={name} />
      <Text
        className={`${focused ? "font-isemibold" : "font-iregular"} text-xs`}
        style={{ color: color }}
      >
        {text}
      </Text>
    </View>
  );
}
