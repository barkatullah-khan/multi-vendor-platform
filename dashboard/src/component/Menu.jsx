import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/:10/:Barkat">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            
        </div>
    );
};

export default Menu;