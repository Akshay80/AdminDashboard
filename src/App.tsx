import React from "react";
import Sidebar from "./Components/SideBar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import Analytics from "./Pages/Analytics/Analytics";

function App(): JSX.Element {
  return (
    <div className="container">
         <div className="row">
    <Router>
      <TopBar />
        <div className="col-3">
        <Sidebar />
        </div>
       
        <Switch>
        <div className="col-9">  
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/dashboard/analytics">
            <Analytics />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
        </div>
        </Switch>
   
    </Router>
    </div>
    </div>
  );
}

export default App;
