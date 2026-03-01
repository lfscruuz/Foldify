import { Input } from '@/components/input';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import {app, text, form} from "@/styles/app"
import { Button } from '@/components/Button';
import { Link } from 'expo-router';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  return (
    <KeyboardAwareScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    enableOnAndroid={true}
    extraScrollHeight={70}
    keyboardShouldPersistTaps="handled"
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={app.container}>
          <Image
            source={require("@/assets/miku.png")}
            style={app.illustration}
            
            />
          <Text style={text.title}>Bem vind@!!</Text>
          <Text style={text.subtitle}>Entrar</Text>
          <Input placeholder='E-mail' keyboardType='email-address'/>
          <Input placeholder='Senha' secureTextEntry/>
          <Button label='Entrar' style={form.button}/>
          <Link href="/signup">
            <Text>cadastre-se aqui</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

