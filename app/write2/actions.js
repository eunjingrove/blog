'use server'

import { connectDB } from "@/util/database"

export async function handleSubmit(FormData) {
    const db = (await connectDB).db('blog')
    await db.collection('post_test').insertOne({title : FormData.get('title')})
    console.log(FormData.get('title'))
}