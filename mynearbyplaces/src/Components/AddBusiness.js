import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import locations from "./Locations";
import serverOLD from "./Server";
import server from '../ServerInterface/server';


class AddReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            updated: false,
            newName: "",
            newAddress: "",
            newType: "",
            newCity: "",
            newState: "",
            newKeywords: "",
            newOpen: "",
            newClose: ""
        }
    }

    onSubmit = (e) => {
        this.setState({updated: true})
        console.log(this.state.newName)
        const x = this.state;
        //Order: name,type,address,city,state,rating,openX,closeX,keywords
        server.addBusiness(x.newName,x.newType,x.newAddress,x.newCity,x.newState,5,x.newOpen,x.newClose,x.newKeywords);
        e.preventDefault();
    }

    setNewEntry = (e) => {
        let val = e.target.value;
        let name = e.target.name;
        this.setState({[name]: val});
    }

    render(){
        if (this.state.updated){
            return (
                <Redirect to="/mynearbyplaces" />
            );
        }
        else{
            return (
                <div class = "businessContainer">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                            value = {this.state.newName}
                            name = "newName"
                            placeholder = "enter new name of business"
                            onChange={this.setNewEntry}></input><br/>

                            <input type="text"
                            value = {this.state.newAddress}
                            name = "newAddress"
                            placeholder = "enter new address"
                            onChange={this.setNewEntry}></input>

                            <input type="text"
                            value = {this.state.newType}
                            name = "newType"
                            placeholder = "Type: Restaurant, Services, or Retail"
                            onChange={this.setNewEntry}></input>

                            <input type="text"
                            value = {this.state.newCity}
                            name = "newCity"
                            placeholder = "City"
                            onChange={this.setNewEntry}></input>

                            <input type="text"
                            value = {this.state.newState}
                            name = "newState"
                            placeholder = "State"
                            onChange={this.setNewEntry}></input>

                            <input type="text"
                            value = {this.state.newKeywords}
                            name = "newKeywords"
                            placeholder = "Some keywords, seperated by ',' NO SPACES"
                            onChange={this.setNewEntry}></input>

                            <input type="text"
                            value = {this.state.newOpen}
                            name = "newOpen"
                            placeholder = "Time Open (No ':')"
                            onChange={this.setNewEntry}></input>

                            <input type="text"
                            value = {this.state.newClose}
                            name = "newClose"
                            placeholder = "Time Close (No ':')"
                            onChange={this.setNewEntry}></input><br/>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            );

    }

    }
}
export default AddReview;