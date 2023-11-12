import React, { useState } from 'react'

export default function Post(props) {

    let button_ref = React.createRef()

    let [likes, setLikes] = useState(0)

    function read(){
        button_ref.current.style.background = 'red'
        button_ref.current.style.color = 'white'
        like()
    }

    function like(){
        setLikes(likes+1)
    }

    return (
        <div className='post'>
            <h1> {props.title} </h1>
            <p> {props.text} </p>
            <h5>Likes: {likes} </h5>
            <button type='button' onClick={read} ref={button_ref}>Read More</button>
            <button type='button' onClick={read} ref={button_ref}>Like</button>


        </div>
    )
}
