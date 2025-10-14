import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function RootLayout() {
  return(
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="recipient/[id]" options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back",
            headerTitle: () => 
              <View>
                <Ionicons name="person-circle-outline" size={ 48 }/>
              </View>
          }} />
        </Stack>
  );
}
