import React from "react";
import { About, Header, Skills, Work, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      {/* <Testimonials />  */}
    </div>
  );
};

export default App;
