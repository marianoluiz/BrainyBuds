import { Animated } from "react-native";
import { useEffect, useRef } from "react";

const useCloudAnimation = (rangeX: number, rangeY: number, duration: number) => {
  const animX = useRef(new Animated.Value(0)).current;
  const animY = useRef(new Animated.Value(0)).current;
  // useRef allows the value to persist across re-renders without causing a re-render.
  // .current is used to access the stored value.

  // useEffect is used for cleanups
  // i dont change dynamic arrays

  useEffect(() => {
    // Horizontal drifting animation
    const horizontalAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animX, {
          toValue: rangeX,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animX, {
          toValue: -rangeX,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animX, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    );

    // Vertical bobbing animation
    const verticalAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animY, {
          toValue: rangeY,
          duration: duration / 3,
          useNativeDriver: true,
        }),
        Animated.timing(animY, {
          toValue: -rangeY / 2,
          duration: duration / 3,
          useNativeDriver: true,
        }),
        Animated.timing(animY, {
          toValue: 0,
          duration: duration / 3,
          useNativeDriver: true,
        }),
      ])
    );

    horizontalAnimation.start();
    verticalAnimation.start();

    // Cleanup Function (if component unmounts)
    return () => {
      horizontalAnimation.stop();
      verticalAnimation.stop();
    };
  }, [animX, animY, rangeX, rangeY, duration]);

  return { animX, animY };
  // The Animated.Value remembers the state of the animation, including the current value, the duration, and other properties like the start and end coordinates.

  // Just need to pass these
};

export default useCloudAnimation;