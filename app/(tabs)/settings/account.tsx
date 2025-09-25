import PersonIconSVG from "@/assets/icons/person/Person";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Cotainers";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account(){
    return(
        <>
            <SafeAreaView>
                <SettingsContainer>
                {/*Account Settings*/}
                    <SettingsContainerItem>
                    <View style={{ justifyContent: "center" }}>
                        <PersonIconSVG width={36} height={36}/>
                    </View>
                        <Pressable style={{
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 15 }}>Change Profile Picture</Text>
                        </Pressable>
                    </SettingsContainerItem>
                </SettingsContainer>
            </SafeAreaView>
        </>
    );
}