import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import images from "../../constants/images";
import ProductCard from "../../components/home/ProductCard";
import StoryCard from "../../components/home/StoryCard";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { useRouter } from "expo-router";
import { GetProducts } from "../../services/ProductService";

const storyData = [
  {
    title: "Hidupku, Pembuat Kue Penyandang Disabilitas",
    description:
      "Bagaimana disabilitas saya tidak menghalangi saya untuk menjadi koki pastry dan membuka toko roti saya sendiri, Sweet Dreams. Saya berbagi cerita dan resep favorit saya.",
    photoUrl: "https://i.pinimg.com/564x/7d/8b/44/7d8b44039fd3603cc370fec31087ee65.jpg",
  },
  {
    title: "Pengusaha Sukses pengidap Down Syndrome",
    description:
      "Saya ingin cerita tentang perjalanan saya dari mahasiswa miskin hingga menjadi pengusaha sukses. Saya berbagi tips dan trik untuk memulai bisnis Anda sendiri.",
    photoUrl: "https://i.pinimg.com/564x/ae/db/d8/aedbd86918a28f1a0484c821b80c8623.jpg",
  },
];

const Home = () => {
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  //check signed in user, if there's no user, redirect to sign in page
  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/sign-in");
    }
  }, []);

  const { products, loading } = GetProducts();

  return (
    <ScrollView className="h-full bg-white">
      <View className="w-full">
        <View className="my-3">
          <Text className="font-ibold text-xl pl-6">Trending</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#741CCB" />
          ) : (
            <ScrollView horizontal={true}>
              <View className="w-6" />
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </ScrollView>
          )}
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
