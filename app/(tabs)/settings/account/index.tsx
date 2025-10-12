import settings_styles from "@/assets/styles/settings/styles";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Containers";
import Spacer from "@/components/utilities/Spacer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const accountSettingsList = [
    {
        iconName: "person-outline",
        text: "Change Username",
        link: "./account/changeUsername"
    },
    {
        iconName: "mail-outline",
        text: "Change Email",
        link: "./account/changeEmail"
    },
    {
        iconName: "keypad-outline",
        text: "Change Password",
        link: "./account/changePassword"
    },
    {
        iconName: "trash-outline",
        text: "Delete Your Account",
        link: "./account/deleteUser"
    }
] as const;

export default function Account(){
    return(
        <>
            <SafeAreaView>
                <SettingsContainer>
                    {/*Account Settings*/}
                    <FlatList data={ accountSettingsList } renderItem={
                        ({ item }) =>
                            <Link href={ item.link }>
                                <View style={ settings_styles.settingsList }>
                                        <SettingsContainerItem>
                                            <View style={{ justifyContent: "center" }}>
                                                <Ionicons name={ item.iconName } size={ 24 }/>
                                            </View>
                                            <View style={{ justifyContent: "center" }}>
                                                <Text style={{ fontSize: 15 }}>{ item.text }</Text>
                                            </View>
                                        </SettingsContainerItem>
                                    <Spacer/>
                                </View>
                            </Link>
                    }/>
                </SettingsContainer>
            </SafeAreaView>
        </>
    );
}