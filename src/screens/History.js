import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import styles from "../styles/listclass";
import colors from "../../config/colors";
import HistoryStudent from "../components/HistoryStudent";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import Icon from "../components/LeaveAppealIcon";
// import CircularProgressBar from "../components/CircularProgress";

const History = ({ navigation }) => {
  const today = moment(new Date()).format("DD/MM/YYYY");

  const [date, setDate] = useState(today);

  console.log("line 26:", navigation);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DatePicker
              style={{}}
              date={date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-2022"
              maxDate="01-01-2100"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "gray",
                },
                dateText: {
                  fontSize: 17,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />

            <View style={{ paddingRight: 5 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("StudentProfile")}
              >
                <View>
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../components/profile.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginLeft: 20, color: colors.gray }}>
                Current Week
              </Text>
              <View
                style={{
                  backgroundColor: colors.gray,
                  height: 0.1,
                  width: 250,
                }}
              />
            </View>

            <View>{/* <CircularProgressBar/> */}</View>
          </View>
          <View style={{ paddingLeft: 40, paddingBottom: 20 }}>
            <HistoryStudent />
            <HistoryStudent />
            <HistoryStudent />
            <HistoryStudent />
            <HistoryStudent />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
