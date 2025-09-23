import PFPIcon from "./account_circle_24dp_171717_FILL0_wght400_GRAD0_opsz24.svg";

type PFPIconSVGProps = {
    width: number,
    height: number
}

const PFPIconSVG = ({width, height}: PFPIconSVGProps) => {
    return(
        <PFPIcon width={width} height={height}/>
    );
}

export default PFPIconSVG;