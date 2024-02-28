"use client";
import {useSidebar} from "@/store/use-sidebar";
import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";
import {Toggle, ToggleSkeleton} from "./toggle";
import {RecommendedSkeleton} from "./recommended";
import {FollowingSkeleton} from "./following";
import {useIsClient} from "usehooks-ts";
import {NavItemSkeleton} from "@/app/(dashboard)/u/[username]/_components/nav-item";
import {NavSkeleton} from "@/app/(dashboard)/u/[username]/_components/navigation";
interface WrapperProps {
  children: React.ReactNode;
  toggleDisplayText?: string;
  navigationSkeletonDisplay?: boolean;
}

export const Wrapper = ({
  children,
  toggleDisplayText,
  navigationSkeletonDisplay = false,
}: WrapperProps) => {
  const {collapsed} = useSidebar((state) => state);
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <aside
        className={cn(
          "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50"
        )}
      >
        <ToggleSkeleton />
        {/* <Toggle displayText={toggleDisplayText} /> */}
        {!navigationSkeletonDisplay && <FollowingSkeleton />}
        {!navigationSkeletonDisplay && <RecommendedSkeleton />}
        {navigationSkeletonDisplay && <NavSkeleton />}
      </aside>
    );
  }
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "lg:w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
