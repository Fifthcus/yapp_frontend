import form_styles from "@/assets/styles/forms/styles";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export function SignUp() {
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const signUp = async () => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = credentials.user;
            //update username
            if (auth.currentUser) {
                updateProfile(auth.currentUser, {
                    displayName: username
                });
            } else {
                setErrorMessage("An error occured trying to create your account.");
            }
        } catch(error) {
            setErrorMessage("An error occured trying to create your account.");
        }
    }
    return (
        <View style={ form_styles.form }>
            <TextInput onChangeText={ setEmail } value={ email } style={ form_styles.input } placeholder="Enter your email"/>
            <TextInput onChangeText={ setPassword } value={ password } style={ form_styles.input } placeholder="Create a username"/>
            <TextInput onChangeText={ setPassword } value={ password } style={ form_styles.input } placeholder="Enter your password"/>
            <Text>

            </Text>
            <Pressable style={ form_styles.submit } onPress={signUp}>
                <Text style={ form_styles.submit_text }>
                    Create Account
                </Text>
            </Pressable>
        </View>
    );
}

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <View style={ form_styles.form }>
        <TextInput onChangeText={ setEmail } value={ email } style={ form_styles.input } placeholder="Enter your email"/>
        <TextInput onChangeText={ setPassword } value={ password } style={ form_styles.input } placeholder="Enter your password"/>
        <Pressable style={ form_styles.submit }>
            <Text style={ form_styles.submit_text }>
                Sign In
            </Text>
        </Pressable>
      </View>
    );
}