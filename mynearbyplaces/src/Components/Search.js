import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import serverOLD from "./Server";
  import locations from "./Locations";
  import server from "../ServerInterface/server";

  class Search extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              searchType: "",
              searchCity: "",
              searchKeyword: "",
              searched: false,
              results: [],
          }
      }
      onSubmit = (e) => {
          this.setState({searched: true})
          console.log(this.state.searchKeyword,this.state.searchType,this.state.searchKeyword);
        server.searchTermLoc(this.state.searchType,
          this.state.searchCity,
          this.state.searchKeyword).then(x => this.setState({results: x})).catch(e => console.log(e));
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
              if (this.state.results.length > 0){  
                  console.log(this.state.results);
              return (
                <div>
                <div>Your Search found <b>{this.state.results.length}</b> Result(s):</div>
                <div><button onClick = {this.goBack}>Edit Search</button></div>
                {this.state.results.map(entry =>
                (<div class="displaySearch">
                <b>{entry.name}</b><br/>
                {entry.city}, {entry.state}: {entry.address}<br/>
                Opens: {entry.open}<br/>
                Close: {entry.close}<br/>
                <Link 
                to={{
                    pathname: '/placeDetails',
                    state: {id: entry.id, name: entry.name}
                    }}>Read what people have to say about {entry.name}!</Link><br/>
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