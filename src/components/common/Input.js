import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import colors from "../../../config/colors";

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.red;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.gray;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.hearder}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  hearder: { fontFamily: "Poppins-Regular" },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 5,

    marginTop: 5,
  },

  inputContainer: {
    paddingVertical: 12,
    width: "100%",
  },

  textInput: {
    flex: 1,
    width: "100%",
  },

  error: {
    color: colors.gray,
    paddingTop: 4,
    fontSize: 12,
  },
});
export default Input;
