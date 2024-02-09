import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@prisma/client";

export const getRecommendedUsers = async () => {
  const user = await currentUser();
  const userId = user?.publicMetadata.userId;

  if (userId) {
    const Recommended : User[] = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
    });
    return Recommended
  }

  const Recommended = await db.user.findMany({})

  return Recommended
  }

