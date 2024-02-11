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
  const blockData  = await isBlockedUser(userInfo?.id) as { isBlockedByThisUser: boolean; amIBlocker: boolean; } 

  console.log("Api", blockData);

  if (blockData.isBlockedByThisUser) {
    return notFound();
  }

  return (
    <div>
      <p>Username : {userInfo?.userName}</p>
      <p>isFollowing : {`${isFollowing}`}</p>
      <p>isBlockedByThisUser : {`${blockData?.isBlockedByThisUser}`}</p>
      <Actions
        isFollowing={isFollowing!}
        blockData={blockData!}
        id={userInfo?.id}
      />
    </div>
  );
};

export default UserPage;
