import "./App.css";
import Header from "./Components/Header";
import SubMenuContainer from "./Components/SubMenuContainer";
import FoodCard from "./Components/FoodCard";
import { MenuItems, Items } from "./Components/Data";
import { useEffect, useState } from "react";
import FoodItemCard from "./Components/FoodItemCard";
import BagItem from "./Components/BagItem";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "salata1")
  );

  const [{ bag, total }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll("rowFoodCard");

    function setFoodCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setFoodCardActive));
  }, [isMainData,bag,total,totalPrice]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
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
              
          </div>

          {!bag ? (
            <div className="addSomeItem">
              <h2 className="emptyBagh2">Sepetiniz Boş</h2>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyBag"
              />
            </div>
          ) :(

          <div className="bagCheckOut">
            <div className="bagContainer">
              <SubMenuContainer name={"Siparişiniz:"} />
              <div className="itemsBag">
                {bag &&
                  bag.map((data) => (
                    <BagItem
                      name={data.name}
                      imgSrc={data.imgSrc}
                      qty={data.qty}
                      price={data.price}
                      id={data.id}
                      key={Math.random()}
                    />
                  ))}
              </div>
            </div>

            <div className="toplamFiyat">
              <h3>Toplam Fiyat:</h3>
              <p>
                <span>₺</span>{total}
              </p>
            </div>

            <button className="tamamla">Siparişi Tamamla</button>
          </div>)}
        </div>
      </main>
    </div>
  );
}

export default App;
