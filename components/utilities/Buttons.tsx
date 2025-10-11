import { Pressable, StyleSheet, Text } from "react-native";

interface YappButton {
    title: string,
    bgColor: string,
    action?: any
}

const YapButton = ({ title, bgColor, action }: YappButton) => {
    return(
        <Pressable style={ [styles.button, { backgroundColor: bgColor }] } >
            <Text 
                style={ [styles.buttonText] }
                onPress={ () => action() }
            >
                { title }
            </Text>
        </Pressable>
    );
}

export default YapButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        borderRadius: 10
    },
    buttonText: {
        color: "#FFF",
        textAlign: "center"
    },
});