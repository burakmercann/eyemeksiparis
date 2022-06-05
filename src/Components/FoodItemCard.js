import { AddRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";
import { Items } from "./Data";
let bagData = [];

function FoodItemCard({ id,imgSrc, name, price }) {
  const [isBag, setBag] = useState(null);
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    if (isBag!= null) {
      bagData.push(isBag);
      dispatch({
        type: actionType.SET_BAG,
        bag: bagData,
      });
      console.log(isBag)
      setBag(null)
    }
  }, [isBag]);
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
              setBag(Items.find((n) => n.id === id));
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
