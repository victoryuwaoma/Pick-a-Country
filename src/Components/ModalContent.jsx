import React from "react";

export default function ModalContent(props) {
    return (
    <div>
    <h4 className="lead">Capital: {props.capital ? props.capital : ""}</h4>
    <br/>
    {/*<h4 className="lead">Region: {props.region}</h4>
    <br/>
    <h4 className="lead">Sub Region: {props.subregion}</h4>
    <br/>*/}
    <h4 className="lead">Currencies: {props.currencies ? Object.values(props.currencies).map(value => value.name + " ") : ""}</h4>
    <br/>
    {/*<h4 className="lead">Independent: {(props.independent) ? "Yes" : "No"}</h4>
    <br/>
    <h4 className="lead">Landlocked: {(props.landlocked) ? "Yes" : "No"}</h4>
    <br/>*/}
    <h4 className="lead">Population: {props.population ? props.population : ""}</h4>
    <br/>
    <h4 className="lead">ISO Code: {props.countryCode ? props.countryCode : ""}</h4>
    <br/>
    <h4 className="lead">Languages: {props.languages ? Object.values(props.languages).map(value => value + " ") : ""}</h4>
    {/*<br/>
    <h4 className="lead">Check the Map Out on <a href={props.maps} target="_blank" rel="noreferrer" > Google Maps</a> </h4>*/}
  </div>
  );
  
}