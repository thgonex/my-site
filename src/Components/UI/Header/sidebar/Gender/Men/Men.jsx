import React, {useState} from 'react'
import "./Men.css"

const Men = ({active, setActive}) => {
    const colection = ["КОЛАБОРАЦІЇ", "ФУТБОЛКИ", "ПОЛО", "ДЖИНСИ", "ШТАНИ", "ШОРТИ", 
      "СВІТШОТИ ТА ХУДІ", "СОРОЧКИ", "КУРТКИ", "ТРИКОТАЖ", "КУПАЛЬНИЙ ОДЯГ", "ВЗУТТЯ"]

    const isActive = active === "men"

  return (
    <div>
      <h2
        className={`nameChapter ${isActive ? "active" : ""}`}
        onClick={() => setActive(isActive ? null : "men")}
      >
        Чоловіки
      </h2>

      {isActive && (
        
            <ul className="listMen">
              {colection.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
      )}
    </div>
  );
}

export default Men