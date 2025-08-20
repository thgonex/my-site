import React, {useState, useEffect} from 'react'
import "./Header.css"
import Sidebar from './sidebar/Sidebar'
import Reg from './RegUse/Reg'
import Basket from './Basket/Basket'

const Header = ({setQuery, products}) => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (menu) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [menu]);


  function clickMenu(){
    setMenu(prev => !prev)
  }

  return (
    <div>
        <header className='header'>
            <div className='menu' onClick={clickMenu}>
                <img src='src\Components\UI\Header\logo\icons8-меню.svg' className='muneSvg' />
                Меню
            </div>

            <div className='right-block'>
                <input className='searchInfo' placeholder='Пошук . . .' onChange={(e) => setQuery(e.target.value)}/>
                <Reg />
                <Basket products={products}/>
            </div>

            <Sidebar menu={menu} setMenu={setMenu} onClose={() => setMenu(false)} />
        </header>
    </div>
  )
}

export default Header