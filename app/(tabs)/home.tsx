import { Text, View, Image, StyleSheet, Animated, TouchableHighlight } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";

import { Cloud, cloudStyles } from "@/components/Cloud";
import { images } from "@/constants/images"
import useCloudAnimation from "@/hooks/useCloudAnimation";
import useElephantAnimation from "@/hooks/useElephantAnimation";
import Button from "@/components/Button";


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
    elephant: {
      marginTop: 25,
      height: 300,
      width:  350,
      zIndex: 2
    },
    btnContainer: {
      flexDirection: "row",
      marginTop: 45,
      gap: 10,
    }
  });

  const cloudAnimations = [
    useCloudAnimation(-20, 10, 8000), // Very slow horizontal drift, subtle vertical bobbing
    useCloudAnimation(40, 8, 7000), // Slow horizontal drift, slightly larger vertical bobbing
    useCloudAnimation(25, 6, 8000), // Gentle horizontal drift, subtle vertical bobbing
    useCloudAnimation(50, 7, 8000), // Smooth and slow
    useCloudAnimation(30, 10, 9000), // Larger range, very slow and smooth
  ];

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  const navigateToLeaderboard = () => {
    router.push("/leaderboard");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background} edges={["left", "right"]}>
        <Image source={images.title} style={styles.title} />

        {/* Clouds*/}
        {Object.entries(cloudStyles).map(([key, style], index) => (
          <Cloud
            key={key}
            style={style}
            translateX={cloudAnimations[index].animX}
            translateY={cloudAnimations[index].animY}
          />
        ))}

        {/* Elephant */}
        <Animated.Image
          source={images.elephant}
          style={[
            styles.elephant,
            {
              transform: [{ translateY: useElephantAnimation(3, 2000) }],
            },
          ]}
        />

        {/* Small Buttons */}
        <View style={styles.btnContainer}>
          <Button title={"Play Now"} onPress={navigateToDashboard}></Button>
          <Button title={"Leaderboard"} onPress={navigateToLeaderboard}></Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}