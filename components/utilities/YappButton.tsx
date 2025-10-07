import form_styles from "@/assets/styles/forms/styles";
import { Pressable, Text } from "react-native";

interface YappButton {
    title: string,
    action?: any
}

const YappButton = ({ title, action }: YappButton) => {
    return(
        <Pressable style={ form_styles.submit } >
            <Text 
                style={ form_styles.submit_text }
                onPress={ () => action() }>
                { title }
            </Text>
        </Pressable>
    );
}

export default YappButton;