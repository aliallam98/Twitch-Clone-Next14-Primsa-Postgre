import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const getFollowingUsers = async () => {
  try {
    const user = await currentUser();
    const userId = user?.publicMetadata.userId as string;
    if (!user || !userId) {
      throw new Error("you have to be logged in to get following");
    }
    const followings = await db.follow.findMany({
      where: {
        followerId: userId,
      },
      include:{
        following:true
      }
    });

    return followings;
  } catch (error) {
    return []
  }
};
