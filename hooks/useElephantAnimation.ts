import { Animated } from "react-native"
import { useEffect, useRef } from "react"

const useElephantAnimation = (rangeY: number, duration: number) => {
  const animY = useRef( new Animated.Value(0)).current;

  useEffect(()=> {
    const verticalAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animY, {
          toValue: rangeY,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animY, {
          toValue: -rangeY,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animY, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])  
    );

    verticalAnimation.start();

    // Cleanup
    return () => {
      verticalAnimation.stop();
    }

  }, [animY, rangeY, duration]);

  return animY;
}

export default useElephantAnimation