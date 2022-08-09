import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { StyleSheet, Text, TextInput as RNTextInput, View } from "react-native";
import colors from "../../../config/colors";

const ControlledInput = (props) => {
  const formContext = useFormContext();
  const { formState } = formContext;

  const { name, label, rules, defaultValue, ...inputProps } = props;

  const { field } = useController({ name, rules, defaultValue });

  return (
    /* 
     ASSIGN PROPS ONCHANGETEXT, ONBLUR, AND VALUE TO
       CORRESPONDING FIELDS
  */
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <RNTextInput
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.gray,
    // margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: "center",
    padding: 8,
    // backgroundColor: "#0e101c",
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
  },
  input: {
    // backgroundColor: "white",
    borderColor: colors.gray,
    height: 40,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  inputContainer: {},
});

export default ControlledInput;
