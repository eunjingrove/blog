import { connectDB } from "@/util/database";

export default async function Home() {

  const client = await connectDB;
  const db = client.db('blog')
  let result = await db.collection('post').find().toArray()  

  return (
    <div>안녕하세요</div>
  );
}
