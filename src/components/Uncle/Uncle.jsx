import Causin from "../Causin/Causin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Causin name={'Rafsan'} asset={asset}></Causin>
                <Causin name={'Shohan'}></Causin>
            </section>
        </div>
    );
};

export default Uncle;