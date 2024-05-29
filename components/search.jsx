// components/SearchBar.js
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextInput
      className="w-full bg-gray-300 h-[5vh] px-5 text-black border-gray-500 border-[1px] rounded-[15px] mb-[2vh]"
      placeholder="Search..."
      value={searchQuery}
      onChangeText={(text) => setSearchQuery(text)}
    />
  );
};

export default SearchBar;
