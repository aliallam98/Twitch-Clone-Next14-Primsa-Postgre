"use server";
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const isBlockedUser = async (id: string) => {
  try {
    const user = await currentUser();
    const loggedIngUserId = user?.publicMetadata.userId as string;

    const isUserExist = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!isUserExist) {
      throw new Error("Cannot find user");
    }

    if (loggedIngUserId === isUserExist.id) {
      return false;
    }

    const isBlocked = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockerId: isUserExist.id,
          blockedId: loggedIngUserId,
        },
      },
    });

    const amIBlocker = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockerId: loggedIngUserId,
          blockedId: isUserExist.id,
        },
      },
    });

    // amIBlocker:!!amIBlocker

    return { isBlockedByThisUser: !!isBlocked, amIBlocker: !!amIBlocker };
  } catch (error) {
     throw new Error("Internal server error")
  }
};
