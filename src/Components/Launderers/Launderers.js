import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Launderer from '../Launderer/Launderer';
import './Launderers.css'
const Launderers = () => {
 const [launderers,setLaunderers] = useState([]);
 const [cart,setCart] = useState([]);
 useEffect(()=>{
 fetch('./launderers.json')
 .then(res=>res.json())
 .then(data=>setLaunderers(data))
 },[])
 const handleRecord = (newLaunderer)=>{
 const exists = cart.find(launderer=>launderer.id === newLaunderer.id);
 if(exists){
  return
 }
 const newCart = [...cart,newLaunderer];
 setCart(newCart);
 }
 return (
  <div className="main-container">
   <div className="launderers-container">
    {
     launderers.map((launderer)=><Launderer
     key={launderer.id}
     launderer={launderer}
     handleRecord={handleRecord}
     ></Launderer>)
    }
   </div>
   <div className="cart-container">
    <Cart cart={cart}></Cart>
   </div>
  </div>
 );
};

export default Launderers;