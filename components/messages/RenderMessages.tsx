import AccountIconSVG from "@/assets/icons/account_circle_24dp_171717_FILL0_wght400_GRAD0_opsz24.svg";
import message_style from "@/assets/styles/messages/styles";
import { FlatList, Text, View } from "react-native";

//Most recent messages from all contacts, what is seen when user logs in
const RenderMessages = () => {
    //
    //fetch data from async storage
    //
    const messagesToRender = [
        {
            pfp: null,
            contactName: "uco",
            mostRecentMessage: "lorem ipsum"
        },
        {
            pfp: null,
            contactName: "nans",
            mostRecentMessage: "lorem ipsum"
        },
        {
            pfp: null,
            contactName: "higgard",
            mostRecentMessage: "lorem ipsum"
        },
        {
            pfp: null,
            contactName: "christopher",
            mostRecentMessage: "lorem ipsum"
        },
        {
            pfp: null,
            contactName: "bork",
            mostRecentMessage: "lorem ipsum"
        }
    ]

    return(
        <FlatList data={messagesToRender} renderItem={
            ({ item }) => 
                <View style={message_style.messageList}>
                    <View>
                        <AccountIconSVG/>
                    </View>
                    <View>
                        <Text>
                            { item.contactName }
                        </Text>
                        <Text>
                            { item.mostRecentMessage }
                        </Text>
                    </View>
                </View>
            }
        />
    );
}
export default RenderMessages;