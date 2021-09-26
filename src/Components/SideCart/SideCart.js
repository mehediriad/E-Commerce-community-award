import React from 'react';
import './SideCart.css' 

const SideCart = (props) => {
    let total = 0;
   for(const person of props.persons){
       
       total = total + parseFloat(person.earning);
   }
    return (
        <div className="side-card">
            <h3>Total Person Added: {props.persons.length}</h3>
            <h3>Total Earning: ${total.toFixed(2)}</h3>
            <button>Submit Now</button>
        </div>
    );
};

export default SideCart;