import {Wrapper} from "./wrapper";
import {Toggle, ToggleSkeleton} from "./toggle";
import {Recommended, RecommendedSkeleton} from "./recommended";

import {getRecomended} from "@/lib/recomended-service";
import {getFollowedUsers} from "@/lib/follow-service";
import {Following, FollowingSkeleton} from "./following";
import {Navigation} from "@/app/(dashboard)/u/[username]/_components/navigation";
interface SidebarProps {
  toggleDisplayText?: string;
  followingDisplay?: boolean;
  recommendedDisplay?: boolean;
  navigationDisplay?: boolean;
}
export const Sidebar = async ({
  toggleDisplayText,
  followingDisplay = false,
  recommendedDisplay = false,
  navigationDisplay = false,
}: SidebarProps) => {
  const recommended = await getRecomended();
  const following = await getFollowedUsers();
  return (
    <Wrapper
      toggleDisplayText={toggleDisplayText}
      navigationSkeletonDisplay={navigationDisplay}
    >
      <Toggle displayText={toggleDisplayText} />
      <div className="space-y-4 pt-4 lg:pt-0">
        {followingDisplay && <Following data={following} />}
        {recommendedDisplay && <Recommended data={recommended} />}
        {navigationDisplay && <Navigation />}
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      {/* <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton /> */}
    </aside>
  );
};
