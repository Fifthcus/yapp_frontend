import ChatsIconSVG from "@/assets/icons/chats/Chat";
import SettingsIconSVG from "@/assets/icons/settings/Settings";
import { Tabs } from "expo-router";

export default function DashobardLayout() {
  return(
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#F2F2F2"
      }
      }}>
      <Tabs.Screen name="Chats" options={{ 
        title: "Chats",
        tabBarIcon: () => {
          return(
            <ChatsIconSVG width={24} height={24}/>
          );
        }
      }} />
      <Tabs.Screen name="Settings" options={{ 
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
