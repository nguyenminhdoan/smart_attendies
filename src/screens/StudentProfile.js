import { SafeAreaView } from "react-native";
import styles from "../styles/listclass";
import Profile from "../components/Profile";

const StudentProfile = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Profile />
    </SafeAreaView>
  );
};

export default StudentProfile;
