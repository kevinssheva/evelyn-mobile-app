import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import Modal from "react-native-modal";
import { GetProductById } from "../../services/ProductService";
import { formatNumberToK } from "../../utils/currency";
import { addToCart } from "../../services/CartService";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import Toast from "react-native-toast-message";
import { Octicons } from "@expo/vector-icons";

const testimoniData = [
  {
    name: "Rita Arnold",
    review: "Amazing. The seller was very friendly. The cookies were amazing.",
    rating: 5,
    reviewCount: 234,
    profilePicture: "https://picsum.photos/200",
  },
  {
    name: "Jane Doe",
    review: "The cookies were amazing. The seller was very friendly.",
    rating: 5,
    reviewCount: 243,
    profilePicture: "https://picsum.photos/300",
  },
  {
    name: "John Doe",
    review: "It is very good. I wonder if I can get more of this.",
    rating: 5,
    reviewCount: 442,
    profilePicture: "https://picsum.photos/400",
  },
];

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const { product, loading } = GetProductById(id);
  const auth = FIREBASE_AUTH;
  const router = useRouter();
  const star = Array(5).fill(require("../../assets/images/star.png"));
  const [isModalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(1);

  if (loading) {
    return <ActivityIndicator size="large" color="#741CCB" />;
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(auth.currentUser.uid, product.id, count, product.price);
      Toast.show({
        type: "success",
        text1: "Product added to cart",
        text2: "Product has been successfully added to your cart",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Failed to add product",
        text2: error,
      });
    }

    setModalVisible(!isModalVisible);
    setCount(1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <View className="flex-1 bg-white">
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View>
          <View className="bg-white rounded-t-[10px] px-[6vw] py-[2vh] flex-row">
            <Image
              source={{ uri: product.productPicture }}
              className="h-[17vh] w-[35vw]"
              resizeMode="cover"
            />
            <View className="flex-col ml-5 justify-between">
              <View>
                <Text className="font-bold text-[20px]">{product.name}</Text>
                <Text className="font-regular text-[14px]">Stock: 30</Text>
              </View>
              <View className="flex-row gap-3 items-center">
                <TouchableOpacity
                  className="h-[7vw] w-[7vw] border-[#072389] border-[1px] rounded-[3px] flex-row items-center justify-center"
                  onPress={handleDecrement}
                >
                  <Text className="flex font-bold text-[18px] text-[#072389]">
                    -
                  </Text>
                </TouchableOpacity>
                <Text className="font-bold text-[16px]">{count}</Text>
                <TouchableOpacity
                  className="h-[7vw] w-[7vw] border-[#072389] border-[1px] rounded-[3px] flex-row items-center justify-center"
                  onPress={handleIncrement}
                >
                  <Text className="flex font-bold text-[18px] text-[#072389]">
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            className="bg-blue-900 w-full h-[7vh] items-center justify-center"
          >
            <Text className="font-bold text-[18px] text-white">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView>
        <Image
          source={{ uri: product.productPicture }}
          className="h-[30vh] w-full"
          resizeMode="cover"
        />
        <View className="flex-row justify-center mt-[2vh]">
          <View className="h-1 w-[10vw] bg-[#D9D9D9]"></View>
        </View>
        <View className="px-[6vw] py-[2vh] w-full">
          <View className="flex-row w-full justify-between items-center">
            <View className="flex-col h-full flex-1 mr-3">
              <Text className="font-ibold text-[24px] text-black">
                {product.name}
              </Text>
              <Text className="font-ilight text-[16px] text-black mt-2">
                1795 reviews
              </Text>
            </View>
            <View className="flex-row items-end">
              <Text className="font-ibold text-[20px] text-black">
                Rp {formatNumberToK(product.price)}
              </Text>
              <Text className="font-bold text-[14px] text-[#9F948B]">/pc</Text>
            </View>
          </View>
          <View className="flex-row w-full justify-between items-center">
            <View className="flex-row gap-2 mt-[2px]">
              {Array(5)
                .fill()
                .map((_) => (
                  <Octicons name="star-fill" size={24} color="#e69b1c" />
                ))}
            </View>
            <Text className="font-iregular text-[14px] text-[#969595]">
              Stock: 300
            </Text>
          </View>

          <View className="flex-col w-full mt-[2.5vh]">
            <Text className="font-ibold text-[20px] text-black mb-[1vh]">
              Description
            </Text>
            <Text className="font-iregular text-[14px] text-black">
              {product.description}
            </Text>
          </View>

          <View className="flex-col w-full mt-[3vh]">
            <Text className="font-ibold text-[20px] text-black mb-[1vh]">
              About the Seller
            </Text>
            <View className="flex-col px-[4vw] py-[2vh] w-full bg-[#e3e3e375] rounded-[10px]">
              <View className="flex-row">
                <Image
                  source={{ uri: product.ownerPicture }}
                  className="h-[10vh] w-[10vh] rounded-[100px]"
                  resizeMode="cover"
                />
                <View className="flex-col w-full ml-5 justify-center">
                  <Text className="font-ibold text-[20px]">
                    {product.productOwner}
                  </Text>
                  <Text className="font-iregular text-[12px]">
                    Bandung, Indonesia
                  </Text>
                  <Text className="font-iregular text-[10px] text-[#969595]">
                    Member since 2018
                  </Text>
                </View>
              </View>
              <Text className="font-iregular text-[12px] text-black mt-4">
                {product.productOwnerDescription}
              </Text>
            </View>
          </View>

          <View className="flex-col w-full mt-[3vh]">
            <Text className="font-ibold text-[20px] text-black mb-[1vh]">
              Reviews
            </Text>
            <View className="flex-row justify-between">
              <View className="flex-col items-center">
                <Text className="font-ibold text-[20px]">5.0 stars</Text>
                <View className="flex-row gap-2 mt-[2px] mb-[10px]">
                  {Array(5)
                    .fill()
                    .map((_) => (
                      <Octicons name="star-fill" size={20} color="#e69b1c" />
                    ))}
                </View>
                <Text className="font-ibold text-[14px] text-[#969595]">
                  1,375 reviews
                </Text>
              </View>

              <View className="flex-col">
                <View className="flex-row items-center">
                  <Text className="font-iregular text-[12px] mr-3">5</Text>
                  <View className="h-[4px] w-[40vw] bg-[#FFDF00] rounded-[5px]"></View>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-iregular text-[12px] mr-3">4</Text>
                  <View className="h-[4px] w-[40vw] bg-[#D9D9D9] rounded-[5px]"></View>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-iregular text-[12px] mr-3">3</Text>
                  <View className="h-[4px] w-[40vw] bg-[#D9D9D9] rounded-[5px]"></View>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-iregular text-[12px] mr-3">2</Text>
                  <View className="h-[4px] w-[40vw] bg-[#D9D9D9] rounded-[5px]"></View>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-iregular text-[12px] mr-3">1</Text>
                  <View className="h-[4px] w-[40vw] bg-[#D9D9D9] rounded-[5px]"></View>
                </View>
              </View>
            </View>
          </View>

          <View className="mt-3">
            <View className="flex-col">
              {testimoniData.map((data, index) => (
                <View key={index} className="flex-col mt-2">
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row">
                      <Image
                        source={{ uri: data.profilePicture }}
                        className="h-[7vh] w-[7vh] rounded-[100px]"
                        resizeMode="cover"
                      />
                      <View className="flex-col justify-center ml-5">
                        <Text className="font-ibold text-[16px]">
                          {data.name}
                        </Text>
                        <Text className="font-iregular text-[12px] text-[#969595]">
                          {data.reviewCount} reviews
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row gap-1 mt-[2px] mb-[10px]">
                      {Array(5)
                        .fill()
                        .map((_) => (
                          <Octicons
                            name="star-fill"
                            size={18}
                            color="#e69b1c"
                          />
                        ))}
                    </View>
                  </View>
                  <Text className="font-iregular text-[12px] mt-2 mb-2">
                    {data.review}
                  </Text>
                  <View className="h-[1px] w-full bg-gray-200"></View>
                </View>
              ))}
            </View>
          </View>

          <View className="flex-row justify-center mt-2 ">
            <Text className="font-isemibold text-purple-700">
              See more reviews...
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={toggleModal}
        className="fixed bottom-0 bg-purple-900 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-ibold text-[18px] text-white">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;
