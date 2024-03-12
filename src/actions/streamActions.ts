"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { Stream } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getStreamByUserId = async (userId: string) => {
  const stream = await db.stream.findUnique({
    where: {
      userId,
    },
  });

  return stream;
};

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const user = await currentUser();
    const userId = user?.publicMetadata.userId as string;
    if (!userId || !user) {
      throw new Error("Not Authenticated");
    }
    const validDate = {
      thumbnailUrl: values.thumbnailUrl,
      name: values.name,
      isChatEnabled: values.isChatEnabled,
      isChatFollowersOnly: values.isChatFollowersOnly,
      isChatDelayed: values.isChatDelayed,
    };
    const streamToUpdate = db.stream.update({
      where: {
        userId,
      },
      data: {
        ...validDate,
      },
    });

    revalidatePath(`/u/${user.username}/chat`);
    revalidatePath(`/u/${user.username}`);
    revalidatePath(`/${user.username}`);

    return streamToUpdate;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
