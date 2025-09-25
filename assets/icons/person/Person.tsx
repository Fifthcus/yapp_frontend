import PersonIcon from "./person_24dp_171717_FILL0_wght200_GRAD0_opsz24.svg";

type ProfileIconSVGProps = {
    width: number,
    height: number
}

const PersonIconSVG = ({ width, height }: ProfileIconSVGProps) => {
    return(
        <PersonIcon width={width} height={height}/>
    );
}

export default PersonIconSVG;