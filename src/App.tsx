import React from "react";
import Sidebar from "./Components/SideBar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import Analytics from "./Pages/Analytics/Analytics";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import Sales from "./Pages/Sales/Sales";
import Mails from "./Pages/Mails/Mails";
import Transaction from "./Pages/Transaction/Transaction";
import FAQ from "./Pages/FAQ/FAQ";
import { Login } from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/Signup";
import Messages from "./Pages/Messages/Messages";


function App(): JSX.Element {
  const token = localStorage.getItem("Token");

  if (!token || token === undefined) {
    return <Login />
  }


else return (
  
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/dashboard/sales/ordered-items">
            <Sales />
          </Route>
          <Route exact path="/mails">
            <Mails />
          </Route>
          <Route exact path="/transactions">
            <Transaction />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );

}

export default App;
