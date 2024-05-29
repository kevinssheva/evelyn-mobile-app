import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import images from "../../constants/images";
import ProductCard from "../../components/home/ProductCard";
import StoryCard from "../../components/home/StoryCard";

const trendingData = [
  {
    photoUrl: "https://picsum.photos/200",
    title: "Product 1",
    price: 200,
    owner: "John Doe",
  },
  {
    photoUrl: "https://picsum.photos/200",
    title: "Product 2",
    price: 300,
    owner: "Jane Doe",
  },
  {
    photoUrl: "https://picsum.photos/200",
    title: "Product 3",
    price: 400,
    owner: "John Doe",
  },
  {
    photoUrl: "https://picsum.photos/200",
    title: "Product 4",
    price: 500,
    owner: "Jane Doe",
  },
  {
    photoUrl: "https://picsum.photos/200",
    title: "Product 5",
    price: 600,
    owner: "John Doe",
  },
  {
    photoUrl: "https://picsum.photos/200",
    title: "Product 6",
    price: 700,
    owner: "Jane Doe",
  },
];

const storyData = [
  {
    title: "My Life as a Disabled Pastry Baker",
    description:
      "How I overcame my disability to become a pastry chef and open my own bakery, Sweet Dreams. I share my story and my favorite recipes.",
    photoUrl: "https://picsum.photos/200",
  },
  {
    title: "How I Became a Successful Entrepreneur",
    description:
      "I share my journey from being a broke college student to becoming a successful entrepreneur. I share my tips and tricks for starting your own business.",
    photoUrl: "https://picsum.photos/200",
  },
];

const Home = () => {
  return (
    <ScrollView className="h-full bg-white">
      <View className="w-full">
        <View className="my-3">
          <Text className="font-ibold text-xl pl-6">Trending</Text>
          <ScrollView horizontal={true}>
            <View className="w-6" />
            {trendingData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </ScrollView>
        </View>
      </View>
      <View className="w-full px-6">
        <View className="w-full aspect-[338/147] rounded-xl mb-4">
          <Image
            className="w-full h-full"
            source={images.homeBanner}
            resizeMethod="cover"
          />
        </View>
        <Text className="font-ibold text-xl">Featured Story</Text>
        <View className="w-full">
          {storyData.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
