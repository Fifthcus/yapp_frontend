import form_styles from "@/assets/styles/forms/styles";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={ form_styles.form }>
            <TextInput onChangeText={ setEmail } value={ email } style={ form_styles.input } placeholder="Enter your email"/>
            <TextInput onChangeText={ setPassword } value={ password } style={ form_styles.input } placeholder="Enter your password"/>
            <Pressable style={ form_styles.submit }>
                <Text style={ form_styles.submit_text }>
                    Create Account
                </Text>
            </Pressable>
        </View>
    );
}
