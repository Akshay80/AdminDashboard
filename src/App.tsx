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

function App(): JSX.Element {
  return (
    <Router>
      <TopBar />
      <div className="container">
          <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
