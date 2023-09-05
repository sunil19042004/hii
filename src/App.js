import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import PaymentPage from "./components/PaymentPage";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
          </Routes>
    </Router>
    </div>
  );
}
export default App;
