import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import LogIn from "./Components/Appointment/LogIn/LogIn";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Appointment/LogIn/PrivateRoute";
import DashBoard from "./Components/Appointment/DashBoard/DashBoard/DashBoard";
import AddDoctor from "./Components/Appointment/DashBoard/AddDoctor/AddDoctor";
export const userContext = createContext();

function App() {
  const [logedInUser, setLogedInUser] = useState({});
  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]}>
    <h3>{logedInUser.name}</h3>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
