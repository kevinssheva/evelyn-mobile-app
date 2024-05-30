import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import {
  DeleteProductQuantityById,
  GetProductQuantitiesByUserId,
} from "../../services/CartService";
import { FIREBASE_AUTH } from "../../config/firebaseConfig";
import { formatDate } from "../../utils/formatDate";
import Toast from "react-native-toast-message";
import { formatNumberToK } from "../../utils/currency";

const Cart = () => {
  const auth = FIREBASE_AUTH;
  const { cart, loading } = GetProductQuantitiesByUserId(auth.currentUser.uid);
  const router = useRouter();

  if (loading) return <ActivityIndicator size="large" color="#741CCB" />;

  console.log("cartz", cart);

  const handleDeleteCartItem = async (productQuantityId) => {
    try {
      await DeleteProductQuantityById(productQuantityId);
      Toast.show({
        type: "success",
        text1: "Product removed from cart",
        text2: "Product has been successfully removed from your cart",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Failed to remove product",
        text2: error,
      });
    }
  };

  return (
    <View className="flex-1">
      <ScrollView>
        <View className="px-[6vw] py-[3vh]">
          <Text className="font-bold text-[20px]">Your Cart</Text>
          {cart.map((productQuantity, index) => (
            <View key={index} className="pt-[2vh] flex-col gap-4">
              <View className="flex-row justify-between">
                <View className="flex-row">
                  <Image
                    className="w-[35vw] aspect-[3/2] rounded-sm"
                    resizeMethod="cover"
                    source={{ uri: productQuantity.productId.productPicture }}
                  />
                  <View className="flex-col justify-between ml-4">
                    <View className="flex-col">
                      <View className="flex-row items-end">
                        <Text className="font-bold text-[14px]">
                          {productQuantity.productId.name}{" "}
                        </Text>
                        <Text className="font-regular text-[12px] text-[#969595]">
                          x{productQuantity.quantity}
                        </Text>
                      </View>
                      <Text className="font-regular text-[12px] mt-1">
                        {productQuantity.productId.productOwner}
                      </Text>
                    </View>
                    <Text className="font-regular text-[12px] text-[#969595]">
                      {formatDate(productQuantity.timestamp.toDate())}
                    </Text>
                  </View>
                </View>

                <View className="flex-col justify-between items-end">
                  <Text className="font-bold text-[12px]">
                    Rp {formatNumberToK(productQuantity.totalPrice)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleDeleteCartItem(productQuantity.id)}
                    className="bg-[#FF0000] py-1.5 px-6 rounded-[5px]"
                  >
                    <Text className="font-semibold text-white text-[10px]">
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="h-[1px] w-full bg-gray-400"></View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.push("order")}
        className="fixed bottom-0 bg-green-700 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-bold text-[18px] text-white">Make Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
