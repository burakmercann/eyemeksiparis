import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react'

function BagItem({name, imgSrc, qty, price}) {
  return (
    <div className='bagitem'>
        <div className='imgBox'>
            <img src={imgSrc}/>
        </div>

        <div className='itemSection'>
            <h2 className='itemName'>{name}</h2>
            <div className='itemQuantity'>
                <span>x {qty}</span>
                <div className='quantity'>
                    <RemoveRounded className='itemRemove' />
                    <AddRounded className='itemAdd' />
                </div>
            </div>
        </div>

        <p className='itemPrice'>
            <span className='tlSign'>₺</span>
            <span className='itemPriceValue'>{price}</span>
        </p>

    </div>
  )
}

export default BagItem