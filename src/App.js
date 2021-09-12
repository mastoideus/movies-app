import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Navigation from './sharedComponents/Navigation/Navigation'


function App() {
  
  
  
   
  
  
  return (
    <Router>
      <Navigation/>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/favorite'>
        <Favorite/>
      </Route>
      <Route path='/' exact>
        <Redirect to='/home'/>
      </Route>
    </Router>
      
   
  );
}

export default App;
