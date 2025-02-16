import React from "react";

const Header = () => {
  return (
    <div className="header">
          <a className="logo" href="/">SETH</a>
      
      <nav className="navbar">
            <a href="/">Home</a>
            <a href="/workout">Workout</a>
            <a href="/measurements">Measurements</a>
            <a href="/contact">Contact</a>
      </nav>
    
    </div>
  );
};

export default Header;
