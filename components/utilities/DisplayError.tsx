import form_styles from "@/assets/styles/forms/styles";
import { Text } from "react-native";

type DisplayErrorProps = {
    errorMessage: string;
}

const DisplayError = ({ errorMessage }: DisplayErrorProps) =>{
    return(
        <>
            {
                errorMessage ? 
                    <Text style={ form_styles.error_message }>
                        { errorMessage }
                    </Text>
                :
                null
            }
        </>
    );
}

export default DisplayError;