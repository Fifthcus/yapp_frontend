import DeleteIcon from "./delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

type DeleteSVG = {
    width: number,
    height: number
}

const Delete = ({width, height}: DeleteSVG) => {
    return(
        <DeleteIcon width={width} height={height}/>
    );
}

export default Delete;