import { connectDB } from "@/util/database"

export default async function List() {
    const db = (await connectDB).db('blog')
    let result = await db.collection('post').find().toArray()
    console.log(result)

    return (
      <div className="list-bg">
        {result.map((v,i) => (
            <div key={i} className="list-item">
                <h4>{v.title}</h4>
                <p>{v.content}</p>
            </div>
        ))}
      </div>
    )
  } 