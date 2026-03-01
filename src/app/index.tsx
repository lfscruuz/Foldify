import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function index() 
{
  const router = useRouter();
  const [isLoggedIn, setIstLoggedIn] = useState(false);

  useEffect(() => {
    if(isLoggedIn) {
      router.replace("/login")
    }
     else {
      router.replace("/signup")
    }
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator/>
    </View>
  );
}