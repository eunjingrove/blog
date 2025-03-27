import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Comment from "./Comment"

export default async function Detail(props) {
    const db = (await connectDB).db("blog")
    let result = await db.collection('post').findOne({_id: new ObjectId("67b4ab54fec7db9569624dc2")})
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment/>
        </div>
    )
}