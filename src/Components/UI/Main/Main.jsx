import React from 'react'
import PostCard from './PostCard/PostCard'

const Main = ({products}) => {
  return (
    <div>
        <PostCard products={products}/>
    </div>
  )
}

export default Main