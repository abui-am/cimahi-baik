import React from "react";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";
import FormComponent from "~/wrappers/form/Form";

const FormIndex = () => {
  return (
    <BasicLayout>
      <BasicContainer>
        <FormComponent />
      </BasicContainer>
    </BasicLayout>
  );
};

export default FormIndex;
