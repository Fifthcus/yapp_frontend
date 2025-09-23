import DeleteIcon from "./delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

type DeleteIconSVGProps = {
    width: number,
    height: number
}

const DeleteIconSVG = ({width, height}: DeleteIconSVGProps) => {
    return(
        <DeleteIcon width={width} height={height}/>
    );
}

export default DeleteIconSVG;