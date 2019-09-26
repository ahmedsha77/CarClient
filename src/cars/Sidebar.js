import React from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'


import Type from './Form';
import Home from './CarIndex';




const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        


      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/form"><Type /></Route>



        </Switch>
    </div>
  </div>
)

export default Sidebar;
