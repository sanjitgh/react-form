import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Causin = ({name, asset}) => {
    return (
        <div>
            <h3>Causin</h3>
            <p>{name}</p>
            {asset && <Special asset={asset}></Special>}
            {name === "Kobir" && <Friend></Friend>}
        </div>
    );
};

export default Causin;