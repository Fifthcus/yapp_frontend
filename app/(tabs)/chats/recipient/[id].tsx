import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
    const { id } = useLocalSearchParams();
    return (
        <SafeAreaView>
            <Text>Hello { `${id}` }</Text>
        </SafeAreaView>
    );
}
