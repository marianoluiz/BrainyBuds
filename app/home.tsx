import {
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";
import { useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { images } from "@/constants/images"

export default function Index() {
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#FEE9CA",
    },
    cloud_1: {
      position: "absolute",
      top: 10,
      right: -35,
      width: 107,
      height: 72,
    },
    cloud_2: {
      position: "absolute",
      top: 70,
      left: 50,
      width: 107,
      height: 72,
    },
    cloud_3: {
      position: "absolute",
      top: 150,
      right: 80,
      width: 107,
      height: 72,
    },
    cloud_4: {
      position: "absolute",
      left: -60,
      top: 200,
      width: 160,
      height: 111,
    },
    cloud_5: {
      position: "absolute",
      right: -60,
      top: 200,
      width: 200,
      height: 101,
    },
    title: {
      marginTop: 120,
      height: 65,
      width: 310,
      zIndex: 99,
    },
  });

  /* Animation */
  const cloudAnim1 = useAnimatedValue(0); // positive
  const cloudAnim2 = useAnimatedValue(0); // negative

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudAnim1, {
          toValue: Math.random() * 8 - 15 * Math.random(),
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(cloudAnim1, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [cloudAnim1]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudAnim2, {
          toValue: Math.random() * 30 - 80 * Math.random(),
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(cloudAnim2, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [cloudAnim2]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background} edges={["left", "right"]}>
        <Image source={images.title} style={styles.title} />

        <Animated.Image
          source={images.cloud}
          style={[
            styles.cloud_1,
            {
              transform: [
                { translateX: cloudAnim1 },
                { translateY: cloudAnim2 },
              ],
            },
          ]}
        />
        <Animated.Image
          source={images.cloud}
          style={[
            styles.cloud_2,
            {
              transform: [
                { translateX: cloudAnim2 },
                { translateY: cloudAnim1 },
              ],
            },
          ]}
        />
        <Animated.Image
          source={images.cloud}
          style={[
            styles.cloud_3,
            {
              transform: [
                { translateX: cloudAnim1 },
                { translateY: cloudAnim2 },
              ],
            },
          ]}
        />
        <Animated.Image
          source={images.cloud}
          style={[
            styles.cloud_4,
            {
              transform: [
                { translateX: cloudAnim2 },
                { translateY: cloudAnim2 },
              ],
            },
          ]}
        />
        <Animated.Image
          source={images.cloud}
          style={[
            styles.cloud_5,
            {
              transform: [
                { translateX: cloudAnim1 },
                { translateY: cloudAnim1 },
              ],
            },
          ]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}