import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Checkbox from "../../components/Checkbox";
import { HelloWave } from "../../components/HelloWave";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <View className="w-full px-6 py-12 h-full">
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
          />
          <FormField title="Password" placeholder="Enter your email" />
          <View className="flex-row justify-between items-center">
            <Checkbox title="Remember me" otherStyles={"my-3"} />
            <Text className="text-purple-600">Forgot Password?</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity className="bg-purple-800 py-3 rounded-xl items-center justify-center">
            <Text className="text-white font-isemibold text-base">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-auto mb-8">
        <Text className="text-center text-black">
          Don't have an account?
          <Text className="text-purple-600 font-bold"> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
