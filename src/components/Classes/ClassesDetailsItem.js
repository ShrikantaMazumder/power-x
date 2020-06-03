import React from 'react';
import Navbar from '../Navbar/Navbar';

const ClassesDetailsItem = (props) => {
    const {img,title,id}= props.classes
    return (
        <>
        <header>
          <Navbar />
          <div className="pricing-header">
            <h1>{ title}</h1>
          </div>
        </header>

        <div className="col-md-4  my-5">
            <img src={img} alt=""/>
        </div>
        </>
    );
};

export default ClassesDetailsItem;