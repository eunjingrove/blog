'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([]) 

    useEffect(() => {
        fetch('/api/comment/list?id='+props._id).then(r => r.json())
        .then((result)=> {
            setData(result)
        })
    },[])

    return (
    <div>
        <div>댓글 목록</div>
        <input onChange={(e) => {setComment(e.target.value)}} />
        <button onClick={() =>{
            console.log(comment)
            fetch('/api/comment/new', {
                method : 'POST',
                body : JSON.stringify({comment : comment, _id : props._id})})
        }}>전송</button>
    </div>
    )
}