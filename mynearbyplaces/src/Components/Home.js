import React from 'react';
import {
    Link,
    Redirect
} from "react-router-dom";
import locations from "./Locations";



  class Home extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              queryCity: "",
              queryState:"",
              queryKeyword: "",
              submitted: false,
              loggedIn: false
          }
      }

      onSubmit = (event) => {
          this.setState({submitted: true})
          event.preventDefault();
      }

      searchByCity = (event) => {
          let query = event.target.value
          this.setState({queryCity: query});
      }

      searchByState = (event) => {
          let query = event.target.value;
          this.setState({queryState: query});
      }

      searchByKeyword = (event) => {
          let query = event.target.value;
          this.setState({queryKeyword: query});
      }
   
    body = () => {
        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                    Search by City:
                    <input type = "text"
                    value = {this.state.queryCity}
                    name = 'queryCity'
                    onChange = {this.searchByCity}
                    ></input>
                    Search by State:
                    <input type = "text"
                    value = {this.state.queryState}
                    name = 'queryState'
                    onChange={this.searchByState}>
                    </input>
                    Search by Keyword:
                    <input type="text"
                    value = {this.state.queryKeyword}
                    name = 'queryKeyword'
                    onChange={this.searchByKeyword}> 
                    </input>
                    <button type="submit">Search</button>

                </form>
            </div>
        );


    }
    render(){
        let user = '';
        const location = this.props.location
        if(location){
            if (location.state){
                if (location.state.user){
                    user = location.state.user;
                }
            }
        }
        if (this.state.submitted){
            const results = [this.state.queryCity,this.state.queryState,this.state.queryKeyword];
            let to = {pathname:'/results', state: {result: results}};
            return (
                <Redirect to={to}/>
            );
        }
        return(
            <div>
                  {user.length > 0 ? 
                    <div className='loggedinContainer'>
                        Hello, {user}!
                        Add A review is now available<br/>
                        Add a Business is now available<br/>
                        Content here should be the me as the home page, 
                        just now can do these things above<br/>
                        <Link to='/update'>Update/Add/Remove</Link>
                     </div>
                    : <div>
                        <Link to='/login'>Login</Link>
                        </div>}
                        <div>
                            {this.body()}
                        </div>
            </div>
        );
  }
}
export default Home;
