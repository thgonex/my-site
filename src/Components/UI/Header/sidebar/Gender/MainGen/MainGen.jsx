import React, {useState} from 'react'
import "./MainGen.css"

const MainGen = ({active, setActive}) => {
    const colection = ["НАДИХАЙСЯ!", "БЕСТСЕЛЕРИ", "ЗАВЕРШЕНІ ОБРАЗИ", "СТВОРИ ВЛАСНИЙ КОМПЛЕКТ ЗІ ЗНИЖКОЮ ДО -10 %", "PB COMMUNITY", "OFTEN", "STWD"]
    const isActive = active === "main"

  return (
    <div>
      <h2
        className={`nameChapter ${isActive ? "active" : ""}`}
        onClick={() => setActive(isActive ? null : "main")}
      >
        Головна
      </h2>

      {isActive && (
        <div>
          <ul className="listMain">
            {colection.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          <div className="allPhotoMenu">
            <div className='phtotMenu card1'>
              <img
                src="src\Components\UI\Header\sidebar\Gender\MainGen\0769651325102-A7M.webp"
                className="discountImg"
              />
              <p style={{textAlign:"center"}}>НОВИНКИ</p>
            </div>

            <div className='phtotMenu'>
              <img
                src="src\Components\UI\Header\sidebar\Gender\MainGen\0715157725100-E.webp"
                className="discountImg"
              />
              <p style={{textAlign:"center"}}>STWD</p>
            </div>

            <div className='phtotMenu'>
              <img
                src="src\Components\UI\Header\sidebar\Gender\MainGen\1270244109201-a16m.webp"
                className="discountImg"
              />
              <p style={{textAlign:"center"}}>OFTEN</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainGen