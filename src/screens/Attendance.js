import { View, Text } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/attendace";
import colors from "../../config/colors";

import { Picker } from "@react-native-picker/picker";
// import RNPickerSelect from "react-native-picker-select";
// import DateTimePicker from "@react-native-community/datetimepicker";

const Attendance = ({ navigation, route }) => {
  const [classofweek, setClassofweek] = useState();

  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    let { title, major, attend, date } = route.params;
    setClassofweek({ title, major, attend, date });
  }, [route]);

  //   alert(classofweek?.title);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, margin: 10 }}>{classofweek?.title}</Text>

      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Picker
          style={{ width: "45%", height: 50, color: "#fff", placeholderTextColor: "#fff" }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
          itemStyle={{
            // backgroundColor: "grey",
            // color: "blue",
            // fontFamily: colors.pink,
            fontSize: 17,
            height: 40,
            // borderColor: "black",
          }}
        >
          <Picker.Item label="24 Mar 2022" value="24 Mar 2022" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="C#" />
        </Picker>
        <Text style={{ marginTop: 8, paddingLeft: 90 }}>Total Sytudens</Text>
      </View>

      {/* <Text>{title}</Text> */}
    </View>
  );
};

export default Attendance;
