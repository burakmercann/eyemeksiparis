import React, { useEffect } from 'react';
import {} from "@mui/material";
import { BarChart, SearchRounded, ShoppingBagRounded } from '@mui/icons-material';

function Header() {
  
  /*useEffect(()=>{
    const  menuIcon= document.querySelector(".menuIcon");

    menuIcon.addEventListener('click', ()=> {
      document.querySelector('buyingMenu').classList.toggle('active')
    })

  },[])*/

  return ( 
  <header>
      <img src='https://shorturl.ae/TZkKY' alt='' className='logo'/>

      <div className="inputBox">
        <SearchRounded className="searchIcon"/>
        <input type="text" placeholder='Arama'/>
      </div>

      <div className="shoppingBag">
        <ShoppingBagRounded className="bag" />
        <div className="bagContent">
        <p>2 </p>
        </div>        
      </div>

      <div className='profile'>
        <h3 className='name'> Burak Mercan </h3>
      </div>

      <div className='menu'>
        <BarChart className='menuIcon'/>
      </div>
      
  </header>
  );
}

export default Header;