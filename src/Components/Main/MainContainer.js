import React from 'react';
import UsersData from '../UsersData/UsersData';
import './MainContainer.css'
const MainContainer = () => {
    return (
        <div>
            <div className="main-container">
               <header className="header-container">
                    <h1>E-Commerce Community Award</h1>
                        <p>Prize distribution among successful online merchants - 2021. This award will be given to the maximum number of traders based on our budget.</p>
                    <h2>Our Budget <span className={"bold"}>10 Million</span></h2>
                   
               </header>
               <section className="data-cart-container">
                   
                        <UsersData></UsersData>
                   
               </section>
            </div>
        </div>
    );
};

export default MainContainer;