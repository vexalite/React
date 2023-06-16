import React from "react";

export default function FunctionProps(props){
    return(
<div>
    <h1>This is a Prop Based Function</h1>
    <p>This is the car Barand -- {props.brand}</p>
    <p>This is the car Model -- {props.model}</p>
    <p>This is the car Color -- {props.color}</p>
</div>
    );
}