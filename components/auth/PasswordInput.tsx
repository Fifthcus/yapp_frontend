import form_styles from "@/assets/styles/forms/styles";
import { TextInput } from "react-native";

interface PasswordInputProps {
    password: string,
    setPassword: (password: string) => void,
    placeholder: string,
    setErrorMessage?: (errorMessage: string) => void
}

const PasswordInput = ({ password, setPassword, placeholder, setErrorMessage }: PasswordInputProps) => {
    return(
        <TextInput 
            value={ password } 
            onChangeText={ (input) => {
                setPassword(input);
                { setErrorMessage ? setErrorMessage("") : null };
            }}
            secureTextEntry={ true }
            style={ form_styles.input } 
            placeholder={ placeholder } />
    );
}

export default PasswordInput;