import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './UserData.css'

const UserData = (props) => {
    const {image,name,age,company,earning,address,start_date} = props.person;
    return (
        <div>
            <div className="user">
               <img src={image} alt="" />
               <h3>{name}</h3>
               <h5>Age :{age}</h5>
               <h5>Company: {company}</h5>
               <p>{address}</p>                            
               <h5>Start Date: {start_date}</h5>
               <h4>Earning:${earning} <small>/month</small></h4>
               <button onClick={()=>props.handleCount(props.person)}> <FontAwesomeIcon icon={faShoppingCart}/> Add This</button>

            </div>
        </div>
    );
};

export default UserData;