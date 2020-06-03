import React, { useState, useEffect } from 'react';
import './Classes.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ClassesItem from './ClassesItem';


const Classes = () => {
    const [classes, setClasses] = useState([]);
   
    useEffect(()=>{
            fetch('https://power-x-gym-sarver.herokuapp.com/classes')
            .then(response => response.json())
            .then(data => {
                setClasses(data)
            })
    },[])
  return (
    <>
    <header>
      <Navbar />
      <div className="pricing-header">
        <h1>Our Classes</h1>
      </div>
    </header>

        <div className="container mt-5 classes">
            <div className="row">
            {
              classes.map(cl => <ClassesItem 
                  key={cl.key}
                  classes={cl}
                  ></ClassesItem>)
            }
            </div>
        </div>
    


    <Footer />

    </>
  );
};

export default Classes;