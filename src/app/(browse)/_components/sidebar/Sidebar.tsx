import React from "react";
import Wrapper from "./Wrapper";
import Trigger from "./Trigger";
import Recommended from "./Recommended";
import { getRecommendedUsers } from "@/actions/getRecommendedUsers";
import { User } from "@prisma/client";

const Sidebar = async () => {
  const recommended : User[]   = await getRecommendedUsers()
  
  return (
    <Wrapper>
      <Trigger />
      <Recommended data = {recommended} />
    </Wrapper>
  );
};

export default Sidebar;
