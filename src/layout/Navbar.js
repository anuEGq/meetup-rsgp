import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => (
  <header>
     <AppBar position="static">
        <ul className='menu'>
            <li className='m_i'>
                <Link className="menu_item" to=''>All Meetup</Link>
            </li>
            <li className='m_i'>
                <Link className="menu_item" to='favourite-meetup'>Favourite Meetup</Link>
            </li>
            <li className='m_i'>
                <Link className="menu_item" to='new-meetup'>New Meetup</Link>
            </li>
        </ul>
    </AppBar>
  </header>
);


export default Navbar;
