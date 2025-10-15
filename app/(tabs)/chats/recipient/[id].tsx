import MessageInput from "@/components/messages/MessageInput";
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from "expo-router";
import { useLayoutEffect } from "react";
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();
    const recipientId = String(id);
    const messages = [
        {
            id: recipientId,
            message: "Hello World"
        },
        {
            id: "2",
            message: "Lorem Ipsum"
        }
    ];
    useLayoutEffect(() => {
        const parent = navigation.getParent();
        parent?.setOptions({
            tabBarStyle: { display: 'none' },
        });
        return () => {
            parent?.setOptions({
            tabBarStyle: { backgroundColor: "#F2F2F2" },
        });
    };
    }, [navigation]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ Platform.OS === "ios" ? "padding" : "height" }
                keyboardVerticalOffset={ 120 }
            >
                <FlatList data={ messages } renderItem={ 
                        ({ item }) =>
                        <View style={ styles.messageContainer }>
                            {/* Sender or Recipient */}
                            <View style={ item.id === recipientId ? [styles.sharedContainer, styles.recipientContainer] : [styles.sharedContainer, styles.senderContainer]}>
                                <Text style={ styles.messageText }>
                                    { item.message }
                                </Text>
                            </View>
                        </View> 
                    }
                    keyExtractor={ item => item.id }
                />
                    <MessageInput/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 12,
        gap: 10
    },
    messageText: {
        color: "white"
    },
    recipientContainer: {
        backgroundColor: "#BABABA",
    },
    senderContainer: {
        backgroundColor: "#3097D9",
        alignSelf: "flex-end",
    },
    sharedContainer: {
        maxWidth: "65%",
        alignSelf: "flex-start",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    }
});