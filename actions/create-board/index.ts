'use server'

import {InputType, ReturnType} from "@/actions/create-board/type";
import {auth} from "@clerk/nextjs";
import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";
import {createSafeAction} from "@/lib/create-safe-action";
import {CreateBoard} from "@/actions/create-board/schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const {userId} = auth()
    if (!userId) return {error: "Unauthorized"}

    const {title} = data;

    let board

    try {
        board = await db.board.create({
            data: {
                title
            }
        })
    } catch (error) {
        return {
            error: "Failed to create"
        }
    }
    revalidatePath(`/board/${board.id}`)
    return {data: board}
}

export const createBoard = createSafeAction(CreateBoard, handler)
