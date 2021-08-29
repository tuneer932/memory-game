import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: width / 4 - 10,
    height: width / 4 - 10,
    borderWidth: 2,
    marginRight: 4,
    marginBottom: 4,
    justifyContent: "center",
  },
  innerCardText: {
    textAlign: "center",
    fontSize: 20
  },
});
export default styles;
