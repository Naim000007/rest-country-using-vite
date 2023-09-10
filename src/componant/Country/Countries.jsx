/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Desh from "./Desh";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Country We all Visit</h2>
      <h3>Total country {countries.length}</h3>
      <div className="container">
      {countries.map((country) => (
        <Desh country={country}
        key ={country.cca3}></Desh>
      ))}
      </div>
    </div>
  );
};

export default Countries;
