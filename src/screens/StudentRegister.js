import {
  SafeAreaView,
} from "react-native";
import styles from "../styles/listclass";
import Register from "../components/Register";

const StudentRegister = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Register />
    </SafeAreaView>
  );
};

export default StudentRegister;
