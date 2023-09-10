/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Desh.css'
const Desh = (props) => {

    const { name, population, capital, region, flags} =props.country;
    return (
        <div className="desh-container">
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="flag" />
            <h2>Captial: {capital}</h2>
            <p>Population: {population}</p>
            <p>Regioin: {region}</p>

        </div>
    );
};

export default Desh;