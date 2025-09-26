import { Stack } from "expo-router";

export default function RootLayout() {
  return(
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="account" options={{ 
            headerShown: true,
            title: "Account",
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back"
          }} />
        </Stack>
  );
}
