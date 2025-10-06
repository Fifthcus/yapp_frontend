import form_styles from "@/assets/styles/forms/styles";
import settings_styles from "@/assets/styles/settings/styles";
import { SettingsContainerPage } from "@/components/settings/Containers";
import YappButton from "@/components/utilities/YappButton";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { EmailAuthProvider, reauthenticateWithCredential, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function changeUsername() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const router = useRouter();

  const { user } = useAuth();
  const updateUsersUsername = async () => {
    try{
      if(user){
        const credential = EmailAuthProvider.credential(user.email!, currentPassword);
        await reauthenticateWithCredential(user, credential).then(async () => {
          return await updateProfile(user, {
            displayName: username
          });
        }).catch((error) => {
          console.log(error);
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
          Change Your Username
        </Text>
        <TextInput onChangeText={ setCurrentPassword } value={ currentPassword } style={ form_styles.input } placeholder="Enter your current password"/>
        <TextInput onChangeText={ setUsername } value={ username } style={ form_styles.input } placeholder="Enter username"/>
        <YappButton title="Submit" action={ updateUsersUsername }/>
      </View>
    </SettingsContainerPage>
  );
}
