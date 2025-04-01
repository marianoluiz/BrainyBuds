import { Text, View, ImageBackground, StyleSheet} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function Index() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FEE9CA", // Replace with your desired color
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay for text
      padding: 10,
      borderRadius: 5,
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
    },
    buttonText: {
      color: "#4A90E2",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background} edges={["left", "right"]}>
          <Text>Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}