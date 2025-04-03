import { View, Text, Animated, StyleSheet } from 'react-native'
import { images } from "@/constants/images";

import { ImageStyle } from 'react-native';

interface CloudProps {
  style: ImageStyle;
  translateX: Animated.Value;
  translateY: Animated.Value;
}

const Cloud = ({ style, translateX, translateY }: CloudProps) => {
  return (
    <Animated.Image
      source={images.cloud}
      style={[
        style,
        {
          transform: [
            { translateX: translateX }, 
            { translateY: translateY }
          ],
        },
      ]}
    />
  );
}

const cloudStyles = StyleSheet.create({
  cloud1: { position: 'absolute', top: 10, right: -35, width: 107, height: 72, zIndex: 1 },
  cloud2: { position: 'absolute', top: 70, left: 50, width: 107, height: 72, zIndex: 1 },
  cloud3: { position: 'absolute', top: 150, right: 80, width: 107, height: 72, zIndex: 1 },
  cloud4: { position: 'absolute', left: -60, top: 200, width: 160, height: 111, zIndex: 1 },
  cloud5: { position: 'absolute', right: -60, top: 200, width: 200, height: 101, zIndex: 1 },
});

export { Cloud, cloudStyles };