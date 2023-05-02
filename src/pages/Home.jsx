import React from "react";
import Header from "../components/header.jsx"
import Logo from "../assets/logo/logo.svg"
import iconStar from "../assets/icon/star.png"


function Home() {
  return (
    <div className="home">
      <Header className="white" background={true} />
      <div className="content t-center">
        <img src={Logo} alt="" />
        <h2 className="t-center white">Restaurant by Steve Allan - New York</h2>
        <div className="d-flex justify-center">
          <img className="icon" src={iconStar} alt="" />
          <img className="icon" src={iconStar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;