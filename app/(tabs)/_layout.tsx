import IconComponent from "@/assets/icons/IconComponent";
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
            <IconComponent iconName="chat" width={24} height={24}/>
          );
        }
      }} />
      <Tabs.Screen name="settings" options={{ 
        title: "Settings", 
        tabBarIcon: () => {
          return(
            <IconComponent iconName="settings" width={24} height={24}/>
          )
        }
      }} />
    </Tabs>
  );
}
