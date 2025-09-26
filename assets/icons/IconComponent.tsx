import AccountCircle from "./account_circle_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";
import EmailIcon from "./alternate_email_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";
import ChatIcon from "./chat_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";
import DeleteIcon from "./delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import KeyIcon from "./key_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";
import PersonIcon from "./person_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";
import SettingsIcon from "./settings_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";
import SignatureIcon from "./signature_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";

type IconComponentProps = {
    iconName: string
    width: number
    height: number
}

const IconComponent = ({ iconName, width, height }: IconComponentProps) => {
    switch(iconName){
        case "chat":
            return <ChatIcon width={width} height={height}/>;
        case "delete":
            return <DeleteIcon width={width} height={height}/>;
        case "email":
            return <EmailIcon width={width} height={height}/>;
        case "key":
            return <KeyIcon width={width} height={height}/>;
        case "person":
            return <PersonIcon width={width} height={height}/>;
        case "account_circle":
            return <AccountCircle width={width} height={height}/>;
        case "settings":
            return <SettingsIcon width={width} height={height}/>;
        case "signature":
            return <SignatureIcon width={width} height={height}/>;
    }
}

export default IconComponent;