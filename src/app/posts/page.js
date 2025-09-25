import { createPost } from "@/actions/actions.js"
import { prisma } from "../../../lib/db.js"
import Link from "next/link"

export default async function Page() {
    // const response = await fetch("https://dummyjson.com/posts");
    // const data = await response.json();
    
    const posts = await prisma.post.findMany()


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

             <form action={createPost} className="flex flex-col space-y-4 max-w-sm mx-auto p-4">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="border border-gray-300 rounded p-2"
                />
                <textarea
                    type="text"
                    placeholder="Content"
                    name="content"
                    className="border border-gray-300 rounded p-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}