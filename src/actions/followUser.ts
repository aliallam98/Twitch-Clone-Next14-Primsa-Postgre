"use server";
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const followUser = async (id: string) => {
  try {
    const loggedInUser = await currentUser();
    const loggedInUserId = loggedInUser?.publicMetadata.userId as string;
    if (!loggedInUser) {
      throw new Error("you have to login to follow");
    }

    const userToFollow = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!userToFollow) {
      throw new Error("user not found");
    }

    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: loggedInUserId,
        followingId: userToFollow.id,
      },
    });

    if (isFollowing) {
      throw new Error("already Followed");
    }

    const follow = await db.follow.create({
      data: {
        followerId: loggedInUserId,
        followingId: userToFollow.id,
      },
      include:{
        follower:true,
        following:true
      }
    });

    revalidatePath("/")
    return follow;
  } catch (error) {
    console.log();
    throw new Error("internal server error");
  }
};

