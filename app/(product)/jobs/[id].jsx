import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getJobById } from "../../../services/JobService";

const JobDetails = () => {
  const { id } = useLocalSearchParams();
  const { job, loading } = getJobById(id);
  const router = useRouter();

  if (loading) {
    return <ActivityIndicator size="large" color="#741CCB" />;
  }

  return (
    <View className="flex-1">
      <ScrollView>
        <Image
          source={{ uri: job.companyPicture }}
          className="h-[30vh] w-full"
          resizeMode="cover"
        />
        <View className="flex-row justify-center mt-[2vh]">
          <View className="h-1 w-[10vw] bg-[#D9D9D9]"></View>
        </View>
        <View className="px-[6vw] py-[2vh]">
          <View className="flex-col">
            <Text className="font-ibold text-[24px]">{job.name}</Text>

            <View className="flex-row items-center">
              <Ionicons name={"briefcase"} color={"black"} size={14} />
              <Text className="font-ilight text-[11px] mr-2 ml-2">
                $33K/yr - $49K/yr
              </Text>
              <View className="h-[6px] rounded-full w-[6px] bg-black mr-2"></View>
              <View className="px-3 py-0.5 bg-[#B9F6AF] rounded-[4px] mr-2">
                <Text className="font-ilight text-[11px]">{job.type}</Text>
              </View>
              <View className="h-[6px] rounded-full w-[6px] bg-black mr-2"></View>
              <Text className="font-ilight text-[11px] mr-2">
                {job.disabilityType}
              </Text>
            </View>

            <View className="flex-row items-center  ">
              <Ionicons name={"business"} color={"black"} size={14} />
              <Text className="font-ilight text-[11px] mr-2 ml-2">
                11 - 50 Employees
              </Text>
              <View className="h-[6px] rounded-full w-[6px] bg-black mr-2"></View>
              <Text className="font-ilight text-[11px] mr-2">
                Technology, Information, and Internet
              </Text>
            </View>
          </View>

          <View className="flex-col w-full mt-[2.5vh]">
            <Text className="font-ibold text-[20px] text-black mb-[1vh]">
              About the Job
            </Text>
            <Text className="font-iregular text-[14px] text-black">
              {job.description}
            </Text>
          </View>

          <View className="flex-col w-full mt-[3vh]">
            <Text className="font-ibold text-[20px] text-black mb-[1vh]">
              About the Company
            </Text>
            <View className="flex-col px-[4vw] py-[2vh] w-full bg-[#EEEEEE] rounded-[10px]">
              <View className="flex-row">
                <Image
                  source={{ uri: job.companyPicture }}
                  className="h-[8vh] w-[8vh] rounded-[100px]"
                  resizeMode="cover"
                />
                <View className="flex-col w-full ml-5 justify-center">
                  <Text className="font-ibold text-[18px]">
                    {job.companyName}
                  </Text>
                  <Text className="font-ilight text-[12px] text-[#969595]">
                    1,559,039 followers
                  </Text>
                </View>
              </View>
              <Text className="font-iregular text-[12px] text-black mt-4">
                {job.companyDescription}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {}}
        className="fixed bottom-0 bg-blue-900 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-bold text-[18px] text-white">Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobDetails;
