import React from 'react'
import Post from './Post'

export default function Posts(props) {
  
  let posts = props.posts.map(p =>{
    return  <Post title={p.title} text={p.text}></Post>
  })
 
 
  return (
    <div className='posts'>
      {posts}
    </div>
  )
}
