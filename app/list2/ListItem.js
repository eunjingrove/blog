'use client'

import Link from "next/link"

export default function ListItem({ result }) {
    return (
        <div>
            {result.map((v, i) => (
                <div key={i} className="list-item">
                    <Link href={'/detail/' + v._id}>
                        <h4>{v.title}</h4>
                    </Link>
                    <Link href={'/edit/' + v._id}>✏️</Link>

                    <span onClick={(e) => {
                        // fetch('/api/post/delete', { 
                        //     method: 'DELETE', 
                        //     body: v._id 
                        // })
                        // .then((r) => r.json())
                        // .then(() => {
                        //     e.target.parentElement.style.opacity = 0
                        //     setTimeout(() => {
                        //         e.target.parentElement.style.display = 'none'
                        //     }, 1000)
                        // })
                        fetch(`/api/abc/id=${v._id}`)
                    }}>🗑️</span>
                    <p>{v.content}</p>
                </div>
            ))}
        </div>
    );
}
