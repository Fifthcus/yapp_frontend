import { SignIn, SignUp } from "@/components/auth/AuthUI";
import Spacer from "@/components/utilities/Spacer";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

  const { user } = useAuth();
  const router = useRouter();

  const [isSignUpFormDisplayed, setIsSignUpFormDisplayed] = useState(true);

  useEffect(() => {
    if(user){
      router.replace("/(dashboard)/Chats");
    };
  }, []);

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
        { 
          isSignUpFormDisplayed ? 
          <View
            style={{ 
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <SignUp/>
            <Spacer/>
            <Button title="Already have an account?" onPress={() => setIsSignUpFormDisplayed(false)}/>
          </View>
          :
          <View
            style={{ 
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <SignIn/>
            <Spacer/>
            <Button title="Create an account." onPress={() => setIsSignUpFormDisplayed(true)}/>
          </View>
        }
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
