import form_styles from "@/assets/styles/forms/styles";
import settings_styles from "@/assets/styles/settings/styles";
import Spacer from "@/components/utilities/Spacer";
import YappButton from "@/components/utilities/YappButton";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function deleteUserAccount() {
  const [finalDecision, setFinalDecision] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");

  const router = useRouter();

  const { user } = useAuth();
  const deleteUsersAccount = async () => {
    try{
      if(user){
        const credential = EmailAuthProvider.credential(user.email!, currentPassword);
        await reauthenticateWithCredential(user, credential).then(async () => {
          return await deleteUser(user);
        }).catch((error) => {
          console.log(error);
        });
        router.replace("../../../../");
      }
    } catch(error){
      console.log(error);
    }
  }
  return(
    <View style={ settings_styles.settingsHeader }>
      <View style={ form_styles.form }>
        <Text style={ settings_styles.settingsHeader }>
          Delete Your Account?
        </Text>
        <TextInput onChangeText={ setCurrentPassword } value={ currentPassword } style={ form_styles.input } placeholder="Enter your current password"/>
        <View>
          <Text style={{ textAlign: "center" }}>Your choice: { !finalDecision ? "No" : "Yes" }</Text>
          <Spacer/>
            <Text onPress={ () => setFinalDecision(!finalDecision) } style={{ 
              textAlign: "center",
              color: "red",
              textDecorationLine: "underline",
              textDecorationColor: "red"
            }}>
              { !finalDecision ? "Confirm?" : "I Change My Mind!" }
            </Text>
        </View>
        <Spacer/>
        <YappButton title="Tap to Submit Request" action={ deleteUsersAccount }/>
      </View>
    </View>
  );
}
