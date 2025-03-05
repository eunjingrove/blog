import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    const db = (await connectDB).db("blog")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    await db.collection('post').updateOne({_id: new ObjectId(props.params.id)},{$set : {title : '', content : ''}})


    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" defaultValue={result.title} placeholder="글 제목" />
                <input name="content" defaultValue={result.content} placeholder="글 내용" />
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}