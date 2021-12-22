import React from 'react';
import './NavBar.css'

const NavBar = () => {

    

    return (
        <div className='navBar'>
            <h2 className="title">Movie App</h2>
            <div className="wrapper">
                <button className="button">All movies</button>
                <button className="button">Favorite</button>
            </div>
            <input className='searchBar' type="text" placeholder='Search for movies...' />
        </div>
    );
};

export default NavBar;