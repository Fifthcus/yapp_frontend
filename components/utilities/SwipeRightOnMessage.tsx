import message_style from "@/assets/styles/messages/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export const SwipeRightOnMessageAction = () => {
    return(
        <View style={message_style.delete}>
            <Ionicons name="trash-outline" size={ 36 } color="white"/>
        </View>
    );
}