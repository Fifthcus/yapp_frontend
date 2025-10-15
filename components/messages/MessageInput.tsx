import { Colors } from "@/assets/styles/colors/styles";
import { TextInput, View } from "react-native";
import YapButton from "../utilities/Buttons";

const MessageInput = () => {
    return(
            <View style={{
                flexDirection: "row",
                gap: 5,
                paddingHorizontal: 5
            }}>
                <TextInput 
                    placeholder="Yapp"
                    style={{
                        flex: 4,
                        paddingVertical: 18,
                        borderWidth: 2,
                        borderColor: Colors.borderColor,
                        borderRadius: 10
                    }}
                />
                <View style={{ flex: 1 }}>
                    <YapButton title="Send" bgColor={ Colors.primary } borderWidth={ 2 } borderColor={ Colors.primary }/>
                </View>
            </View>
    );
}

export default MessageInput;