import React from "react";
import Wrapper from "./Wrapper";
import Trigger from "./Trigger";
import Recommended from "./Recommended";
import { getRecommendedUsers } from "@/actions/getRecommendedUsers";
import { User } from "@prisma/client";
import { getFollowingUsers } from "@/actions/getFollowingUsers";
import Following from "./Following";

const Sidebar = async () => {
  const recommended: User[] = await getRecommendedUsers();
  const following = await getFollowingUsers();

  return (
    <Wrapper>
      <Trigger />
      <Following following={following} />
      <Recommended data={recommended} />
    </Wrapper>
  );
};

export default Sidebar;
