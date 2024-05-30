import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Checkbox from "../../components/Checkbox";
import Toast from 'react-native-toast-message';
import { Link } from "expo-router";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeText = (key, value) => {
    setUserInput({ ...userInput, [key]: value });
  };

  const auth = FIREBASE_AUTH;

  const handleSubmit = async () => {
    setIsLoading(true);
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

      Toast.show({
        type: 'success',
        text1: 'Sign Up Success',
        text2: `Welcome, ${user.displayName}`,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Sign Up Failed',
        text2: 'Please check your email and password',
      });
    } finally {
      setIsLoading(false);
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
              placeholder="Enter your password"
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
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.5 : 1,
              }}
            >
              <Text className="text-white font-isemibold text-base">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-auto">
          <Text className="text-center font-iregular text-black">
            Already have an account?{" "}
            <Link href={"/sign-in"} className="text-purple-600 font-ibold">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
