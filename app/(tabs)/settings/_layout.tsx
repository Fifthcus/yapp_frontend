import { Stack } from "expo-router";

export default function RootLayout() {
  return(
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="account" options={{ 
            headerShown: true,
            title: "Account",
            headerBackTitle: "Go Back"
          }} />
        </Stack>
  );
}
