"use server"
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

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

    const isBlocked = await db.block.findFirst({
      where: {
        blockerId: loggedInUserId,
        blockedId: userToUnBlock.id,
      },
    });

    if (!isBlocked) {
      throw new Error("You're not blocked this user");
    }

    const block = await db.block.delete({
      where: {
        id:isBlocked.id
      },
      include:{
        blocked:true,
      }
    });

    return block;
  } catch (error) {
    throw new Error("Internal server error")
  }
};
