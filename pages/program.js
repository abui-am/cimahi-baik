import React from "react";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";
import Program from "~/wrappers/program/Program";

const ProgramIndex = () => {
  return (
    <BasicLayout staticAppBar   >
      <BasicContainer>
        <Program />
      </BasicContainer>
    </BasicLayout>
  );
};

export default ProgramIndex;
