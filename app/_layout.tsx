import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Fredoka-Regular": require("../assets/fonts/Fredoka-Regular.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Delius-Regular": require("../assets/fonts/Delius-Regular.ttf"),
  });

  // Prevent the app from hiding the splash screen until the fonts are loaded
  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null; // Do not render anything until fonts are loaded
  }

  // Hide splash screen after fonts are loaded
  SplashScreen.hideAsync();
  
  return (
    <Stack>
      {/* Hide the header for the home screen */}
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );

}
