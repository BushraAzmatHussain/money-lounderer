import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import './Launderer.css'
const Launderer = (props) => {
 const {name,alias,occupation,age,amount_laundered,image} = props.launderer;
 const recordIcon = <FontAwesomeIcon icon={faReceipt} />;

 return (
  <div className="launderer">
   <div className="launderer-img">
   <img src={image} alt="" />
   </div>
   <div className="launderer-details">
    <h3>{name}</h3>
     <h3>Alias : {alias}</h3>
     <h3>Occupation: {occupation}</h3>
     <h3>Age : {age}</h3>
     <h4>Amount Laundered : ${amount_laundered}</h4>
     <button className="regular-btn" onClick={()=>props.handleRecord(props.launderer)}>{recordIcon} ADD TO RECORD</button>
   </div>
  </div>
 );
};

export default Launderer;