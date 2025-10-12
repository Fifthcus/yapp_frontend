import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function RootLayout() {
  const router = useRouter()
  return(
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ 
            headerShown: true,
            title: "Account Settings",
            headerLeft: () =>
              <TouchableOpacity 
                onPress={() => {
                  router.replace("../");
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 10
                }}
              >
                <Ionicons name="chevron-back" size={ 32 }/>
                <Text>Go Back</Text>
              </TouchableOpacity>,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back"
          }}/>
          <Stack.Screen name="changeUsername" options={{
            headerShown: true,
            title: "Change Username",
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back"
          }}/>
          <Stack.Screen name="changeEmail" options={{
            headerShown: true,
            title: "Change Email",
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back"
          }}/>
          <Stack.Screen name="changePassword" options={{
            headerShown: true,
            title: "Change Password",
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back"
          }}/>
          <Stack.Screen name="deleteUser" options={{
            headerShown: true,
            title: "Delete Account",
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerBackTitleStyle: {
              fontSize: 16
            },
            headerBackTitle: "Go Back"
          }}/>
        </Stack>
  );
}
