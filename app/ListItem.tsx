import {
  View,
  useWindowDimensions,
  ImageURISource,
  StyleSheet,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: { text: string; image: ImageURISource };
  index: number;
  x: Animated.SharedValue<number>;
};

const ListItem = ({ item, index, x }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const rnImageStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      width: SCREEN_WIDTH * 0.7,
      height: SCREEN_WIDTH * 0.7,
      transform: [{ translateY }],
    };
  }, [index, x]);

  const rnTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [index, x]);
  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <Animated.Image
        source={item.image}
        style={rnImageStyle}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.textItem, rnTextStyle]}>
        {item.text}
      </Animated.Text>
    </View>
  );
};

export default React.memo(ListItem);

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textItem: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
    paddingHorizontal: 20,
  },
});
