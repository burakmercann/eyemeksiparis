import React from 'react';
import {} from "@mui/material";
import {ShoppingBagRounded } from '@mui/icons-material';
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ bag }] = useStateValue();

  return ( 
  <header>
      <img src='https://i.hizliresim.com/33qbxdt.png' alt='' className='logo'/>


      <div className="shoppingBag">
        <ShoppingBagRounded className="bag" />
        <div className={`${!bag ? "noBagItem" : "bag_content"}`}>
        <p>{bag ? bag.length : "0"} </p>
        </div>        
      </div>

      <div className='profile'>
        <h3 className='name'> Burak Mercan </h3>
      </div>
      
  </header>
  );
}

export default Header;