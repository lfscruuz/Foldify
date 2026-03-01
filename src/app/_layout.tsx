import { Stack } from "expo-router";

export default function Layout() {
    return(
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: { backgroundColor: "#fff" }
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="signup" options={{ title: 'Sign up' }} />
        </Stack>
    ) 
}