import React from 'react';
import { Link } from 'react-router-dom';

const ClassesItem = (props) => {
        const {img,title,id}= props.classes
    return (
       <div className="col-md-4  my-5">
            <img src={img} alt=""/>
            <Link to={"/classes/"+id}>{title}</Link>
       </div>
    );
};

export default ClassesItem;