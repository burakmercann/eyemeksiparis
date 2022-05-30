import "./App.css";
import Header from "./Components/Header";
import SubMenuContainer from "./Components/SubMenuContainer";
import FoodCard from "./Components/FoodCard";
import { MenuItems, Items } from "./Components/Data";
import { useEffect, useState } from "react";
import FoodItemCard from "./Components/FoodItemCard";
import BagItem from "./Components/BagItem";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "salata1")
  );

  useEffect(() => {
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll("rowFoodCard");

    function setFoodCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setFoodCardActive));
  }, [isMainData]);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      <Header />

      <main>
        <div className="mainContainer">
          <div className="menuCard">
            <SubMenuContainer name={"Yemek Çeşidi"} />
          </div>

          <div className="rowContainer" >
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

          <div className="dishItemContainer">
            {isMainData &&
              isMainData.map((data) => (
                <FoodItemCard
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  price={data.price}
                />
              ))}
          </div>
        </div>

        <div className="buyingMenu">
          <div>
            <h3>burak</h3>
          </div>

          <div className="bagCheckOut">
            <div className="bagContainer">
              <SubMenuContainer name={"Siparişiniz:"} />
              <div className="itemsBag">
                <BagItem
                  name={"Tabbule"}
                  imgSrc={"https://shorturl.ae/mukWE"}
                  qty={"2"}
                  price={"120"}
                />
              </div>
            </div>

            <div className="toplamFiyat">
              <h3>Toplam Fiyat:</h3>
              <p>
                <span>₺120</span>
              </p>
            </div>

            <button className="tamamla">Siparişi Tamamla</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
