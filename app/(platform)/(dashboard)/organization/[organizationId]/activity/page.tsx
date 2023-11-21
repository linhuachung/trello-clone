import {Suspense} from "react";

import {Separator} from "@/components/ui/separator";

import {Info} from "../_components/info";

import {
    ActivityList
} from "@/app/(platform)/(dashboard)/organization/[organizationId]/activity/_conponents/activity-list";

const ActivityPage = async () => {

    return (
        <div className="w-full">
            <Info isPro={false}/>
            <Separator className="my-2"/>
            <Suspense fallback={<ActivityList.Skeleton/>}>
                <ActivityList/>
            </Suspense>
        </div>
    );
};

export default ActivityPage;
