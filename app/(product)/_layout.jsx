import { Stack } from "expo-router";
import React from "react";
import ScreenHeaderBtn from "@/components/navigation/ScreenHeaderBtn";
import { useRouter } from "expo-router";

const ProductLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerLeft: () => (
          <ScreenHeaderBtn
            name="chevron-left"
            handlePress={() => router.back()}
          />
        ),
      }}
    />
  );
};

export default ProductLayout;
