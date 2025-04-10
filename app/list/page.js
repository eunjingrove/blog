import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic'

export default async function List() {
    const db = (await connectDB).db('blog')
    let result = await db.collection('post').find().toArray()

    
    let serializedResult = result.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }))

    return (
      <div className="list-bg">
        <ListItem result={serializedResult} />
      </div>
    )
  } 