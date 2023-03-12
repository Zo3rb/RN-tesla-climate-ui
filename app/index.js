import { StyleSheet, SafeAreaView, FlatList, StatusBar } from "react-native";

import Header from "../components/Header";
import CarImage from "../components/CarImage";
import Controls from "../components/Controls";
import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOption";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <CarImage />

      <Controls />

      <FlatList
        style={{ borderTopWidth: 1, borderTopColor: "#FFF", marginTop: 5 }}
        data={menuOptions}
        renderItem={MenuOption}
      />

      <StatusBar StatusBarStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
});
