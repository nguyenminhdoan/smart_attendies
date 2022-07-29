import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  main: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "center",
  },
  infobox: {
    width: "85%",
    position: "absolute",
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: "30%",
    elevation: 15,
    // shadowColor: colors.primary,
    shadowOpacity: 0.1,
    opacity: 0.9,
    borderRadius: 10,
  },
  listclass: {
    marginTop: 20,
    width: "90%",
    height: 50,
    alignItems: "center",
    elevation: 15,
    shadowColor: colors.primary,
    shadowOpacity: 0.1,
    borderWidth: 2,
    borderColor: colors.primary,
    opacity: 0.9,
    borderRadius: 10,
    margin: 20,
  },
});

export default styles;
