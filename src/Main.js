import React, { useEffect, useState } from 'react'
import Post from './Post'
import Posts from './Posts'

export default function Main(props) {
  let title_ref = React.createRef()
  let text_ref = React.createRef()

  let [count, setCount] = useState(1)

  function createPost(){
    let title = title_ref.current.value
    let text = text_ref.current.value

    alert(title)
  }

  useEffect(() => {
    setTimeout(()=>{
      setCount(count+1)
    }, 1000)
  })


  return (
    <main>
      <div className='form'>
        <label for="">Title</label>
        <input type="text" placeholder="Title" ref={title_ref}/>
        <br />
        <label for="">Text</label>
        <input type="text" placeholder="Text" ref={text_ref}/>
        <button type='button' onClick={createPost}>Create</button>
      </div>
      <h3>{count}</h3>
      <Posts posts={props.data.posts}></Posts>

    </main>
  )
}
