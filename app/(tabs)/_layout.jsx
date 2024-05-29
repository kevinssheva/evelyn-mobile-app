import { Redirect, Tabs } from "expo-router";

import { View } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import ScreenHeaderBtn from "@/components/navigation/ScreenHeaderBtn";
import { useGlobalContext } from "../../context/GlobalProvider";

export default function TabLayout() {
  const { isLogged } = useGlobalContext();

  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6823A8",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 72,
        },
        headerTitle: "",
        headerRight: () => (
          <View className="flex-row items-end justify-center pr-2">
            <ScreenHeaderBtn
              name="shopping-bag"
              handlePress={() => {}}
              styles={"mx-2"}
            />
            <ScreenHeaderBtn
              name="inbox"
              handlePress={() => {}}
              styles={"mx-2"}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              text="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: "Marketplace",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cart" : "cart-outline"}
              color={color}
              text="Marketplace"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="freelance"
        options={{
          title: "Freelance",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "briefcase" : "briefcase-outline"}
              color={color}
              text="Freelance"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
              text="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
