import { useContext } from "react";
import Causin from "../Causin/Causin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Causin name={'Babul'}></Causin>
                <Causin name={'Kobir'}></Causin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add Money</button>
        </div>
    );
};

export default Aunty;