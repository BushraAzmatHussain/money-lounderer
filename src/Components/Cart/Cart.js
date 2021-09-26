import React from 'react';

const Cart = (props) => {
 const {cart} = props;
 let total = 0;
 for(const launderer of cart){
  total += launderer.amount_laundered;
 }
 return (
  <div className="cart">
  <div>
   <h2>Laundered Record</h2>
   <h3>Total Laundered : $ {total}</h3>
  </div>
  <div>
   {
    cart.map(launderer=><h4>{launderer.name}</h4>)
   }
  </div>
  </div>
 );
};

export default Cart;