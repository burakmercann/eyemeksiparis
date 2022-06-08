import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";
let bagItems = [];

function BagItem({ id, name, imgSrc, price, initialQty }) {
  const [qty, setQty] = useState(initialQty);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ bag}, dispatch] = useStateValue();

  useEffect(() => {
    bagItems = bag;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      addItem(1);
    } else {
      if (qty == 1) {
        let tempBag = bagItems.filter((x) => x.item.id != id);
        dispatch({
          type: actionType.SET_BAG,
          bag: tempBag,
        });
      } else {
        addItem(-1);
      }
    }
  };

  const addItem = (val) => {
    let tmpBeg = [...bag];
    let itemWithQty;
    const existing = bag.find((x) => x.item.id == id);
    itemWithQty = { ...existing, qty: existing.qty + val };
    tmpBeg = tmpBeg.map((x) => {
      if (x.item.id == id) {
        return itemWithQty;
      }
      return x;
    });
    setQty(itemWithQty.qty);
    dispatch({
      type: actionType.SET_BAG,
      bag: tmpBeg,
    });
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
