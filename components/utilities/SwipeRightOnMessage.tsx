import DeleteIcon from "@/assets/icons/delete/Delete";
import message_style from "@/assets/styles/messages/styles";
import { View } from "react-native";

export const SwipeRightOnMessageAction = () => {
    return(
        <View style={message_style.delete}>
            <DeleteIcon width={24} height={24}/>
        </View>
    );
}