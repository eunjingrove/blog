'use client'

import { useState } from "react"

export default function Comment() {
    let [comment, setComment] = useState('')
    return (
    <div>
        <div>댓글 목록</div>
        <input onChange={(e) => {setComment(e.target.value)}} />
        <button onClick={() =>{
            console.log(comment)
            fetch('', {method : 'POST', body : comment})
        }}>전송</button>
    </div>
    )
}