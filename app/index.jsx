import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="justify-center items-center h-full">
      <Link href="/sign-in" className="font-ibold text-xl mb-4 underline">
        Go To Auth
      </Link>
      <Link href="/home" className="font-ibold text-xl mb-4 underline">
        Go To Home
      </Link>
    </View>
  );
};

export default App;
