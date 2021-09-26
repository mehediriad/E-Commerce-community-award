import React, { useEffect, useState } from 'react';
import SideCart from '../SideCart/SideCart';
import UserData from '../UserData/UserData';
import './UsersData.css'

const UsersData = () => {
    const [users,setUsers] = useState([]);
    const [persons,setPersons]  = useState([]);
  
    const handleCount = (person)=>{
        const newPerson =[...persons, person]
        setPersons(newPerson);
       
    }
    useEffect(()=>{
        fetch('./fack_data.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        
    },[])
    
    return (
        <div style={{display:'flex'}}>
            <div className="users-data-container">
                {
                    users.map(user=><UserData 
                        key = {user._id}
                        person = {user}
                        handleCount ={handleCount}
                    />)
                }
            </div>
            <div className="cart-data-container">
                <SideCart persons = {persons}></SideCart>
            </div>
        </div>
    );
};

export default UsersData;