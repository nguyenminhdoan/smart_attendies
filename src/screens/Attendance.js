import React, { useState, useEffect } from "react";
import { View, Text, Button, Pressable } from "react-native";
import styles from "../styles/attendace";
import colors from "../../config/colors";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
import ListStudent from "../components/ListStudent";
// import RNPickerSelect from "react-native-picker-select";
// import RNDateTimePicker from "@react-native-community/datetimepicker";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Feather } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";

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
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: colors.primary,
            fontFamily: "Poppins-Blod",
          }}
        >
          Class: {classofweek?.title}
        </Text>

        <Pressable
          style={{
            right: "50%",
            backgroundColor: "#C81A15",
            padding: 15,
            borderRadius: "50%",
          }}
          onPress={() => navigation.navigate("ScreenCamera")}
        >
          <View
            style={{
              textAlign: "center",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <Feather name="camera" size={30} color="white" />
          </View>
        </Pressable>
      </View>

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
                fontFamily: "Poppins-Regular",
              },
              dateText: {
                fontSize: 17,
                fontFamily: "Poppins-Medium",
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />

          <View
            style={{ flexDirection: "column", marginTop: 3, paddingLeft: 90 }}
          >
            <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium" }}>
              Total Students
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 13,
                fontFamily: "Poppins-Medium",
              }}
            >
              3
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <ListStudent />
          <ListStudent />
          <ListStudent />
        </View>
      </View>
    </View>
  );
};

export default Attendance;
