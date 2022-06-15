import {React, useContext} from 'react';
import FavoriteContext  from '../store/favorite-context'
import {AppBar,Badge} from '@mui/material';
import {Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
   const favcontext = useContext(FavoriteContext);
  return (<header>
     <AppBar position="static">
        <ul className='menu'>
            <li className='m_i'>
                <Link className="menu_item" to=''>All Meetup</Link>
            </li>
            <li className='m_i'>
            <Badge badgeContent={favcontext.totalFav} color="secondary">
                <Link className="menu_item" to='favourite-meetup'>Favourite Meetup</Link>
            </Badge> 
            </li>
            <li className='m_i'>
                <Link className="menu_item" to='new-meetup'>New Meetup</Link>
            </li>
        </ul>
    </AppBar>
  </header>
  );
}


export default Navbar;
