import settings_styles from "@/assets/styles/settings/styles";
import { SignOutUser } from "@/components/auth/AuthUI";
import { SettingsContainer, SettingsContainerItem } from "@/components/settings/Containers";
import Spacer from "@/components/utilities/Spacer";
import useAuth from "@/hooks/useAuth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = [
  {
      iconName: "person",
      text: "Account Settings",
      link: "../settings/account" as const
  },
];

export default function Settings() {
  const { user } = useAuth();
  return (
    <SafeAreaView style={{ gap: 40 }}>
      {/*Basic profile data*/}
      <View style={{ 
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
        <View style={{ margin: "auto" }}>
          <Ionicons name="person-circle-outline" size={ 48 }/>
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
        <FlatList data={ settings } renderItem={
            ({ item }) =>
              <> 
                <Link href={ item.link }>
                  <View style={ settings_styles.settingsList }>
                    <Spacer/>
                    <SettingsContainerItem>
                      <View style={{ justifyContent: "center" }}>
                          <Ionicons name="person-outline" size={ 24 }/>
                      </View>
                      <View style={{ justifyContent: "center" }}>
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
