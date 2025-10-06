import form_styles from "@/assets/styles/forms/styles";
import { auth } from "@/FirebaseConfig";
import { Route, useRouter } from "expo-router";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import DisplayError from "../utilities/DisplayError";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();

    const createUserAccount = async () => {
        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = credentials.user;
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
            <TextInput onChangeText={ setEmail } value={ email } style={ form_styles.input } placeholder="Enter your email"/>
            <TextInput onChangeText={ setUsername } value={ username } style={ form_styles.input } placeholder="Create a username"/>
            <TextInput onChangeText={ setPassword } value={ password } style={ form_styles.input } placeholder="Enter your password"/>
            {/* Error Message */}
            { errorMessage?
                <DisplayError errorMessage={errorMessage}/>
                :
                null
            }
            <Pressable style={ form_styles.submit } onPress={createUserAccount}>
                <Text style={ form_styles.submit_text }>
                    Create Account
                </Text>
            </Pressable>
        </View>
    );
}

export function SignIn({ route="./(tabs)/chats" }: { route: string}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const auth = getAuth();
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
        <TextInput onChangeText={ setPassword } value={ password } style={ form_styles.input } placeholder="Enter your password"/>
        {/* Error Message */}
        { errorMessage?
            <DisplayError errorMessage={errorMessage}/>
            :
            null
        }
        <Pressable style={ form_styles.submit } onPress={signInUser}>
            <Text style={ form_styles.submit_text }>
                Sign In
            </Text>
        </Pressable>
      </View>
    );
}

export function SignOutUser(){
    const auth = getAuth();
    const router = useRouter();

    const handlePress = async () => {
        await signOut(auth);
        router.replace("/");
    }
    return(
        <Button title="Sign Out" onPress={handlePress}/>
    );
}