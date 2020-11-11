import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import server from "./Server";
  import locations from "./Locations";

  class Search extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              searchType: "",
              searchCity: "",
              searchKeyword: "",
              searched: false
          }
      }
      onSubmit = (e) => {
          this.setState({searched: true})
          e.preventDefault();
      }

      setType = (e) => {
          let val = e.target.value;
          this.setState({searchType: val});
      }

      setCity = (e) => {
          let val = e.target.value;
          this.setState({searchCity: val});
      }

      setKeyword = (e) => {
          let val = e.target.value;
          this.setState({searchKeyword: val});
      }

      goBack = (e) => {
          this.setState({searched: false})
      }

      render(){
          if (this.state.searched){
              console.log(locations)
              const filtered = server.getResults(this.state.searchType,
                this.state.searchCity,
                this.state.searchKeyword);
              if (filtered.length > 0){  
              return (
                <div>
                <div>Your Search found <b>{filtered.length}</b> Result(s):</div>
                <div><button onClick = {this.goBack}>Edit Search</button></div>
                {filtered.map((entry) =>
                (<div class="displaySearch">
                <b>{entry.name}</b><br/>
                {entry.city}, {entry.state}: {entry.address}<br/>
                Rating: {entry.rating}<br/>
                Reviews: {entry.reviews.map((review) =>
                (<li key={entry.reviews}>{review}</li>))}
                Opens: {entry.open}<br/>
                Close: {entry.close}<br/>
                <Link 
                to={{
                    pathname: '/update',
                    state: {id: entry.id}
                    }}>Update</Link><br/>
                <Link 
                to={{
                    pathname: '/addreview',
                    state: {id: entry.id}
                }}>Add A Review</Link><hr/>
                </div>))}
                </div>
            );
              }else{
                  return(
                      <div>
                    <div><button onClick = {this.goBack}>Edit Search</button></div>
                      <h1>No results</h1>
                      </div>
                  );
              }
          }else{
          return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <select id = "dropdown" name="type" value={this.state.searchType} onChange = {this.setType}>
                        <option value = '' disabled selected hidden>Choose a Type</option>
                        <option value = "Restaurant">Restaurant</option>
                        <option value = "Retail">Retail</option>
                        <option value = "Services">Services</option>
                    </select><br/>
                    <input type="text" 
                            value = {this.state.searchCity}
                            placeholder="Search City"
                            onChange={this.setCity}></input><br/>
                    <input type="text"
                            value = {this.state.searchKeyword}
                            placeholder = "Search by Keyword"
                            onChange = {this.setKeyword}></input><br/>
                    <button type = "submit">Search</button>
                </form>

            </div>
          );
          }
      }
  }
  export default Search;