import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <FontAwesome name="user-circle" size={30} color="gray" />
    </View>
  );
}
