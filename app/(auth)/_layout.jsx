import { Redirect, Stack } from "expo-router";
import React from "react";
import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  const { isLogged } = useGlobalContext();

  if (isLogged) {
    return <Redirect href="/home" />;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
