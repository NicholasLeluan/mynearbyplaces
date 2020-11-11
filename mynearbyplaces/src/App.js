import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Results from './Components/Results';
import Update from './Components/Update';
import AddReview from './Components/AddReview';
import AddBusiness from './Components/AddBusiness';
import Delete from './Components/Delete'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
 

class App extends React.Component{
  render(){
  return (
    <BrowserRouter basename={process.env.Public_URL}>
      <Switch>
        <Route exact path = '/mynearbyplaces' render={props => <Home {...props} />}/>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path = '/results' render={props => <Results {...props}/>} />
        <Route path = '/update' render={props => <Update {...props}/>} />
        <Route path = '/addreview' render={props => <AddReview {...props}/>} />
        <Route path = '/addbusiness' render={props => <AddBusiness {...props}/>} />
        <Route path = '/delete' render={props => <Delete {...props}/>} />
      </Switch>
    </BrowserRouter>

  );
  }
}

export default App;
