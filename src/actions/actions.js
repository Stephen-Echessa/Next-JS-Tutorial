"use server";

import { revalidatePath } from "next/cache";

export async function createPost(formData) {
    const title = formData.get("title");
    const content = formData.get("content");

    await prisma.post.create({
        data: { title, content }
    })

    revalidatePath("/posts");
}