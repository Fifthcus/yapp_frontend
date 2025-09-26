import IconComponent from "@/assets/icons/IconComponent";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Cotainers";
import Spacer from "@/components/utilities/Spacer";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account(){
    return(
        <>
            <SafeAreaView>
                <SettingsContainer>
                {/*Account Settings*/}
                    {/*PFP*/}
                    <SettingsContainerItem>
                        <View style={{ justifyContent: "center" }}>
                            <IconComponent iconName="account_circle" width={36} height={36}/>
                        </View>
                        <Pressable style={{
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 15 }}>Change Profile Picture</Text>
                        </Pressable>
                    </SettingsContainerItem>

                    <Spacer/>

                    {/*Display Name*/}
                    <SettingsContainerItem>
                        <View style={{ justifyContent: "center" }}>
                            <IconComponent iconName="signature" width={36} height={36}/>
                        </View>
                        <Pressable style={{
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 15 }}>Change Username</Text>
                        </Pressable>
                    </SettingsContainerItem>

                    <Spacer/>

                    {/*Email*/}
                    <SettingsContainerItem>
                        <View style={{ justifyContent: "center" }}>
                            <IconComponent iconName="email" width={36} height={36}/>
                        </View>
                        <Pressable style={{
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 15 }}>Change Email</Text>
                        </Pressable>
                    </SettingsContainerItem>

                    <Spacer/>
                    
                    {/*Password*/}
                    <SettingsContainerItem>
                        <View style={{ justifyContent: "center" }}>
                            <IconComponent iconName="key" width={36} height={36}/>
                        </View>
                        <Pressable style={{
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 15 }}>Change Password</Text>
                        </Pressable>
                    </SettingsContainerItem>
                </SettingsContainer>
            </SafeAreaView>
        </>
    );
}