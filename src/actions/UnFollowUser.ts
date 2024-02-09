"use server";
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const unFollowUser = async (id: string) => {
    try {
      const loggedInUser = await currentUser();
      const loggedInUserId = loggedInUser?.publicMetadata.userId as string;
      if (!loggedInUser) {
        throw new Error("you have to login to follow");
      }
  
      const userToUnFollow = await db.user.findUnique({
        where: {
          id,
        },
      });
  
      if (!userToUnFollow) {
        throw new Error("user not found");
      }
  
      const isFollowing = await db.follow.findFirst({
        where: {
          followerId: loggedInUserId,
          followingId: userToUnFollow.id,
        },
      });
  
      if (!isFollowing) {
        throw new Error("you're not  following this user");
      }
  
      const unFollow = await db.follow.delete({
        where: {
          id: isFollowing.id,
        },
        include:{
          follower:true,
          following:true
        }
      });
      revalidatePath("/")
      return unFollow;
    } catch (error) {
      console.log();
      throw new Error("internal server error");
    }
  };
  