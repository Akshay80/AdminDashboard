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
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App(): JSX.Element {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/signup" component = {SignUp} />
      <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
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
      <Footer />
    </Router>
    </>
  );
}

export default App;
