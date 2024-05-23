import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ScreenHeaderBtn = ({ name, handlePress, styles }) => {
  return (
    <TouchableOpacity onPress={handlePress} className={styles}>
      <Feather size={30} name={name} color={"black"} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
