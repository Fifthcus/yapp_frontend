import IconComponent from "@/assets/icons/IconComponent";
import { Stack } from "expo-router";

export default function RootLayout() {
  return(
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="recipient/[id]" options={{ 
            headerShown: true,
            title: "Account",
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back",
            headerTitle: () => <IconComponent iconName="account_circle" width={48} height={48}/>
          }} />
        </Stack>
  );
}
