import React from "react";

export default class State extends React.Component{
    constructor(props){
        super(props);
        this.car = {
            brand: "Ford",
            Model: "Mustang",
            color: "Red",
            year: "1992"
        };
    }


    changeColor =() =>{
        this.setState({year:"2023"});
    }


    render(){
        return(
            <div>
                <h1>This is {this.car.brand} Car</h1>
                <p>
                    {" "}
                    The model is {this.car.Model}{" "}
                    The color is {this.car.color}{" "}
                    The year is {this.car.year}{" "}
                </p>

                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}