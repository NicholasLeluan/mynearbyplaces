import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import locations from "./Locations";

class Results extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {city: props.location.state.result[0],
            state: props.location.state.result[1],
            keyword: props.location.state.result[2],
            filtered: []
    }
}
    getAll() {
        const city = this.state.city.toUpperCase().trim()
        const state = this.state.state.toUpperCase().trim()
        const keyword = this.state.keyword.toUpperCase().trim()
        console.log(city,state,keyword);
        let retSet = [];
        for (var i = 0; i < locations.length; i++){
            if (locations[i].city.toUpperCase().trim() === city){
                if (locations[i].state.toUpperCase().trim() === state){
                    let keys = locations[i].keywords.split(",");
                    console.log(keys);
                    for (var x = 0; x < keys.length; x++){
                        if (keys[x].toUpperCase().trim() === keyword){
                            retSet.push(locations[i])
                        }
                    }
                }
            }
        }
        return retSet;
    }

    getByKeyword = () => {
        const keyword = this.state.keyword.toUpperCase().trim()
        let retSet = [];
        for (var x = 0; x < locations.length; x++){
            if (locations[x].keyword.toUpperCase().trim() === keyword){
                retSet.push(locations[x])
                        }
                    }
        return retSet;
    }

    getAllNoLocation = () => {
        const temp = "hello";
    }
    getResults(){
        const city = this.state.city
        const state = this.state.state
        const keyword = this.state.keyword
        if (keyword.length > 0 && city.length > 0 && state.length > 0){
            let filtered = this.getAll();
            return filtered;
        }
        if (keyword.length > 0 && city.length == 0){
            let filtered = this.getByKeyword();
        }
        if (keyword.length == 0 && city.length == 0 && state.length == 0){
           let filtered =  this.getAllNoLocation();
        }

    }
    componentDidMount() {
        console.log("In mount")
        const entries = this.getResults();
        this.setState({filtered: entries})
    }

    body = () => {
        const results = this.state.filtered;
        return (
            <div>
            {results.map((entry) => 
            (<div>
            <h3>{entry.name}</h3><br/>
            {entry.city}<br/>
            Rating: {entry.rating}<br/>
            Reviews: {entry.reviews.map((review) =>
            (<li key={entry.reviews}>{review}</li>))}
            {entry.address}<br/>
            Opens: {entry.open}<br/>
            Close: {entry.close}
            </div>))}
            </div>
        );
    }
    render(){
        return(
        <div>{this.body()}</div>
        );
    }
}
export default Results;