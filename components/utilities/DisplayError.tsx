import form_styles from "@/assets/styles/forms/styles";
import { Text } from "react-native";

type DisplayErrorProps = {
    errorMessage: string;
}

const DisplayError = ({ errorMessage }: DisplayErrorProps) =>{
    return(
        <Text style={ form_styles.error_message }>
            { errorMessage }
        </Text>
    );
}

export default DisplayError;