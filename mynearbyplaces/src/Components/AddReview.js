import React from 'react';
import {
    Link,
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
            newReview: "",
        }
    }

    onSubmit = (e) => {
        this.setState({updated: true})
        //use this ID to add a new review to the reviews table in SQL
        const id = this.props.location.state.id
        console.log(id,this.state.newReview);
        //serverOLD.addAReview(id,this.state.newReview);
        server.addReview(id,this.state.newReview);
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
                <div class = 'thankReview'>Thank you for review! <br/>
                <Link 
                to={{
                    pathname: '/mynearbyplaces'
                    }}>Click here to go Home</Link>
                </div>
            );
        }
        else{
            return (
                <div class = "updateContainer">
                    <div class = "updateBar">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                            value = {this.state.newreview}
                            placeholder = "Add a review!"
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