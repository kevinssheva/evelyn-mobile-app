import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React from "react";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { applyJob, getJobById } from "../../../services/JobService";
import { FIREBASE_AUTH } from "../../../config/firebaseConfig";
import Toast from "react-native-toast-message";

const JobDetails = () => {
  const { id } = useLocalSearchParams();
  const { job, loading } = getJobById(id);
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  if (loading) {
    return <ActivityIndicator size="large" color="#741CCB" />;
  }

  const handleApplyJob = async () => {
    try {
      await applyJob(auth.currentUser.uid, id);
      Toast.show({
        type: "success",
        text1: "Apply Success",
        text2: "You have successfully applied for this job",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Apply Failed",
        text2: error,
      });
    }
  };

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
            <Text className="font-bold text-[24px]">{job.name}</Text>

            <View className="flex-row items-center">
              <TabBarIcon name={"briefcase"} color={"black"} size={10} />
              <Text className="font-light text-[11px] mr-2 ml-2">
                $33K/yr - $49K/yr
              </Text>
              <View className="h-[5px] rounded-full w-[5px] bg-black mr-2"></View>
              <View className="px-3 py-0.5 bg-[#B9F6AF] rounded-[4px] mr-2">
                <Text className="font-light text-[11px]">Remote</Text>
              </View>
              <View className="h-[5px] rounded-full w-[5px] bg-black mr-2"></View>
              <Text className="font-light text-[11px] mr-2">Freelance</Text>
            </View>

            <View className="flex-row items-center  ">
              <TabBarIcon name={"business"} color={"black"} size={10} />
              <Text className="font-light text-[11px] mr-2 ml-2">
                11 - 50 Employees
              </Text>
              <View className="h-[5px] rounded-full w-[5px] bg-black mr-2"></View>
              <Text className="font-light text-[11px] mr-2">
                Technology, Information, and Internet
              </Text>
            </View>
          </View>

          <View className="flex-col w-full mt-[2.5vh]">
            <Text className="font-bold text-[20px] text-black mb-[1vh]">
              About the Job
            </Text>
            <Text className="font-regular text-[14px] text-black">
              {job.description}
            </Text>
          </View>

          <View className="flex-col w-full mt-[3vh]">
            <Text className="font-bold text-[20px] text-black mb-[1vh]">
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
                  <Text className="font-bold text-[18px]">
                    {job.companyName}
                  </Text>
                  <Text className="font-light text-[12px] text-[#969595]">
                    1,559,039 followers
                  </Text>
                </View>
              </View>
              <Text className="font-regular text-[12px] text-black mt-4">
                {job.companyDescription}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => handleApplyJob()}
        className="fixed bottom-0 bg-blue-900 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-bold text-[18px] text-white">Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobDetails;
