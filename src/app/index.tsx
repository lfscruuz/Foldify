import { Input } from '@/components/input';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/miku.png")}
        style={styles.illustration}
      />
      <Text style={styles.title}>Bem vind@!!</Text>
      <Text style={styles.subtitle}>Entrar</Text>
      <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  illustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 32,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    paddingTop: 35,
  },
  subtitle: {
    fontSize: 32,
  },
});
