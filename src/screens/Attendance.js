import { View, Text, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/attendace";
import colors from "../../config/colors";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
import ListStudent from "../components/ListStudent";
// import RNPickerSelect from "react-native-picker-select";
// import RNDateTimePicker from "@react-native-community/datetimepicker";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

const Attendance = ({ navigation, route }) => {
  const [classofweek, setClassofweek] = useState();

  const [selectedLanguage, setSelectedLanguage] = useState();

  const today = moment(new Date()).format("DD/MM/YYYY");

  const [date, setDate] = useState(today);

  useEffect(() => {
    let { title, major, attend, date } = route.params;
    setClassofweek({ title, major, attend, date });
  }, [route]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, margin: 10 }}>{classofweek?.title}</Text>

      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <View style={{ flexDirection: "row" }}>
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

          <View style={{ flexDirection: "column", marginTop: 3, paddingLeft: 90 }}>
            <Text style={{ fontSize: 16 }}>Total Sytudens</Text>
            <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>45</Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <ListStudent />
        </View>
      </View>
    </View>
  );
};

export default Attendance;
