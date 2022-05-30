import { ChevronRightRounded,} from '@mui/icons-material'
import React from 'react'

function FoodCard({imgSrc,name,isActive}) {
  return (
    <div className={`rowFoodCard ${isActive  ? `active` : ''}`}>
        <div className='imgBox'>
            <img src={imgSrc} alt="" />
        </div>
        <h3 className='h3'>{name}</h3>
        <i className='menuLoad'>
            <ChevronRightRounded/>
        </i>

    </div>
  )
}

export default FoodCard
