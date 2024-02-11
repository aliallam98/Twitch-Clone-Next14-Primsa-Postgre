// import { getRecommendedUsers } from '@/actions/getRecommendedUsers'
import { getUserByUsername } from "@/actions/getUserByUsername";
import { isFollowingUser } from "@/actions/isFollowingUser";
import { User } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import Actions from "./_components/Actions";
import { isBlockedUser } from "@/actions/isBlockedUser";

interface IProps {
  params: {
    username: string;
  };
}
const UserPage = async ({ params }: IProps) => {
  // getUserByUsername
  const userInfo: User | undefined = await getUserByUsername(params.username);
  if (!userInfo) {
    return notFound();
  }
  // check if Following

  const isFollowing = await isFollowingUser(userInfo?.id);
  const isBlocked = await isBlockedUser(userInfo?.id);
  console.log(isBlocked);
  

  if (isBlocked) {
    return notFound();
  }

  return (
    <div>
      <p>Username : {userInfo?.userName}</p>
      <p>isFollowing : {`${isFollowing}`}</p>
      <p>isBlocked : {`${isBlocked}`}</p>
      <Actions
        isFollowing={isFollowing!}
        isBlocked={isBlocked!}
        id={userInfo?.id}
      />
    </div>
  );
};

export default UserPage;
