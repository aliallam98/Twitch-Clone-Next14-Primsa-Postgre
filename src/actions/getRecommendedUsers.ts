import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@prisma/client";

export const getRecommendedUsers = async () => {
  const user = await currentUser();
  const userId = user?.publicMetadata.userId;

  if (userId) {
    const Recommended: User[] = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
          {
            NOT: {
              blocking: {
                some: {
                  blockedId: userId,
                },
              },
            },
          },
        ],
      },
    });
    return Recommended;
  }

  const Recommended = await db.user.findMany({});

  return Recommended;
};
