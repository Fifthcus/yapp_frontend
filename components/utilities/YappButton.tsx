import form_styles from "@/assets/styles/forms/styles";
import { Button, TouchableOpacity } from "react-native";

interface YappButton {
    title: string,
    action?: any
}

const YappButton = ({ title, action }: YappButton) => {
    return(
        <TouchableOpacity style={ form_styles.submit } >
            <Button title={ title } color="#E0E0E0" onPress={() => action()}/>
        </TouchableOpacity>
    );
}

export default YappButton;