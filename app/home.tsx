import {
  Image,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";
import { useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Cloud, cloudStyles } from "@/components/Cloud";

import { images } from "@/constants/images"
import useCloudAnimation from "@/hooks/useCloudAnimation";

export default function Index() {
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#FEE9CA",
    },
    title: {
      marginTop: 120,
      height: 65,
      width: 310,
      zIndex: 99,
    },
  });

  const cloudAnimations = [
    useCloudAnimation(-20, 10, 8000), // Very slow horizontal drift, subtle vertical bobbing
    useCloudAnimation(40, 8, 7000), // Slow horizontal drift, slightly larger vertical bobbing
    useCloudAnimation(25, 6, 8000), // Gentle horizontal drift, subtle vertical bobbing
    useCloudAnimation(50, 7, 9000), // Smooth and slow
    useCloudAnimation(30, 10, 10000), // Larger range, very slow and smooth
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background} edges={["left", "right"]}>
        <Image source={images.title} style={styles.title} />

        {cloudStyles.map((style, index) => (
          <Cloud
            key={index}
            style={style}
            translateX={cloudAnimations[index].animX}
            translateY={cloudAnimations[index].animY}
          />
        ))}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}