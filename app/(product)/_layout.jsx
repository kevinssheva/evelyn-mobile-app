import { Redirect, Stack } from "expo-router";
import React from "react";
import ScreenHeaderBtn from "@/components/navigation/ScreenHeaderBtn";
import { useRouter } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

const ProductLayout = () => {
  const router = useRouter();
  const { isLogged } = useGlobalContext();

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

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
