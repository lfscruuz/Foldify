import { Input } from '@/components/input';
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import {app, text, form} from "@/styles/app"
import { Button } from '@/components/Button';
import { Link } from 'expo-router';

export default function Signup() {
  return (
    <KeyboardAvoidingView contentContainerStyle={{flex: 1}} behavior="height">
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={app.container}>
          <Image
            source={require("@/assets/teto.png")}
            style={app.illustration}
            />
          <Text style={text.title}>Bem vind@!!</Text>
          <Text style={text.subtitle}>Cadastrar</Text>
          <Input placeholder='E-mail' keyboardType='email-address'/>
          <Input placeholder='Senha' secureTextEntry/>
          <Button label='Cadastrar' style={form.button}/>
          <Link href="/">
            <Text>entre aqui</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

