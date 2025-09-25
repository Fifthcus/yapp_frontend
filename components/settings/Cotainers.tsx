import { ReactNode } from "react";
import { View } from "react-native";

export function SettingsContainer({ children }: { children: ReactNode }) {
    return (
        <View style={{
            paddingHorizontal: 25
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