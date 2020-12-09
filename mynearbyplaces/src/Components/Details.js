import React from 'react';
import {
    Redirect,
    Link
} from 'react-router-dom';

import locations from "./Locations";
import server from "../ServerInterface/server";
//import "./styles.css";


class Details extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            attempt: true,
            id: null,
            details: [],
            name: "",
        }
    }
    componentDidMount(){
        const id = this.props.location.state.id;
        const name = this.props.location.state.name;
        console.log(id);
        server.getDetails(id).then(x => this.setState({details: x})).catch(e => console.log(e));
        this.setState({attempt: true});
        this.setState({name: name});
        this.setState({id:id});
        //this.setState({placeid: id});
    }

    render(){
        if (this.state.details.length == 0 && !this.state.attempt){
            return(
                <div>loading results...</div>
            )
        }
        else if (this.state.details.length > 0){
            const place = this.state.details[0];
            return(
                <div class="detailContainer">
                    <h1>{place.name}</h1><br/>
                    {this.state.details.map(x =>
                    (<li>{x.review}</li>       
                    ))}
                    <br/>
                    <Link 
                to={{
                    pathname: '/addreview',
                    state: {id: this.state.id}
                }}>Add a review for {this.state.name}!</Link>
                </div>

            );
        }else{
    
        return(
            <div class = "detailContainer">There are no reviews for <b>{this.state.name}</b> be the first to review!<br/>
            <Link 
                to={{
                    pathname: '/addreview',
                    state: {id: this.state.id}
                }}>Add A Review</Link>
            
            </div>
            
        );
    }
}
}
export default Details;