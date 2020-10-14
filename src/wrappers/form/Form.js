import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Button, TextField } from "@material-ui/core";
import ErrorText from "~/components/form/ErrorText";
import useYupValidationResolver from "~/utils/validationResolver";

const FormComponent = () => {
  const schema = useMemo(
    () =>
      Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      }),
    []
  );

  const onSubmit = (values) => {
    console.log(values);
  };
  const resolver = useYupValidationResolver(schema);

  const { register, handleSubmit, errors } = useForm({ resolver });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          inputRef={register}
          fullWidth
        />
        {errors.firstName ? (
          <ErrorText>{errors.firstName.message}</ErrorText>
        ) : null}
      </div>

      <div>
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          inputRef={register}
          fullWidth
        />
        {errors.lastName ? (
          <ErrorText>{errors.lastName.message}</ErrorText>
        ) : null}
      </div>
      <div>
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email Address"
          inputRef={register}
          fullWidth
        />
        {errors.email ? <ErrorText>Submit</ErrorText> : null}
      </div>
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
