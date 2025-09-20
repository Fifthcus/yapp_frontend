import { StyleSheet } from "react-native";

const form_styles = StyleSheet.create({
    form: {
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 15,
        gap: 10
    },
    input: {
        paddingLeft: 7,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: "#E0E0E0",
        borderRadius: 10
    },
    error_message: {
        textAlign: "center",
        color: "#E0583D",
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: "#E0583D",
        borderRadius: 10
    },
    submit: {
        color: "E0E0E0",
        backgroundColor: "#4575BF",
        paddingVertical: 15,
        borderRadius: 10
    },
    submit_text: {
        color: "#E0E0E0",
        textAlign: "center",
    }
});

export default form_styles;