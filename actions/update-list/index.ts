'use server'

import {InputType, ReturnType} from "./types";
import {auth} from "@clerk/nextjs";
import {revalidatePath} from "next/cache";
import {createSafeAction} from "@/lib/create-safe-action";
import {UpdateList} from "./schema";
import {db} from "@/lib/db";

const handler = async (data: InputType): Promise<ReturnType> => {
    const {userId, orgId} = auth()
    if (!userId || !orgId) {
        return {
            error: "Unauthorized"
        }
    }

    const {title, id, boardId} = data

    let list

    try {
        console.log("sdfadffadsdfa")
        list = await db.list.update({
            where: {
                id,
                boardId,
                board: {
                    orgId,
                },
            },
            data: {
                title,
            },
        });
    } catch (error) {
        return {
            error: "Failed to update."
        }
    }

    revalidatePath(`/board/${boardId}`)
    return {data: list}
}


export const updateList = createSafeAction(UpdateList, handler)
