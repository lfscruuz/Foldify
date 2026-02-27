import { Input } from '@/components/input';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import {app, text, form} from "@/styles/app"
import { Button } from '@/components/Button';

export default function Index() {
  return (
    <KeyboardAvoidingView contentContainerStyle={{flex: 1}} behavior="height">
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled">
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

