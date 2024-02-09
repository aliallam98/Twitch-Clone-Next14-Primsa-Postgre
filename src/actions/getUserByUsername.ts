import db from "@/lib/db";
import { User } from "@prisma/client";

export const getUserByUsername = async (username: string) => {
  try {
    if (!username) return;

    const user = await db.user.findUnique({
      where: {
        userName: username,
      },
    });

    if (!user) throw new Error("cannot find this user");
    return user;
  } catch (error) {
    // console.log(error);
  }
};
