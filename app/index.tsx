import { useCallback, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageURISource,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ListItem from "./ListItem";
import PaginationElement from "./PaginationElement";
import Button from "./Button";

const pages = [
  {
    text: "Selamat datang di Evelyn, platform inovatif untuk membantu kaum disabilitas mencari pekerjaan dan mempromosikan karya mereka.",
    image: require("../assets/images/orang_duduk.png"),
  },
  {
    text: "Kami fokus pada inklusi dan memberikan kesempatan yang adil bagi semua individu.",
    image: require("../assets/images/orang_jalan.png"),
  },
  {
    text: "Evelyn memfasilitasi aksesibilitas dengan antarmuka yang ramah pengguna dan fitur mudah digunakan.",
    image: require("../assets/images/orang_sakit.png"),
  },
];

export default function App() {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<
    Animated.FlatList<{
      text: string;
      image: ImageURISource;
    }>
  >();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0].index ?? 0;
    },
    []
  );
  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: { text: string; image: ImageURISource };
      index: number;
    }) => {
      return <ListItem item={item} index={index} x={x} />;
    },
    [x]
  );
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={pages}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <PaginationElement length={pages.length} x={x} />
        <Button
          currentIndex={flatListIndex}
          length={pages.length}
          flatListRef={flatListRef}
        />
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
  },
});
