import { View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

const App = () => {
  const { isLogged } = useGlobalContext();

  if (isLogged) {
    return <Redirect href="/home" />;
  }

  return (
    <View className="justify-center items-center h-full">
      <Link href="/sign-in" className="font-ibold text-xl mb-4 underline">
        Go To Auth
      </Link>
    </View>
  );
};

export default App;
