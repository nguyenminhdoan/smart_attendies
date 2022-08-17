import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,

    padding: 35,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonSubmit: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins-Blod",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  btnAddCourse: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default styles;
