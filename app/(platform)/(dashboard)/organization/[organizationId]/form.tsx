'use client'
import React from "react";
import {FormInput} from "@/app/(platform)/(dashboard)/organization/form-input";
import FormButton from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-button";
import {useAction} from "@/hooks/use-action";
import {createBoard} from "@/actions/create-board";

export const Form = () => {
    const {execute, fieldErrors} = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "SUCCESS")
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string
        execute({title})
    }
    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
                <FormInput errors={fieldErrors}/>
            </div>
            <FormButton/>
        </form>
    )
}
