import React, { useEffect } from 'react';
import {} from "@mui/material";
import {SearchRounded, ShoppingBagRounded } from '@mui/icons-material';

function Header() {

  return ( 
  <header>
      <img src='https://shorturl.ae/I41u5' alt='' className='logo'/>
      <img src='https://drive.google.com/file/d/1AYniTvnKfr--m4C8uK-aCYt41SwbcS5Z/view?usp=sharing' />

      <h3>Nemeksepeti</h3>

      <div className="shoppingBag">
        <ShoppingBagRounded className="bag" />
        <div className="bagContent">
        <p>2 </p>
        </div>        
      </div>

      <div className='profile'>
        <h3 className='name'> Burak Mercan </h3>
      </div>
      
  </header>
  );
}

export default Header;