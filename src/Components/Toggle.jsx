import React from "react";


export default function Toggle (props) {


  return (<label className="toggle-control float-right mt-5 pt-5 mr-2 pr-2">
    <input type="checkbox" className= "ml-auto" checked = {props.toggle}  onClick={() => props.themeToggler()} readOnly />
    <span className="control"></span>
    </label>
  );
};