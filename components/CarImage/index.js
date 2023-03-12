import { Image } from "react-native";
import carImg from "../../assets/images/car.png";

import styles from "./styles";

export default function CarImage(props) {
  return <Image source={carImg} style={styles.image} resizeMode="contain" />;
}
