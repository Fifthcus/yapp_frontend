import IconComponent from "@/assets/icons/IconComponent";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Cotainers";
import Spacer from "@/components/utilities/Spacer";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account(){
    const accountSettingsList = [
        {
            iconName: "account_circle",
            text: "Change Profile Picture"
        },
        {
            iconName: "signature",
            text: "Change Username",
        },
        {
            iconName: "email",
            text: "Change Email",
        },
        {
            iconName: "key",
            text: "Change Password"
        }
    ];
    return(
        <>
            <SafeAreaView>
                <SettingsContainer>
                    {/*Account Settings*/}
                    <FlatList data={accountSettingsList} renderItem={
                        ({ item }) =>
                            <View> 
                                    <View style={{
                                        borderBottomWidth: 1,
                                        borderColor: "#E0E0E0",
                                        paddingLeft: 15
                                    }}>
                                        <Spacer/>
                                            <SettingsContainerItem>
                                                <View style={{ justifyContent: "center" }}>
                                                    <IconComponent iconName={ item.iconName } width={36} height={36}/>
                                                </View>
                                                <Pressable style={{
                                                    justifyContent: "center"
                                                }}>
                                                    <Text style={{ fontSize: 15 }}>{ item.text }</Text>
                                                </Pressable>
                                            </SettingsContainerItem>
                                        <Spacer/>
                                    </View>
                            </View>
                    }/>
                </SettingsContainer>
            </SafeAreaView>
        </>
    );
}