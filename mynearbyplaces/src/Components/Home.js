import React from 'react';
import {
    Link,
    Redirect
} from "react-router-dom";
import locations from "./Locations";
import Search from "./Search";
import "./styles.css"



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
        const visible = locations.filter(x => x.visible === true)
        return(
            <div class = "home">
                  {user.length > 0 ? 
                    <div className='userHeader'>
                        Hello, <b>{user}!</b><br/>
                        <div class = "loggedButtons">
                        <Link to='/addbusiness' class="loggedLink">Add A Business</Link><br/>
                        <Link to='/delete' class="loggedLink">Delete Business</Link>
                        </div>
                     </div>
                    : 
                    <div class ="userHeader">
                        <Link to='/login'>Login</Link>
                        </div>}
                        <div class = "searchDiv">
                            <Search />
                        </div>
                        <div class = "visibleLocationsFooter">
                            All Nerby Locations!
                            {visible.map(x => 
                                (<div>
                                    <b>{x.name} : {x.type}</b>
                                </div>))}
                        </div>
            </div>
        );
  }
}
export default Home;
