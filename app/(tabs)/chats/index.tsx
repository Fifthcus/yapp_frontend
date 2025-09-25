import RenderMessages from "@/components/messages/RenderMessages";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chats() {
  //perform gql query to fetch pfp and most recent message to display, save to async storage, will be fetched in RenderMessage component.
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
          <RenderMessages/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
