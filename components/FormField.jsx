import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className=" font-isemibold text-[#4E0189]">{title}</Text>
      <View className="w-full py-2 px-3 border-[1px] border-gray-400 bg-black-100 rounded-xl focus:border-black items-center flex-row">
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign name="eye" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
