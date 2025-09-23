import ChatsIcon from "./chat_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";

type ChatsIconSVGProps = {
    width: number,
    height: number
}

const ChatsIconSVG = ({width, height}: ChatsIconSVGProps) => {
    return(
        <ChatsIcon width={width} height={height}/>
    );
}

export default ChatsIconSVG;