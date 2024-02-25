"use server";
import {blockUser, unblockUser} from "@/lib/block-service";
import {revalidatePath} from "next/cache";

export const onBlock = async (id: string) => {
  const blockedUser = await blockUser(id);
  revalidatePath("/"); //?? why revalidate this?

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnBlock = async (id: string) => {
  const unBlockedUser = await unblockUser(id);
  revalidatePath("/"); //?? why revalidate this?

  if (unBlockedUser) {
    revalidatePath(`/${unBlockedUser.blocked.username}`);
  }

  return unBlockedUser;
};