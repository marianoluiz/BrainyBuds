import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.SmallBtn} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SmallBtn: {
    backgroundColor: "#EB9F4A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: Platform.select({
      ios: "Delius-Regular, Helvetica",
      android: "Delius-Regular",
    }),
  },
});

export default Button