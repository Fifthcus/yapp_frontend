import { StyleSheet } from "react-native";

const message_style = StyleSheet.create({
    messageList: {
        display: "flex",
        columnGap: 10,
        flexDirection: "row",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
        width: "100%",
        paddingHorizontal: 15
    },
    messageListIcon: {
        justifyContent: "center",
    },
    messageListText: {
        justifyContent: "center",
        gap: 3
    },
    delete: {
        display: "flex",
        backgroundColor: "#F22C2C",
        paddingHorizontal: 15,
        justifyContent: "center"
    }
});

export default message_style;