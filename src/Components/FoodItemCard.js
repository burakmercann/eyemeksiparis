import { AddRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
import { Items } from "./Data";

function FoodItemCard({ addToBag, id, imgSrc, name, price }) {
  const [{}, dispatch] = useStateValue();

  return (
    <div className="ItemCard">
      <div className="imgBox">
        <img src={imgSrc} className="ItemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <h3 className="price">
            <span>₺</span>
            {price}
          </h3>
          <i
            className="addToBag"
            onClick={() => {
              addToBag();
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default FoodItemCard;
