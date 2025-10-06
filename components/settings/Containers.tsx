import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export function SettingsContainer({ children }: { children: ReactNode }) {
    return (
        <View style={{
            paddingHorizontal: 1
        }}>
            { children }
        </View>
    );
}

export function SettingsContainerItem({ children }: { children: ReactNode }){
    return (
        <View style={{
            display: "flex",
            flexDirection: "row",
            gap: 10
        }}>
            { children }
        </View>
    );
}

export function SettingsContainerPage({ children }: { children: ReactNode }){
    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={ Platform.OS === "ios" ? "padding" : "height" }
            keyboardVerticalOffset={ 60 }
        >
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                flex: 1
            }}>
                { children }
            </View>
        </KeyboardAvoidingView>
    );
}