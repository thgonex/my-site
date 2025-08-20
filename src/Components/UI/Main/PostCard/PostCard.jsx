import React from 'react'
import "./PostCard.css"

const PostCard = ({products}) => {

  return (
    <div>
        <div className='allPost'>
           {products.map((t, i) => (
            <div key={t.id} className={`card${t.id} card`}>
                <img src={t.img}/>
                <p>{t.name}</p>
                <p>{t.price}</p>
            </div>
           ))}
        </div>
    </div>
  )
}

export default PostCard