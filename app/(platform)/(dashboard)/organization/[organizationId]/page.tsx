import React, {Suspense} from 'react';
import {Separator} from "@/components/ui/separator";
import {BoardList} from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/board-list";
import {Info} from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/info";


const OrganizationPage = async () => {
    return (
        <div className="w-full mb-20">
            <Info isPro={false}/>
            <Separator className="my-4"/>
            <div className="px-2 md:px-4">
                <Suspense fallback={<BoardList.Skeleton/>}>
                    <BoardList/>
                </Suspense>
            </div>
        </div>
    )
};

export default OrganizationPage;
