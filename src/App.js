import React, { Component } from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar/>
     <Switch>
       <Route path="/" exact strict component = {Home}/>
       <Route path="/rooms" exact component = {Rooms}/>
       <Route path="/rooms/:type"  exact component = {SingleRoom}/>
       <Route component = {Error}/>
      </Switch>
    </React.Fragment>
    )
  }
}

export default App;