import { AddRounded } from '@mui/icons-material';
import React from 'react'

function FoodItemCard({imgSrc, name, price}) {
  return (
    <div className='ItemCard'>
        <div className='imgBox'>
            <img src={imgSrc} className="ItemImg"/>
        </div>
        <div className='itemContent'>
            <h3 className='itemName'>{name}</h3>
            <div className='bottom'>
                <h3 className='price'><span>₺</span>{price}</h3>
                <i className='addToBag'>
                <AddRounded/>
                </i>
            </div>
        </div>
    </div>
  )
}

export default FoodItemCard;