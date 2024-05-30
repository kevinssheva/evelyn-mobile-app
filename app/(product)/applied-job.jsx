import { View, Text, ScrollView } from "react-native";
import React from "react";
import JobCard from "@/components/JobCard";

const data = [
  {
    name: "Frontend Developer",
    company: "Google",
    location: "Jakarta",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Backend Developer",
    company: "Facebook",
    location: "Bandung",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "UI/UX Designer",
    company: "Instagram",
    location: "Surabaya",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Data Scientist",
    company: "Twitter",
    location: "Yogyakarta",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Product Manager",
    company: "LinkedIn",
    location: "Semarang",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Software Engineer",
    company: "Tiktok",
    location: "Bali",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Software Engineer",
    company: "Tiktok",
    location: "Bali",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
  {
    name: "Software Engineer",
    company: "Tiktok",
    location: "Bali",
    companyProfile: "https://picsum.photos/200",
    status: "Applied",
  },
];

const AppliedJob = () => {
  return (
    <ScrollView>
      <View className="px-3">
        {data.map((item, index) => (
          <JobCard job={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default AppliedJob;
