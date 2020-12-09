import React from 'react';
import {
    Link,
    Redirect
} from "react-router-dom";
import locations from "./Locations";
import Search from "./Search";
import "./styles.css";
import server from '../ServerInterface/server';



  class Home extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              queryCity: "",
              queryState:"",
              queryKeyword: "",
              submitted: false,
              loggedIn: false,
              visible: [],
          }
      }

      componentDidMount() {
          server.getAllLocations().then(x => this.setState({visible: x})).catch(e => console.log(e));
          console.log("in home, visible:"+this.state.visible);
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

        if (this.state.visible.length == 0 ){
            return(<div>
                data is loading...
            </div>)
        }else{
        console.log(this.state.visible);
        return(
            <div class = "home">
                  {user.length > 0 ? 
                    <div className='userHeader'>
                        Hello, <b>{user}!</b><br/>
                        <div class = "loggedButtons">
                        <Link to='/addbusiness' class="loggedLink">Add A Business</Link><br/>
                        </div>
                     </div>
                    : 
                    <div class ="userHeader">
                        To add a business, login! <br/>
                        <Link to='/login'>Login</Link>
                        </div>}
                        <div class = "searchDiv">
                            <Search />
                        </div>
                        <div class = "visibleLocationsFooter">
                            All Nerby Locations!
                            {this.state.visible.map(x => 
                                (<div>
                                    <b>{x.name} : {x.type}</b>
                                </div>))}
                        </div>
            </div>
        );
  }
}
}
export default Home;
