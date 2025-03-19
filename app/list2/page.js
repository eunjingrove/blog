import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export const revalidate = 20

export const dynamic = 'force-dynamic'

export default async function List() {
    const db = (await connectDB).db('blog')
    let result = await db.collection('post').find().toArray()

    return (
      <div className="list-bg">
        <ListItem result={result} />
      </div>
    )
  } 