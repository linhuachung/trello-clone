'use server'

import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";

export async function deleteBoard(id: string) {
    await db.board.delete({
        where: {
            id
        }
    })
    revalidatePath("organization/org_2YCC7QPMk9uoMv410fSV8e6aF3V")
}
