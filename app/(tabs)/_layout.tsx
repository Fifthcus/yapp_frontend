import ChatsIconSVG from "@/assets/icons/chats/Chat";
import SettingsIconSVG from "@/assets/icons/settings/Settings";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: "#F2F2F2",
      },
      tabBarActiveTintColor: "#171717",
      headerShown: false
    }}>
      <Tabs.Screen name="chats/index" options={{ 
        title: "Chats",
        tabBarIcon: () => {
          return(
            <ChatsIconSVG width={24} height={24}/>
          );
        }
      }} />
      <Tabs.Screen name="settings" options={{ 
        title: "Settings", 
        tabBarIcon: () => {
          return(
            <SettingsIconSVG width={24} height={24}/>
          )
        }
      }} />
    </Tabs>
  );
}
