import { Text, View, Image, StyleSheet, Animated, TouchableHighlight, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import { useState } from "react";

import { Cloud, cloudStyles } from "@/components/Cloud";
import { images } from "@/constants/images"
import useCloudAnimation from "@/hooks/useCloudAnimation";
import useElephantAnimation from "@/hooks/useElephantAnimation";
import ButtonTemplate from "@/components/Button";
import { useUser } from "@/context/UserContext";
import ModalTemplate from "@/components/Modal";

export default function Home() {
  
  const { username, setUsername } = useUser();
  const [ tempUsername, setTempUsername ] = useState<string>("");

  // input name modal
  const [isModalVisible, setModalVisible] = useState(false);

  const cloudAnimations = [
    useCloudAnimation(-20, 10, 8000), // Very slow horizontal drift, subtle vertical bobbing
    useCloudAnimation(40, 8, 7000), // Slow horizontal drift, slightly larger vertical bobbing
    useCloudAnimation(25, 6, 8000), // Gentle horizontal drift, subtle vertical bobbing
    useCloudAnimation(50, 7, 8000), // Smooth and slow
    useCloudAnimation(30, 10, 9000), // Larger range, very slow and smooth
  ];

  // w/o checking
  const navigateToDashboard = () => {
    if (username === "") {
        setModalVisible(true);
        return;
    }
    router.navigate("/dashboard");
  };

  const navigateToLeaderboard = () => {
    router.navigate("/leaderboard");
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
          <ButtonTemplate
            title={"Play Now"}
            onPress={navigateToDashboard}
            btnSize="mid"
          ></ButtonTemplate>
          <ButtonTemplate
            title={"Leaderboard"}
            onPress={navigateToLeaderboard}
            btnSize="mid"
          ></ButtonTemplate>
        </View>

        {/* Modal */}
        <ModalTemplate
          isModalVisible={isModalVisible}
          title={"What should we call you ?"}
          desc={"Set a username before fun starts!"}
        >
          {/* children */}
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={tempUsername}
            onChangeText={setTempUsername}
          />
          <ButtonTemplate
            title={"Save"}
            onPress={() => {
              if (tempUsername.trim() !== "") {
                setUsername(tempUsername.trim());
                setModalVisible(false);
                router.navigate("/dashboard");
              } else {
                alert("Please enter a valid name.");
              }
            }}
            btnSize={"small"}
          />
        </ModalTemplate>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

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
    width: 350,
    zIndex: 2,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 45,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 18,
  },
});