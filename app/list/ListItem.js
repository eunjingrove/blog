'use client'

import Link from "next/link"

export default function ListItem({result}) {

    return (
        <div>
            {result.map((v,i) => (
            <div key={i} className="list-item">
                <Link href={'/detail/'+ v._id}>
                  <h4>{v.title}</h4>
                </Link>
                <Link href={'/edit/' + v._id}>✏️</Link>
                <span onClick={() => {
                    fetch('/api/test').
                    then(() =>{
                        console.log(123123)
                    })
                }}>🗑️</span>
                <p>{v.content}</p>
            </div>
        ))}
        </div>
    )
}