"use server";
import {followUser, unfollowUser} from "@/lib/follow-service";
import {revalidatePath} from "next/cache";
export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);

    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`${followedUser.following.username}`);
    }
    return followedUser;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Error");
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const unfollowedUser = await unfollowUser(id);
    revalidatePath("/"); //?? why revalidate this?
    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.username}`);
    }
    return unfollowedUser;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Error");
  }
};
