import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import locations from "./Locations";
import server from "./Server";
import "./styles.css";


class Update extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            updated: false,
            newName: "",
        }
    }

    onSubmit = (e) => {
        this.setState({updated: true})
        const id = this.props.location.state.id
        const state = this.state;
        const biz = locations[id];
        const updateBiz = {
            id: id, name: state.newName, address: biz.address, type: biz.type, city: biz.city,
            state: biz.state, keywords: biz.keywords, reviews: biz.reviews, rating: biz.rating,
            open: biz.open, close: biz.close
        }
        server.updateBusiness(updateBiz);
        e.preventDefault();

    }

    setNewName = (e) => {
        let val = e.target.value;
        this.setState({newName: val});
    }

    render(){
        if (this.state.updated){
            const id = this.props.location.state.id
            console.log(locations[id])
            const biz = locations[id]
            return (
                <Redirect to="mynearbyplaces" />
            );
        }
        else{
            const biz = locations;
            const curr = 0;
            return (
                <div class = "updateContainer">
                    <div class = "updateBar">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                            value = {this.state.newName}
                            placeholder = "update name of business"
                            onChange={this.setNewName}></input>
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            );

    }

    }
}
export default Update;