import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import locations from "./Locations";


class Update extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newReview: "",
            placeReview: "",
            submitted: false,
            loggedIn: true
        }
    }
    addReview = (e) =>{
        const reviews = locations[e.target.id].reviews;
        locations[e.target.id].reviews.push("NEW");
        alert(reviews);

    }
    writeReview = (e) =>{
        let review = e.target.value;
        this.setState({newReview: review});
    }
    reviewThis = (e) => {
        let place = e.target.value;
        this.setState({palceReview: place})
    }
    setId = (e) =>{
        alert(e.target.id)
        const reviews = locations[1].reviews;
        locations[1].reviews.concat("NEW");
    }
    onSubmit(e){
        if (this._inputElement.value !== ""){
            var newReview = {
                review: this._inputElement.value
            };
        }
        alert("in submit")
    }
    body = () => {
        const biz = locations;
        const curr = 0;
            return (
                <div>
                    <form onSubmit = {this.onSubmit}>
                        <input ref={ (a) => this._inputElement = a}
                        placeholder="enter a review">
                                </input>
                        <input ref ={ (b) => this._addReview = b}
                            placeholder="who to review"></input>
                        <button type="submit">Enter Review</button>
                        {biz.map((entry) => 
                        (<div>
                        <b>{entry.name} </b>
                        {entry.city},{entry.state} {entry.address}<br/> 
                        Reviews:
                        {entry.reviews.map((review) =>
                        (<li key={entry.reviews}>{review}</li>))}
                        </div>))}
                </form>
                </div>
            );

    }
    render(){

        return(
            <div>

                {this.body()}
                
                </div>
        );
    }


}
export default Update;