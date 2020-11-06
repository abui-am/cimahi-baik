import React from "react";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";
import JadiRelawan from "~/wrappers/jadiRelawan/JadiRelawan";

const Register = () => {
  return (
    <BasicLayout staticAppBar>
      <BasicContainer>
        <JadiRelawan />
      </BasicContainer>
    </BasicLayout>
  );
};

export default Register;
