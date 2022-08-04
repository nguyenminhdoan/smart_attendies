import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import ButtonClass from "../components/ButtonClass";
import styles from "../styles/listclass";
import colors from "../../config/colors";
import { faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const DATA = [
  {
    title: "Synonyms & Antonyms",
    major: "English",
    date: "24 Mar 2022",
    status: false,
  },
  { title: "OOP", major: "Science", date: "21 Mar 2020", status: true },
  {
    title: "Solar Sytem",
    major: "Science",
    date: "24 Mar 2022",
    status: false,
  },
  {
    title: "Security System",
    major: "Science",
    date: "24 Mar 2022",
    status: false,
  },
  { title: "Solar Sytem", major: "Science", date: "24 Mar 2022", status: true },
  {
    title: "Data structor",
    major: "Science",
    date: "24 Mar 2022",
    status: false,
  },
];

const ListClass = ({ navigation }) => {
  const rederClass = ({ item }) => (
    <ButtonClass
      title={item.title}
      major={item.major}
      navigation={navigation}
      date={item.date}
      attend={item.status}
    />
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.listclass}>
          <Text
            style={{
              color: colors.primary,
              marginTop: "auto",
              marginBottom: "auto",
              fontFamily: "Poppins-Medium",
            }}
          >
            List Class of Week
          </Text>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                color: colors.gray,
                fontFamily: "Poppins-Regular",
              }}
            >
              Current Week
            </Text>

            <View
              style={{ backgroundColor: colors.gray, height: 0.1, width: 250 }}
            />
          </View>
          <TouchableOpacity
            style={{
              marginRight: 40,
              marginLeft: 40,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: "#1E6738",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
            }}
            // onPress={() => navigate("HomeScreen")}
            underlayColor="#fff"
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              Add Course
            </Text>
          </TouchableOpacity>

          <FlatList
            style={{ marginTop: 5, width: "100%" }}
            data={DATA}
            renderItem={rederClass}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListClass;
