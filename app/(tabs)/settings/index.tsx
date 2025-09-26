import IconComponent from "@/assets/icons/IconComponent";
import { SignOutUser } from "@/components/auth/AuthUI";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Cotainers";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <SafeAreaView style={{ gap: 40 }}>
      {/*Basic profile data*/}
      <View style={{ 
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
        <View style={{ margin: "auto" }}>
          <IconComponent iconName="account_circle" width={48} height={48}/>
        </View>
        <View style={{ 
          display: "flex",
          gap: 15,
          flexDirection: "row",
          justifyContent: "center"
        }}>
          <Text style={{ fontSize: 16 }}>{ user?.displayName }</Text>
          <Text>|</Text>
          <Text style={{ fontSize: 16 }}>{0} Friends</Text>
        </View>
      </View>

      {/*Profile Settings*/}
      <SettingsContainer>
        {/*Account Settings*/}
        <SettingsContainerItem>
          <View style={{ justifyContent: "center" }}>
            <IconComponent iconName="person" width={36} height={36}/>
          </View>
          <Pressable style={{
            justifyContent: "center"
          }} onPress={() => router.navigate("../settings/account")}>
              <Text style={{ fontSize: 15 }}>Account Settings</Text>
          </Pressable>
        </SettingsContainerItem>
      </SettingsContainer>

      <SignOutUser/>
    </SafeAreaView>
  );
}
