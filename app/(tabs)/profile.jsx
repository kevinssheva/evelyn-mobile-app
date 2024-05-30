import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";

const Profile = () => {
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
    <View>
      <TouchableOpacity
        className="px-4 py-2 bg-red-600 rounded-md"
        onPress={() => handleSignout()}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
