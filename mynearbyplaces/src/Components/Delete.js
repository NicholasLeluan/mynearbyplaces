import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import locations from "./Locations";
import server from "./Server";


class Update extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            updated: false,
            deleteThis: "",
        }
    }

    onSubmit = (e) => {
        this.setState({updated: true})
        server.deleteBusiness(this.state.deleteThis);
        e.preventDefault();

    }

    setDeleteThis = (e) => {
        let val = e.target.value;
        this.setState({deleteThis: val});
    }

    render(){
        if (this.state.updated){
            return (
                <Redirect to="mynearbyplaces" />
            );
        }
        else{
            const visible = locations.filter(x => x.visible === true)
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                            value = {this.state.deleteThis}
                            placeholder = "choose an ID from below"
                            onChange={this.setDeleteThis}></input>
                        <button type="submit">Delete</button>
                    </form>
                    Select from these ID's to delete an entry.
                    {visible.map(x => 
                                (<div>
                                    <b>{x.name} ID: {x.id}</b>
                                </div>))}
                </div>
            );

    }

    }
}
export default Update;