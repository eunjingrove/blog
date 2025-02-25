import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props) {
    const db = (await connectDB).db("blog")
    let result = await db.collection('post').findOne({_id: new ObjectId("67b4ab54fec7db9569624dc2")})
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>글제목</h4>
            <p>글내용</p>
        </div>
    )
}