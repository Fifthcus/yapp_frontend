import { Colors } from "@/assets/styles/colors/styles";
import form_styles from "@/assets/styles/forms/styles";
import settings_styles from "@/assets/styles/settings/styles";
import { SettingsContainerPage } from "@/components/settings/Containers";
import YappButton from "@/components/utilities/Buttons";
import DisplayError from "@/components/utilities/DisplayError";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function changeEmail() {
  const { user } = useAuth()

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const updateUsersEmail = async () => {
    try{
      if(user){
        const credential = EmailAuthProvider.credential(user.email!, currentPassword);
        await reauthenticateWithCredential(user, credential).then(async () => {
          return await updateEmail(user, email);
        }).catch((error) => {
          if(error instanceof FirebaseError){
            setErrorMessage(error.message);
          } else {
            console.log(error);
          }
        });
        router.replace("../../settings");
      }
    } catch(error){
      console.log(error);
    }
  }
  return(
    <SettingsContainerPage>
      <View style={ form_styles.form }>
        <Text style={ settings_styles.settingsHeader }>
          Change Your Email
        </Text>
        <TextInput onChangeText={ setCurrentPassword } value={ currentPassword } style={ form_styles.input } placeholder="Enter your current password"/>
        <TextInput onChangeText={ setEmail } value={ email } style={ form_styles.input } placeholder="Enter your new email"/>
        <DisplayError errorMessage={ errorMessage }/>
        <YappButton title="Submit" bgColor={ Colors.primary } action={ updateUsersEmail }/>
      </View>
    </SettingsContainerPage>
  );
}
