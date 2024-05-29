import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Checkbox from "../../components/Checkbox";
import { HelloWave } from "../../components/HelloWave";
import { Link } from "expo-router";
import { FIREBASE_AUTH } from "../../config/FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeText = (key, value) => {
    setUserInput({ ...userInput, [key]: value });
  };

  const auth = FIREBASE_AUTH;

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInput.email,
        userInput.password
      );
      
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: userInput.name,
      });

      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <ScrollView>
        <View className="w-full px-6 py-12 min-h-[95vh]">
          <View>
            <Text className="text-2xl font-ibold mr-3">Create an account</Text>
            <Text className="text-gray-500 font-ilight">
              Connect with other people!
            </Text>
          </View>
          <View className="my-6">
            <FormField
              title="Name"
              placeholder="Enter your name"
              otherStyles={"mb-4"}
              value={userInput.name}
              handleChangeText={(value) => handleChangeText("name", value)}
            />
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
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-auto">
          <Text className="text-center text-black">
            Already have an account?{" "}
            <Link href={"/sign-in"} className="text-purple-600 font-bold">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
