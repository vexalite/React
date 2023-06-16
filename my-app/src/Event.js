import React from "react";

export default class Event extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            companyName: "",
            companyPhone: "",
            companyEmail:"",
            companyAddress: ""
        };
    }
        companyName(event){
            this.setState({ companyName: event.target.value});
        }
        companyEmail(event){
            this.setState({ companyEmail: event.target.value});
        }
        companyPhone(event){
            this.setState({ companyPhone: event.target.value});
        }
        companyAddress(event){
            this.setState({ companyAddress: event.target.value});
        }
  changetext(event){
    this.setState({companyNAme:event.target.id})
  }
        render(){
            return(
            <div>
                <h1>Simple Event Example</h1>
                
                    <label>Enter Company Name</label>
                    <input type="text" id="companyName" onChange={this.changetext.bind(this)}/>
                    <label>Enter Company Email</label>
                    <input type="email" id="companyEmail" onChange={this.companyEmail.bind(this)}/>
                    <label>Enter Company Phone</label>
                    <input type="string" id="companyPhone" onChange={this.companyPhone.bind(this)}/>
                    <label>Enter Company Address</label>
                    <input type="string" id="companyAddress" onChange={this.companyAddress.bind(this)}/>
                

                <h2>The Entered Company name is : {this.state.companyName}</h2>
                <h2>The Entered Company name is : {this.state.companyEmail}</h2>
                <h2>The Entered Company name is : {this.state.companyPhone}</h2>
                <h2>The Entered Company name is : {this.state.companyAddress}</h2>
            </div>
            );
        }


}