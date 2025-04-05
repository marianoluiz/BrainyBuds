import { StyleSheet, Image, ImageSourcePropType } from 'react-native'

interface CardProps {
  cardImg: ImageSourcePropType
}

const CardTemplate = ({cardImg}: CardProps) => {
  return (
      <Image source={cardImg} style={styles.card}></Image>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 144,
    height: 170
  }
})
export default CardTemplate