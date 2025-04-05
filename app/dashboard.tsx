import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import CardTemplate from "@/components/Card";

import { useUser } from "@/context/UserContext"

const dashboard = () => {

  const { username } = useUser();

  const cardImgArray = [
    images.cardNum,
    images.cardShape,
    images.cardLetters,
    images.cardAnimal,
    images.cardVocab,
    images.cardChallenge,
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background}>
        <View style={styles.welcTextContainer}>
          <Text style={styles.welcomeTextUnhighlighted}>Hello, </Text>
          <Text style={styles.welcomeTextHighlighted}>{username}</Text>
        </View>

        <View style={{alignItems: "center"}}>
          <View style={styles.cardContainer}>
            {cardImgArray.map((img, index) => (
              <CardTemplate key={index} cardImg={img} />
            ))}
          </View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  welcTextContainer: {
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 34,
  },
  welcomeTextUnhighlighted: {
    fontFamily: "Delius-Regular",
    fontSize: 24,
    marginTop: 6,
  },
  welcomeTextHighlighted: {
    fontFamily: "Delius-Regular",
    fontSize: 30,
  },
  background: {
    flex: 1,
    backgroundColor: "#FEE9CA",
  },
  cardContainer: {
    marginTop: 12,
    gap: 15,
    width: "85%",
    flexWrap: "wrap",
  },
});

export default dashboard