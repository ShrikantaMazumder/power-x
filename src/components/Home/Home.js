import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <>
    <header>
      <Navbar />
      <div className="header-left">
        <h1>
          THE BEST FITNESS STUDIO IN TOWN
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos nesciunt amet sint asperiores eum sequi quod minus suscipit soluta?
        </p>
        <button className="join-us">JOIN US</button>
      </div>
      <div className="header-right">
        {/* Image is missing */}
      </div>
    </header>
    <section className="container">
      <div className="row">
        <div className="col-md-3 box">
          <h1>PROGRESSION</h1>
        </div>
        <div className="col-md-3 box">
          <h1>WORKOUT</h1>
        </div>
        <div className="col-md-3 box">
          <h1>NUTRITION</h1>
        </div>
      </div>
    </section>
  </>
  );
};

export default Home;