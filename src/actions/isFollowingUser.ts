import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@prisma/client";

export const isFollowingUser = async (id: string) => {
  const user = await currentUser();
  const currentUserId = user?.publicMetadata.userId as string;

  try {
    const userToCheck = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!userToCheck) {
      throw new Error("User not found");
    }

    if (userToCheck.id === currentUserId) {
      return true;
    }

    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: id,
      },
    });

    return !!isFollowing; // to return true || false
  } catch (error) {
    // console.log(error);
  }
};
