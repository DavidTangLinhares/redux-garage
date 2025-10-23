// src/components/aside.jsx
import React from 'react';
import logo from "../../assets/images/logo.svg";
import mechanic from "../../assets/images/mechanic.jpg";

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: `url(${mechanic})`}}></div>
      <img className="logo" src={logo} alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  );
}

export default Aside;
