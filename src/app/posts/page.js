import { prisma } from "../../../lib/db.js"
import Link from "next/link"

export default async function Page() {
    // const response = await fetch("https://dummyjson.com/posts");
    // const data = await response.json();
    
    const posts = await prisma.post.findMany()
    console.log(posts)

    return (
        <div className="text-center pt 12">
            <h1 className="text-3xl capitalize font-bold pb-4"> 
                Posts Page
            </h1>
            <ul>{posts.map((post) => (
                <li key={post.id} className="border-b border-gray-300 py-2">
                    <Link href={`posts/${post.id}`} className="text-xl text-blue-500 font-semibold">{post.title}</Link>
                </li>
            ))}</ul>
        </div>
    )
}