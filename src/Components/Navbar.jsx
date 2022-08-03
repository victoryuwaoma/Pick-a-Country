import React from "react";
import Toggle from "./Toggle";

export default function Navbar(props) {

    const path = "/"
    return (
    <nav className="navbar navbar-light justify-content-between">
    <a href={path} className="navbar-brand">Countries App</a> 
    <Toggle themeToggler = {props.themeToggler} toggle = {props.toggle} /> 
    </nav>
    );
}

