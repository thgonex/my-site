import { useState } from 'react'
import Header from './Components/UI/Header/Header'
import Main from './Components/UI/Main/Main'

const products = [
  { id: 1, name: "Смугасті джинсові шорти", price: "1,899 грн", img: "src/Components/UI/Main/photo/0769651325102-A7M.webp" },
  { id: 2, name: "Куртка з камуфляжним принтом", price: "2,499 грн", img: "src/Components/UI/Main/photo/0770150406302-D2.webp" },
  { id: 3, name: "Джинси-уоркер з камуфляжним принтом", price: "2,199 грн", img: "src/Components/UI/Main/photo/0767451206302-D2.webp" },
  { id: 4, name: "Футболка з довгими рукавами та швами", price: "949 грн", img: "src/Components/UI/Main/photo/0715151380001-D2.webp" },
  { id: 5, name: "Футболка з контрастними швами", price: "699 грн", img: "src/Components/UI/Main/photo/0715155130500-D2.webp" },
  { id: 6, name: "Джинси-уоркер з камуфляжним принтоми", price: "2,199 грн", img: "src/Components/UI/Main/photo/0767451206303-A7M.webp" },
  { id: 7, name: "Футболка з принтом Оклахомаи", price: "699 грн", img: "src/Components/UI/Main/photo/0715050025100-D2.webp" },
  { id: 8, name: "Джинси-уоркер з камуфляжним принтом", price: "2,199 грн", img: "src/Components/UI/Main/photo/07674512063-M.webp" },
  { id: 9, name: "Варена джинсова куртка", price: "2,199 грн", img: "src/Components/UI/Main/photo/0770054841501-A7M.webp" },
  { id: 10, name: "Технічний рюкзак STWD", price: "1,899 грн", img: "src/Components/UI/Main/photo/1502164010000-D2.webp" },
  { id: 11, name: "Широкі варені джинси", price: "1,899 грн", img: "src/Components/UI/Main/photo/0768750541501-A7M.webp" },
  { id: 12, name: "Худі STWD з вишитим логотипом", price: "1,899 грн", img: "src/Components/UI/Main/photo/07560518606-C.webp" },
  { id: 13, name: "Куртка-бомбер в університетському стилі з вишивкою", price: "2,199 грн", img: "src/Components/UI/Main/photo/07700527800-M.webp" },
  { id: 14, name: "Футболка STWD цемент", price: "799 грн", img: "src/Components/UI/Main/photo/07152500250-A2M.webp" },
  { id: 15, name: "Смугаста сорочка-поло", price: "1,599 грн", img: "src/Components/UI/Main/photo/0755051952900-E.webp" },
  { id: 16, name: "Футбольна футболка STWD", price: "1,399 грн", img: "src/Components/UI/Main/photo/07152928400-C.webp" },
  { id: 17, name: "Бейсболка з вишитим написом «New York»", price: "529 грн", img: "src/Components/UI/Main/photo/0793053670000-A7M.webp" },
  { id: 18, name: "Шкіряні топсайдери", price: "2,599 грн", img: "src/Components/UI/Main/photo/1240864000202-A4M.webp" },
]

function App() {
  const[query, setQuery] = useState("")

  const filtered = products.filter(p =>  p.name.toLowerCase().includes(query.toLowerCase()))
  
  return (
    <>
      <Header setQuery={setQuery} products={products}/>
      <Main products={filtered} />
    </>
  )
}

export default App
