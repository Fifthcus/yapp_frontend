import IconComponent from "@/assets/icons/IconComponent";
import { SignOutUser } from "@/components/auth/AuthUI";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Cotainers";
import Spacer from "@/components/utilities/Spacer";
import useAuth from "@/hooks/useAuth";
import { Link, useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = [
  {
      iconName: "person",
      text: "Account Settings"
  },
];

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

      {/*Settings Page*/}
      <SettingsContainer>
        <FlatList data={settings} renderItem={
            ({ item }) =>
              <> 
                  <Link href="../settings/account">
                    <View style={{
                      borderBottomWidth: 1,
                      borderColor: "#E0E0E0",
                      width: "100%",
                      paddingLeft: 15
                    }}>
                      <Spacer/>
                      <SettingsContainerItem>
                        <View style={{ justifyContent: "center" }}>
                            <IconComponent iconName={ item.iconName } width={36} height={36}/>
                        </View>
                        <View style={{
                              justifyContent: "center"
                          }}>
                          <Text style={{ fontSize: 15 }}>{ item.text }</Text>
                        </View>
                      </SettingsContainerItem>
                      <Spacer/>
                    </View>
                  </Link>
              </>
        }/>
      </SettingsContainer>

      <SignOutUser/>
    </SafeAreaView>
  );
}
