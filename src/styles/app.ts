import { StyleSheet } from "react-native";

const app = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  illustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain"
  }
});

const text = StyleSheet.create({
    title: {
    fontSize: 48,
    fontWeight: "bold",
    paddingTop: 35,
  },
  subtitle: {
    fontSize: 32,
  },
});

const form = StyleSheet.create({
  input: {
    borderRadius: 50,
    padding: 5,
    paddingLeft: 10
  },
  button: {
    height: 48,
    width: "100%",
    padding: 8,
    backgroundColor: "#7feff3",
    justifyContent: "center",
    alignItems: "center"
  }
});

export {app, text, form};