import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db('blog')
  let result = await db.collection('post').find().toArray()  
  
  return (
    <div>안녕하세요</div>
  );
}

