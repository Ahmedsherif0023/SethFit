import React from 'react'
import imgg from "../../assets/imggg.png"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../../App.css';

const Home = () => {
  return (
    <>
  <Header/>
  <main>
  <div className="container">
        <div className="txtt">
          <p >Let's Track Those Reps</p>
          <p className='xxzzz'>Track all of your reps & sets </p>
<a href='/workout'>
            <button className='button-17' role='button' >Workout</button>
  
</a>        
<a href='/measurements'>
    <button className='button-17 but' role='button'>Measurement</button>
  
</a>       
</div>
        <div className="bgimgdiv">
          <img className="bgimg" src={imgg} alt="img" />
        </div>
      </div>
  </main>
  <Footer/>
    </>
  )
}

export default Home