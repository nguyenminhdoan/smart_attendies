import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";
// import DatePicker from "react-native-date-picker";
// import DateTimePicker from "@react-native-community/datetimepicker";

import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

function DatePickerCustom({ onPress }) {
  const [date, setDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setDate(date);

    hideDatePicker();
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          title="Show Date Picker"
          onPress={showDatePicker}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={[styles.text, { marginRight: 5 }]}>
            {date.toLocaleDateString("en-GB")}
          </Text>
          {/* <AntDesign name="table" size={24} color="black" /> */}
          <Image
            source={require("../../assets/icon/timetable3.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 1,
            backgroundColor: colors.gray,
            bottom: -3,
          }}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="en_GB"
        date={new Date()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Medium",
  },
});

export default DatePickerCustom;
