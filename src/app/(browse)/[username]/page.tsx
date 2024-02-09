// import { getRecommendedUsers } from '@/actions/getRecommendedUsers'
import { getUserByUsername } from "@/actions/getUserByUsername";
import { isFollowingUser } from "@/actions/isFollowingUser";
import { User } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import Actions from "./_components/Actions";

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

  return (
    <div>
      <p>Username : {userInfo?.userName}</p>
      <p>isFollowing : {`${isFollowing}`}</p>
      <Actions  isFollowing={isFollowing!} id={userInfo?.id}/>
    </div>
  );
};

export default UserPage;
