import IconComponent from "@/assets/icons/IconComponent";
import message_style from "@/assets/styles/messages/styles";
import useAuth from "@/hooks/useAuth";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { SwipeRightOnMessageAction } from "../utilities/SwipeRightOnMessage";

//Most recent messages from all contacts, what is seen when user logs in
const RenderMessages = () => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!user){
            router.replace("/");
        }
    }, []);
    //
    //fetch data from async storage
    //
    const messagesToRender = [
        {
            id: 1,
            pfp: null,
            contactName: "uco",
            mostRecentMessage: "lorem ipsum"
        },
        {
            id: 2,
            pfp: null,
            contactName: "nans",
            mostRecentMessage: "lorem ipsum"
        },
        {
            id: 3,
            pfp: null,
            contactName: "higgard",
            mostRecentMessage: "lorem ipsum"
        },
        {
            id: 4,
            pfp: null,
            contactName: "christopher",
            mostRecentMessage: "lorem ipsum"
        },
        {
            id: 5,
            pfp: null,
            contactName: "bork",
            mostRecentMessage: "lorem ipsum"
        }
    ]

    return(
        <FlatList data={messagesToRender} renderItem={
            ({ item }) => 
                <Swipeable renderRightActions={SwipeRightOnMessageAction}>
                    <Link 
                        href={{
                            pathname: "../chats/recipient/[id]",
                            params: { id: `${item.id}` }
                        }}
                    >
                        <View style={message_style.messageList}>
                            <View style={message_style.messageListIcon}>
                                <IconComponent iconName="account_circle" width={48} height={48}/>
                            </View>
                            <View style={message_style.messageListText}>
                                <Text style={{ fontSize: 15 }}>
                                    { item.contactName }
                                </Text>
                                <Text style={{ color: "#878686", fontSize: 12 }}>
                                    { item.mostRecentMessage }
                                </Text>
                            </View>
                        </View>
                    </Link>
                </Swipeable>
            }
        />
    );
}
export default RenderMessages;