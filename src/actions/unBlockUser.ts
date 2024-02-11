"use server";
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const unBlockUser = async (id: string) => {
  try {
    const user = await currentUser();
    const loggedInUserId = user?.publicMetadata.userId as string;

    const userToUnBlock = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!userToUnBlock) {
      throw new Error("User not found");
    }


    const isBlocked = await db.block.findUnique({
      where: {
        blockedId_blockerId: {
          blockerId: loggedInUserId,
          blockedId: userToUnBlock.id,
        },
      },
    });

    

    if (!isBlocked) {
      throw new Error("You're not blocked this user");
    }

    const block = await db.block.delete({
      where: {
        id: isBlocked.id,
      },
      include: {
        blocked: true,
      },
    });


    revalidatePath(`/${block.blocked.userName}`)
    return block;
  } catch (error) {
    // console.log(error);
    throw new Error("Internal server error");
  }
};
