import React, {useState} from 'react'
import "./Women.css"

const Women = ({active, setActive}) => {
    const colection = ["ДЖИНСИ", "ШТАНИ", "ФУТБОЛКИ", "ТОПИ ТА БОДІ", "СУКНІ", "КУРТКИ", 
      "СОРОЧКИ ТА БЛУЗИ", "СПІДНИЦІ", "ШОРТИ ТА БЕРМУДИ", "КУПАЛЬНИЙ ОДЯГ", "СВІТШОТИ ТА ХУДІ", "ТРИКОТАЖ І КРОШЕ", "ВЗУТТЯ"]

     const isActive = active === "women"   

  return (
    <div>
        <h2 className={`nameChapter ${isActive ? "active" : ""}`} onClick={() => setActive(isActive ? null : "women")}>Жінки</h2>
        
        {isActive && (
          <ul className='listWomen'>
            {colection.map((t, i) => (
            <li key={i}>{t}</li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default Women