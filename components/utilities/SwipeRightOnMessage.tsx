import IconComponent from "@/assets/icons/IconComponent";
import message_style from "@/assets/styles/messages/styles";
import { View } from "react-native";

export const SwipeRightOnMessageAction = () => {
    return(
        <View style={message_style.delete}>
            <IconComponent iconName="delete" width={24} height={24}/>
        </View>
    );
}