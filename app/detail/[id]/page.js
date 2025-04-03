import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail({ params }) {
    const db = (await connectDB).db("blog");
    let result = await db.collection("post").findOne({ _id: new ObjectId(params.id) });

    if (result === null) {
        return <div> 404 없는 페이지 </div>
    }

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment _id={result._id.toString()} />
        </div>
    );
}
