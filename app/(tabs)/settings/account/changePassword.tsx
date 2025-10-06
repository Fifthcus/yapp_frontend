import form_styles from "@/assets/styles/forms/styles";
import settings_styles from "@/assets/styles/settings/styles";
import { SettingsContainerPage } from "@/components/settings/Containers";
import YappButton from "@/components/utilities/YappButton";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function changePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const { user } = useAuth();
  const updateUsersPassword = async () => {
    try{
      if(user){
        const credential = EmailAuthProvider.credential(user.email!, currentPassword);
        await reauthenticateWithCredential(user, credential).then(async () => {
          return await updatePassword(user, newPassword);
        }).catch((error) => {
          console.log(error);
        });
        await updatePassword(user, newPassword);
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
          Change Your Password
        </Text>
        <TextInput onChangeText={ setCurrentPassword } value={ currentPassword } style={ form_styles.input } placeholder="Enter your current password"/>
        <TextInput onChangeText={ setNewPassword } value={ newPassword } style={ form_styles.input } placeholder="Enter your new password"/>
        <YappButton title="Submit" action={ updateUsersPassword }/>
      </View>
    </SettingsContainerPage>
  );
}
