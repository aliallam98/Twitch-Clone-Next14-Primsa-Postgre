import React from "react";
import Wrapper from "./Wrapper";
import Trigger from "./Trigger";
import Navigation from "./Navigation";

const Sidebar = async () => {
  return (
    <Wrapper>
      <Trigger />
      <Navigation />
    </Wrapper>
  );
};

export default Sidebar;
