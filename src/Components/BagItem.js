import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let bagItems = [];

function BagItem({ id, name, imgSrc, price }) {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ bag, total }, dispatch] = useStateValue();

  useEffect(() => {
    bagItems = bag;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
    } else {
      if (qty == 1) {
        let tempBag = [] //bagItems.filter(x => x.id != id)
        console.log(tempBag,id)
        dispatch({
          type: actionType.SET_BAG,
          bag:[],
        });
      } else {
        setQty(qty - 1);
        console.log(qty);
      }
    }
  };

  return (
    <div className="bagItem" id={id}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQty("remove", id)}
            />
            <AddRounded
              className="itemAdd"
              onClick={() => updateQty("add", id)}
            />
          </div>
        </div>
        <p className="itemPrice">
          <span className="tlSign">₺</span>
          <span className="itemPriceValue">{itemPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default BagItem;
