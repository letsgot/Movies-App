import React from 'react'
import NavBar from "./components/Navbar";
import Movies from "./components/Movies";
import Home from "./components/Home";
import Login from "./components/Login"
import New from "./components/New";
import PageNotFound from "./components/PageNotFound";
import {Route,Switch,Redirect} from "react-router-dom";
function App() {
  return (
    // <>
    //   <NavBar></NavBar>
    //   <Movies></Movies>
    // </>
    <>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/new">
          <New></New>
        </Route>

        <Redirect from="/" exact to="/home" >
        </Redirect>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </>
  )
}

export default App


// npm i react-router-dom@5.3.1