import React from "react";

const Country = (props) => {
  const { name, population, flag, region } = props.countryInfo;
  const handleAddCountry = props.handleAddCountry;

  const flagStyle = {
    height: "50px",
  };
  const countryStyle = {
    border: "1px solid violet",
    margin: "10px",
    padding: "10px",
  };

  return (
    <div style={countryStyle}>
      <h4>This is a {name}</h4>
      <p>Population:{population}</p>
      <p>
        <small>Region:{region}</small>
      </p>
      <img style={flagStyle} src={flag} alt="" srcset="" />
      <br />
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
