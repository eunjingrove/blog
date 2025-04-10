import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    if (session) {
        요청.body.author = session.user.email
    }
    if (요청.method == 'POST') {
        console.log(요청.body)
        if(요청.body.title == '') {
            return 응답.status(500).json('제목을 작성해주세요.')
        } else {
            const db = (await connectDB).db("blog")
            let result = await db.collection('post').insertOne(요청.body)
            return 응답.status(200).redirect('/list')
        }
        
    }
}