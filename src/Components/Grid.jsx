import React, {useEffect, useState} from "react";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import Card from "./Card";
import SearchBar from "./SearchBar";
import ModalContent from "./ModalContent";
import {Button, Modal} from 'react-bootstrap';

export default function Grid() {

    const [countries, setCountries] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [modalcontent, setModalContent] = useState();
    const [modalheading, setModalHeading] = useState();

    const handleShow = (event, data) => {
        setShow(true);
        countries.find(({name, capital, population, languages, cca3, independent, landlocked, maps, region, subregion, currencies }) => {
            if (data.name.common === name.common) {
            setModalHeading(name.common)
            setModalContent(<ModalContent 
            name = {name.common}  
            population={population} 
            capital= {capital} 
            languages = {languages}
            currencies = {currencies} 
            countryCode = {cca3}
            independent = {independent}
            landlocked = {landlocked}
            maps = {maps.googleMaps}
            region = {region}
            subregion = {subregion}
            />)
        }
        })
    }


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then((data) => {
          setCountries(data);
          setLoading(false);
      }
        ).catch(error => setError(error.message)) 
      }, [])
  
      if (loading) return <LoadingPage />
      if (error) return <ErrorPage message= {error} /> 


    return (<div className="container mx-auto mt-2 pt-2">
    <div className="row">
    <SearchBar query = {query} setQuery = {setQuery} />
    {
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common)).filter(q => {
            let {name, flags} = q;

            if (name.common.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return (
                    <Card 
                    key={name.common} 
                    name = {name.common} 
                    flag = {flags.svg} 
                    handleShow = {handleShow}
                    />
                )
            }
        }).map((country) => {
            let {name, flags } = country
            return (
                <Card 
                key={name.common} 
                name = {name.common} 
                flag = {flags.svg} 
                data = {country} 
                handleShow = {handleShow} 
                />
            )
        })
    }
    </div>

    <>
    <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                    <Modal.Title>{modalheading}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {modalcontent}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
    </Modal>
    </>
  </div>
);
}