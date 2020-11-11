import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import locations from "./Locations";
import server from "./Server";


class AddReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            updated: false,
            newReview: "",
        }
    }

    onSubmit = (e) => {
        this.setState({updated: true})
        const id = this.props.location.state.id
        server.addAReview(id,this.state.newReview);
        e.preventDefault();
    }

    setNewReview = (e) => {
        let val = e.target.value;
        this.setState({newReview: val});
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
            return (
                <div class = "updateContainer">
                    <div class = "updateBar">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                            value = {this.state.newreview}
                            placeholder = "update name of business"
                            onChange={this.setNewReview}></input>
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            );

    }

    }
}
export default AddReview;