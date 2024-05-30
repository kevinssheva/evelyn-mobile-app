import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Checkbox from "../../components/Checkbox";
import { HelloWave } from "../../components/HelloWave";
import { Link } from "expo-router";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleChangeText = (key, value) => {
    setUserInput({ ...userInput, [key]: value });
  };

  const auth = FIREBASE_AUTH;

  const handleSubmit = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userInput.email,
        userInput.password
      );
      
      const user = userCredential.user;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <ScrollView>
        <View className="w-full px-6 py-12 min-h-[95vh]">
          <View>
            <View className="flex-row items-center">
              <Text className="text-2xl font-ibold mr-3">Hi, Welcome Back</Text>
              <HelloWave />
            </View>
            <Text className="text-gray-500">
              Hello again, you've been missed!
            </Text>
          </View>
          <View className="my-6">
            <FormField
              title="Email"
              placeholder="Enter your email"
              otherStyles={"mb-4"}
              value={userInput.email}
              handleChangeText={(value) => handleChangeText("email", value)}
            />
            <FormField
              title="Password"
              placeholder="Enter your email"
              value={userInput.password}
              handleChangeText={(value) => handleChangeText("password", value)}
            />
            <View className="flex-row justify-between items-center">
              <Checkbox title="Remember me" otherStyles={"my-3"} />
              <Text className="text-purple-600">Forgot Password?</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              className="bg-purple-800 py-3 rounded-xl items-center justify-center"
              onPress={handleSubmit}
            >
              <Text className="text-white font-isemibold text-base">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-auto">
          <Text className="text-center text-black">
            Don't have an account?{" "}
            <Link href={"/sign-up"} className="text-purple-600 font-bold">
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
