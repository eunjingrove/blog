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
                    fetch('/api/post/delete', {method : 'DELETE', body: v._id})
                    .then((r) => {
                        if (r.status == 200) {
                            return r.json();
                        } else {
                            // 서버 에러 시 실행할 코드
                        }
                    })
                    .then((result) => {
                        // 성공 시 실행할 코드
                    }).catch((error) => {
                        console.log(error)
                    })
                }}>🗑️</span>
                <p>{v.content}</p>
            </div>
        ))}
        </div>
    )
}