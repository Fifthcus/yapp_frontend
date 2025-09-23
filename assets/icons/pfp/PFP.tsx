import AccountIconSVG from "./account_circle_24dp_171717_FILL0_wght400_GRAD0_opsz24.svg";

type AccountIconSVG = {
    width: number,
    height: number
}

const PFP = ({width, height}: AccountIconSVG) => {
    return(
        <AccountIconSVG width={width} height={height}/>
    );
}

export default PFP;