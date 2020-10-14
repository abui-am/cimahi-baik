import React from "react";
import Home from "~/components/home";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";

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
