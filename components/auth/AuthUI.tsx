import { Colors } from "@/assets/styles/colors/styles";
import form_styles from "@/assets/styles/forms/styles";
import { auth } from "@/FirebaseConfig"; //initialize firebase
import { Route, useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { TextInput, View } from "react-native";
import YappButton from "../utilities/Buttons";
import DisplayError from "../utilities/DisplayError";
import PasswordInput from "./PasswordInput";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    const createUserAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            //update username
            if (auth.currentUser) {
                updateProfile(auth.currentUser, {
                    displayName: username
                });
                router.replace("./(tabs)/chats");
            } else {
                setErrorMessage("An error occured trying to create your account.");
            }
        } catch(error) {
            if (error instanceof FirebaseError) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An error occured trying to create your account.");
            }
        }
    }
    return (
        <View style={ form_styles.form }>
            <TextInput 
                onChangeText={ (input) => {
                    setEmail(input);
                    setErrorMessage("");
                }} 
                value={ email } 
                style={ form_styles.input } 
                placeholder="Enter your email"
            />
            <TextInput 
                onChangeText={ (input) => {
                    setUsername(input);
                    setErrorMessage("");
                }} 
                value={ username } 
                style={ form_styles.input } 
                placeholder="Create a username"/>
            <PasswordInput password={ password } setPassword={ setPassword } setErrorMessage={ setErrorMessage } placeholder="Create a password"/>
            {/* Error Message */}
            <DisplayError errorMessage={ errorMessage }/>
            <YappButton title="Create Account" bgColor={ Colors.primary }action={ createUserAccount }/>
        </View>
    );
}

export const SignIn = ({ route="./(tabs)/chats" }: { route?: string}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    const signInUser = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            router.replace(route as Route);
        } catch(error) {
            if (error instanceof FirebaseError) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An error occured trying to sign into your account.");
            }
        }
    }
    return (
      <View style={ form_styles.form }>
        <TextInput onChangeText={ setEmail } value={ email } style={ form_styles.input } placeholder="Enter your email"/>
        <PasswordInput password={ password } setPassword={ setPassword } setErrorMessage={ setErrorMessage } placeholder="Enter your password"/>
        {/* Error Message */}
        <DisplayError errorMessage={ errorMessage }/>
        <YappButton title="Sign In" bgColor={ Colors.primary } action={ signInUser }/>
      </View>
    );
}

export const SignOutUser = () => {
    const router = useRouter();

    const signUserOut = async () => {
        await signOut(auth);
        router.replace("/");
    }
    return(
        <View style={{
            paddingHorizontal: 50 
        }}>
            <YappButton title="Sign Out" bgColor={ Colors.secondary } action={ signUserOut }/>
        </View>
    );
}