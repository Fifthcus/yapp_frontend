import { Stack } from "expo-router";

export default function RootLayout() {
  return(
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="changeUsername" />
          <Stack.Screen name="changeEmail" />
          <Stack.Screen name="changePassword" />
          <Stack.Screen name="deleteUser" />
        </Stack>
  );
}
