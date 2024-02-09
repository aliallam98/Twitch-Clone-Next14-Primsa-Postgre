import React from "react";
import Wrapper from "./Wrapper";
import Trigger from "./Trigger";
import Recommended from "./Recommended";
import { getRecommendedUsers } from "@/actions/getRecommendedUsers";

const Sidebar = async () => {
  const recommended  = await getRecommendedUsers()
  console.log(recommended);
  
  return (
    <Wrapper>
      <Trigger />
      <Recommended data = {recommended} />
    </Wrapper>
  );
};

export default Sidebar;
