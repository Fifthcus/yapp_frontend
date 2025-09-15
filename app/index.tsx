import SignUp from "@/components/auth/SignUp";
import Spacer from "@/components/utilities/Spacer";
import { Button, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
      <SafeAreaView style={{ 
        flex: 1,
        justifyContent: "center",
      }}>
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={ Platform.OS === "ios" ? "padding" : "height" }
        keyboardVerticalOffset={ 60 }
      >
        {/* Greeting */}
        <View
          style={{ 
            flexGrow: 1 ,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20
            }}>
            Welcome to Yapp.
          </Text>
        </View>

        {/* Forms */}
        <View
          style={{ 
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <SignUp/>
          <Spacer/>
          <Button title="Already have an account?"/>
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
