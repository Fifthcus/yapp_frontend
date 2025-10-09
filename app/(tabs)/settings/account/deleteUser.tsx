import form_styles from "@/assets/styles/forms/styles";
import settings_styles from "@/assets/styles/settings/styles";
import DisplayError from "@/components/utilities/DisplayError";
import Spacer from "@/components/utilities/Spacer";
import YappButton from "@/components/utilities/YappButton";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function deleteUserAccount() {
  const [finalDecision, setFinalDecision] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const { user } = useAuth();
  const deleteUsersAccount = async () => {
    try{
      if(user){
        const credential = EmailAuthProvider.credential(user.email!, currentPassword);
        if(finalDecision){
          await reauthenticateWithCredential(user, credential).then(async () => {
            await deleteUser(user);
            return router.replace("../../../../");
          }).catch((error) => {
            if(error instanceof FirebaseError){
              setErrorMessage(error.message);
            } else {
              console.log(error);
            }
          });
        } else if (!finalDecision){
          setErrorMessage("You must confirm your choice");
        }
      }
    } catch(error){
      if(error instanceof FirebaseError){
        setErrorMessage(error.message);
      }
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
        <DisplayError errorMessage={ errorMessage } />
        <YappButton title="Tap to Submit Request" action={ deleteUsersAccount }/>
      </View>
    </View>
  );
}
