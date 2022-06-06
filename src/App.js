import "./App.css";
import Header from "./Components/Header";
import SubMenuContainer from "./Components/SubMenuContainer";
import FoodCard from "./Components/FoodCard";
import { MenuItems, Items } from "./Components/Data";
import { useEffect, useState } from "react";
import FoodItemCard from "./Components/FoodItemCard";
import BagItem from "./Components/BagItem";
import { useStateValue } from "./Components/StateProvider";
import { actionType } from "./Components/reducer";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "salata1")
  );

  const [{ bag, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  const addToBag = (id) => {
    let tmpBeg = [...bag];

    const newItem = Items.find((n) => n.id === id);
    let itemWithQty;
    const existing = bag.find((x) => x.item.id == id);
    if (existing == undefined) {
      itemWithQty = { qty: 1, item: newItem };
      tmpBeg.push(itemWithQty);
    } else {
      itemWithQty = { ...existing, qty: existing.qty + 1 };
      tmpBeg = tmpBeg.map((x) => {
        if (x.item.id == id) {
          return itemWithQty;
        }
        return x;
      });
    }
    dispatch({
      type: actionType.SET_BAG,
      bag: tmpBeg,
    });
  };

  useEffect(() => {
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll("rowFoodCard");

    function setFoodCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setFoodCardActive));
  }, [isMainData, bag, total, totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  const purchase = () => {
    let orders = "";
    bag.forEach((x) => {
      orders += x.item.name + ":  " + x.qty + " x " + x.item.price + "₺\n";
    });
    alert(orders);
  };

  return (
    <div className="App">
      <Header />

      <main>
        <div className="mainContainer">
          <div className="menuCard">
            <SubMenuContainer name={"Yemek Çeşitleri"} />
          </div>

          <div className="rowContainer">
            {MenuItems &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <FoodCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />{" "}
                </div>
              ))}
          </div>

          <div className="dishCon">
            <h2 className="dishConContent">Yemekler</h2>
          </div>

          <div className="dishItemContainer">
            {isMainData &&
              isMainData.map((data) => (
                <FoodItemCard
                  addToBag={() => addToBag(data.id)}
                  key={data.id}
                  id={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  price={data.price}
                />
              ))}
          </div>
        </div>
        <div className="buyingMenu">
          <div>
              <h2 className="giris">Kullanıcı Bilgileri</h2>
              <input type={"text"} className="adiniz" placeholder=" Ad"></input>
              <input type={"text"} className="soyadiniz" placeholder=" Soyad"></input>
              <input type={"text"} className="email" placeholder=" E-Mail"></input>
              <input type={"text"} className="adres" placeholder=" Adres"></input>
          </div>

          {bag.length == 0 ? (
            <div className="addSomeItem">
              <h2 className="emptyBagh2">Sepetiniz Boş</h2>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyBag"
              />
            </div>
          ) : (
            <div className="bagCheckOut">
              <div className="bagContainer">
                <SubMenuContainer name={"Siparişiniz:"} />
                <div className="itemsBag">
                  {bag &&
                    bag.map((data) => (
                      <BagItem
                        initialQty={data.qty}
                        name={data.item.name}
                        imgSrc={data.item.imgSrc}
                        qty={data.item.qty}
                        price={data.item.price}
                        id={data.item.id}
                        key={Math.random()}
                      />
                    ))}
                </div>
              </div>

              <div className="toplamFiyat">
                <h3>Toplam Fiyat:</h3>
                <p>
                  <span>₺</span>
                  {bag.reduce(
                    (partialSum, a) =>
                      partialSum + a.qty * Number(a.item.price),
                    0
                  )}
                </p>
              </div>

              <button className="tamamla" onClick={() => purchase()}>
                Siparişi Tamamla
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
