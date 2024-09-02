import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import Services from "../Components/Home/Services";
import Intro from "../Components/Home/Intro";
import Masthead from "../Components/Home/Masthead";
import Work from "../Components/Home/Work";
import UseCases from "../Components/Home/UseCases";

function Home() {
  return (
    <div>

      <Masthead />

      <Intro />
      <Work/>
      
      <Services />
      <UseCases/>
      
    </div>
  );
}

export default Home;
