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
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="px-[6vw] py-[3vh] h-full">
          <Text className="font-ibold text-[20px]">Your Cart</Text>
          {cart.length === 0 ? (
            <View className="h-full items-center justify-center">
              <Text className="font-ibold">Cart is empty {":("}</Text>
            </View>
          ) : (
            <>
              {cart.map((productQuantity, index) => (
                <View key={index} className="pt-[2vh] flex-col w-full">
                  <View className="flex-row justify-between">
                    <Image
                      className="w-[22vw] aspect-square rounded-md"
                      resizeMethod="cover"
                      source={{ uri: productQuantity.productId.productPicture }}
                    />
                    <View className="flex-row flex-1 ml-2">
                      <View className="flex-col justify-between">
                        <View className="flex-col">
                          <View className="flex-row items-end">
                            <Text
                              className="font-ibold text-[14px]"
                              numberOfLines={2}
                            >
                              {productQuantity.productId.name}{" "}
                              <Text className="font-iregular text-[12px] text-[#969595]">
                                x{productQuantity.quantity}
                              </Text>
                            </Text>
                          </View>
                          <Text className="font-iregular text-[12px] mt-1">
                            {productQuantity.productId.productOwner}
                          </Text>
                        </View>
                        <Text className="font-iregular text-[12px] text-[#969595]">
                          {formatDate(productQuantity.timestamp.toDate())}
                        </Text>
                      </View>
                    </View>

                    <View className="flex-col justify-between items-end">
                      <Text className="font-ibold text-[17px]">
                        Rp {formatNumberToK(productQuantity.totalPrice)}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleDeleteCartItem(productQuantity.id)}
                        className="bg-[#FF0000] py-1.5 px-6 rounded-[5px]"
                      >
                        <Text className="font-isemibold text-white text-[12px]">
                          Remove
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View className="h-[1px] w-full bg-gray-400 mt-3"></View>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.push("/order-history")}
        className="fixed bottom-0 bg-green-700 w-full h-[7vh] items-center justify-center"
      >
        <Text className="font-ibold text-[18px] text-white">Make Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
