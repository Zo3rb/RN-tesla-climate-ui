import { Pressable, View, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

import styles from "./styles";

export default function Option(props) {
  return (
    <Link href={props.href} asChild>
      <Pressable style={styles.optionRow}>
        <MaterialCommunityIcons name={props.iconName} size={26} color="gray" />
        <Text style={styles.optionText}>{props.name}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
}
