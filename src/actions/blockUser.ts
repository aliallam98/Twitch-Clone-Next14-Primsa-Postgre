"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const blockUser = async (id: string) => {
  try {
    const user = await currentUser();
    const loggedInUserId = user?.publicMetadata.userId as string;

    const userToBlock = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!userToBlock) {
      throw new Error("User not found");
    }

    const isBlocked = await db.block.findUnique({
      where: {
        blockedId_blockerId:{
          blockerId: loggedInUserId,
          blockedId: userToBlock.id,
        }
      },
    });

    if (isBlocked) {
      throw new Error("You're already blocked this user");
    }

    const block = await db.block.create({
      data: {
        blockerId: loggedInUserId,
        blockedId: userToBlock.id,
      },
      include: {
        blocked: true,
      },
    });


    revalidatePath(`/${block.blocked.userName}`)
    return block;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};
