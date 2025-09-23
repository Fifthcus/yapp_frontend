import SettingsIcon from "./settings_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";

type SettingsIconSVGProps = {
    width: number,
    height: number
}

const SettingsIconSVG = ({width, height}: SettingsIconSVGProps) => {
    return(
        <SettingsIcon width={width} height={height}/>
    );
}

export default SettingsIconSVG;