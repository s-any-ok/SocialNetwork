import React from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
