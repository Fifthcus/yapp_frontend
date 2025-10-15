import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#171717",
      tabBarStyle: {
        backgroundColor: "#F2F2F2"
      },
      headerShown: false
    }}>
      <Tabs.Screen name="chats" options={{
        title: "Conversations", 
        tabBarIcon: () => {
          return(
            <Ionicons name="chatbubbles-outline" size={ 24 }/>
          )
        }
      }}/>
      <Tabs.Screen name="settings" options={{ 
        title: "Settings", 
        tabBarIcon: () => {
          return(
            <Ionicons name="cog-outline" size={ 24 }/>
          )
        }
      }} />
    </Tabs>
  );
}
