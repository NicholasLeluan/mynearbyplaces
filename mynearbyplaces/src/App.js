import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Results from './Components/Results';
import Update from './Components/Update';
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
      </Switch>
    </BrowserRouter>

  );
  }
}

export default App;
