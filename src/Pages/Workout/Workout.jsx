import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import imgg from "../../assets/bodybuilder.png";
import Counter from "../../components/Counter/Counter";
const Workout = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="txtt">
            <Counter />
          </div>
          <div className="bgimgdiv ">
            <div className="bbimg">
              <img src={imgg} alt="img" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Workout;
