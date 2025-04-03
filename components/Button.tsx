import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'

interface ButtonProps {
  title: string;
  onPress: () => void;
  btnSize: string;
}

const ButtonTemplate = ({ title, onPress, btnSize }: ButtonProps) => {
  
  let buttonStyle;
  let textStyle;

  switch (btnSize) {
    case "small":
      buttonStyle = styles.smallBtn;
      textStyle = styles.smallText;
      break;
    case "mid":
      buttonStyle = styles.midBtn;
      textStyle = styles.midText;
      break;
    default:
      buttonStyle = styles.midBtn; // Default to "small" if no valid size is provided
      textStyle = styles.midText;
      break;
  }

  return (
    <TouchableOpacity
      style={buttonStyle} // Apply the selected button style
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
  
};

const styles = StyleSheet.create({
  smallBtn: {
    backgroundColor: "#EB9F4A",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  midBtn: {
    backgroundColor: "#EB9F4A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  smallText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: Platform.select({
      ios: "Delius-Regular, Helvetica",
      android: "Delius-Regular",
    }),
  },
  midText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: Platform.select({
      ios: "Delius-Regular, Helvetica",
      android: "Delius-Regular",
    }),
  },
});

export default ButtonTemplate;