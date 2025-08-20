import React, { useState,useEffect } from 'react'
import "./Basket.css"

const Basket = ({products}) => {
    const [opneBasket, setOpneBasket] = useState(false)

    useEffect(() => {
        if (opneBasket) {
        document.body.style.overflow = "hidden"
        } else {
         document.body.style.overflow = "auto"
        }
    }, [opneBasket])

  return (
    <div>
      <img
        src="src\Components\UI\Header\logo\free-icon-shopping-cart-of-checkered-design-34627.png"
        className="pngLogo"
        onClick={() => setOpneBasket(true)}
      />
      {opneBasket && (
        <div className="modalBasket" onClick={() => setOpneBasket(false)}>
          <div
            className="modalBasketContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeBtn" onClick={() => setOpneBasket(false)}>×</button>
            <div className="shopkoshik">
              <p style={{ textAlign: "center" }}>Кошик (0)</p>
            </div>
            <h2
              style={{
                textAlign: "center",
                marginTop: "35px",
                marginBottom: "35px",
              }}
            >
              Ваш кошик порожній
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "14px",
                marginBottom: "50px",
              }}
            >
              Чому б не заповнити його однією з наших пропозицій?
            </p>
            <hr className="custom-hr" />
            <div className="allPostCardBasket">
              {products.map((t, i) => (
                <div key={t.id} className={`card${t.id} cardBasket`}>
                  <img src={t.img} />
                  <p>{t.name}</p>
                  <p>{t.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket