import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { Octicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

const data = {
  name: "Adi Sucipto",
  email: "adi.sucipto@gmail.com",
  disabilityType: "Tunanetra",
  profilePicture: "https://picsum.photos/200",
};

const Profile = () => {
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  const handleSignout = async () => {
    try {
      await signOut(auth);
      alert("Sign out successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View className="items-center py-8">
        <View className="w-24 aspect-square rounded-full overflow-hidden">
          <Image
            source={{ uri: data.profilePicture }}
            className="w-full h-full "
            resizeMode="cover"
          />
        </View>
        <Text className="font-ibold text-lg mt-3">{data.name}</Text>
        <Text className="text-gray-500 font-iregular">
          {data.disabilityType}
        </Text>
      </View>
      <View className="bg-white mx-6 p-3 rounded-lg my-3" style={styles.card}>
        <View className="justify-between flex-row py-2">
          <Text className="font-isemibold text-gray-400">Gender</Text>
          <Text className="font-iregular">Male</Text>
        </View>
        <View className="h-[1px] w-full bg-slate-200"></View>
        <View className="justify-between flex-row py-2">
          <Text className="font-isemibold text-gray-400">Birthdate</Text>
          <Text className="font-iregular">28/08/02</Text>
        </View>
        <View className="h-[1px] w-full bg-slate-200"></View>
        <View className="justify-between flex-row py-2">
          <Text className="font-isemibold text-gray-400">Email</Text>
          <Text className="font-iregular">{data.email}</Text>
        </View>
        <View className="h-[1px] w-full bg-slate-200"></View>
        <View className="justify-between flex-row py-2">
          <Text className="font-isemibold text-gray-400">Address</Text>
          <Text className="font-iregular">Gg. Loa II No. 11</Text>
        </View>
      </View>

      <Pressable
        className="bg-white mx-6 p-3 rounded-lg my-3 flex-row justify-between"
        style={styles.card}
        onPress={() => router.push("/applied-job")}
      >
        <Text className="text-purple-700 font-ibold">Applied Job</Text>
        <Octicons name="chevron-right" size={24} color="gray" />
      </Pressable>
      <Pressable
        className="bg-white mx-6 p-3 rounded-lg my-3 flex-row justify-between"
        style={styles.card}
        onPress={() => router.push("/order-history")}
      >
        <Text className="text-purple-700 font-ibold">Order History</Text>
        <Octicons name="chevron-right" size={24} color="gray" />
      </Pressable>
      <TouchableOpacity
        className="px-4 py-2 bg-red-600 rounded-lg mx-6 my-3"
        onPress={() => handleSignout()}
      >
        <Text className="font-ibold text-white text-center">Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Profile;
