import React from "react";

export default class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            counter:0
        };
    }


    changeCount =() =>{
        this.setState({count: 1});
    }

    changeCounter =() =>{
        this.setState({counter : this.state.counter+1})
    }


    render(){
        return(
            <div>
                <h1>This is Increment</h1>
                <p>
                    {" "}
                    The Count is {this.state.count}
                    The counter is {this.state.counter}
                </p>

                <button type="button" onClick={this.changeCount}>Change Count</button>
                <button type="button" onClick={this.changeCounter}>Change Counter</button>
            </div>
        )
    }
}