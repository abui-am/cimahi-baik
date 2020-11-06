import React from "react";
import Home from "~/wrappers/home";
import BasicLayout from "~/components/layouts/BasicLayout";
import BasicContainer from "~/components/layouts/BasicContainer";

const Index = () => {
  return (
    <BasicLayout>
      <BasicContainer>
        <Home />
      </BasicContainer>
    </BasicLayout>
  );
};

export default Index;
