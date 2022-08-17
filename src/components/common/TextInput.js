import React from "react";
import { useFormContext } from "react-hook-form";

import ControlledInput from "./ControlledInput";

//https://echobind.com/post/react-hook-form-for-react-native

export const TextInput = (props) => {
  const formContext = useFormContext();
  const { name } = props;
  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  return <ControlledInput {...props} />;
};
