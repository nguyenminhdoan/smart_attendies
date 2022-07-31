import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import ButtonClass from "../components/ButtonClass";
import styles from "../styles/listclass";
import colors from "../../config/colors";

const DATA = [
  { title: "Synonyms & Antonyms", major: "English", date: "24 Mar 2022", status: false },
  { title: "OOP", major: "Science", date: "21 Mar 2020", status: true },
  { title: "Solar Sytem", major: "Science", date: "24 Mar 2022", status: false },
  { title: "Security System", major: "Science", date: "24 Mar 2022", status: false },
  { title: "Solar Sytem", major: "Science", date: "24 Mar 2022", status: true },
  { title: "Data structor", major: "Science", date: "24 Mar 2022", status: false },
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
              fontFamily: "Roboto-Medium",
            }}
          >
            List Class of Week
          </Text>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginLeft: 20,
                color: colors.gray,
                fontFamily: "Roboto-Regular",
              }}
            >
              Cerrent Week
            </Text>
            <View style={{ backgroundColor: colors.gray, height: 0.1, width: 250 }} />
          </View>

          <FlatList data={DATA} renderItem={rederClass} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListClass;
