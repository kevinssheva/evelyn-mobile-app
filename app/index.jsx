import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        console.log("User is signed in");
        console.log("user", user);
        router.push("/home");
      }
    });
  }, []);

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
