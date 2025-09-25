import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const id = (await params).id
    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
    })
    if (!post) {
        return notFound()
    }

    return (
        <div className="text-center pt 12">
            <li key={post.id} className="border-b border-gray-300 py-2">
                <h2 className="text-xl text-blue-500 font-semibold">{post.title}</h2>
                <p>{post.content}</p>
            </li>
        </div>
    )
}