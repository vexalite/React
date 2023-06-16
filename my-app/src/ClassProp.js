import React from "react";

export default class ClassProp extends React.Component{
    render(){
        return(
<div>
<h1>This is a Class Prop Based Function</h1>
    <p>This is the car Barand -- {this.props.brand}</p>
    <p>This is the car Model -- {this.props.model}</p>
    <p>This is the car Color -- {this.props.color}</p>
</div>
        );
    }
}