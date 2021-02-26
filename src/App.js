import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Country from "./Components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error());
  }, []);

  const handleAddCountry = (country) => {
    console.log("added", country);
  };
  return (
    <div className="App">
      <h2>Country Load Data:{countries.length}</h2>
      {countries.map((country) => (
        <Country
          countryInfo={country}
          handleAddCountry={handleAddCountry}
          key={country.alpha3Code}
        ></Country>
      ))}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
