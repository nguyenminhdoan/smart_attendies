import { View, Text, Alert, StatusBar, Button } from "react-native";
// import TimeTable from "@mikezzb/react-native-timetable";
import styles from "../styles/timetable";
import colors from "../../config/colors";
// import WeekView from 'react-native-week-view';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import TimeTableView, { genTimeBlock } from "react-native-timetable";
import { useRef, useState } from "react";
import TimeTable from "@mikezzb/react-native-timetable";
import DateTimePicker from "@react-native-community/datetimepicker";

// import EventCalendar from 'react-native-events-calendar'
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";
import Schedule from "../components/Schedule";
import DatePickerCustom from "../components/DatePicker";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Juny",
    "August",
    "September",
    "October",
    "Novembrer",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May.",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Staturday",
  ],
  dayNamesShort: ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "fr";

// https://www.npmjs.com/package/react-native-calendars
// https://github.com/henninghall/react-native-date-picker

function TimeTableScreen() {
  const [selectedDate, setSelectedDate] = useState();

  function getDate(date) {
    console.log(date);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.main}>
        {/* time picker */}
        <View
          style={{
            height: 60,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <DatePickerCustom onPress={getDate} />
          </View>
        </View>

        <Calendar
          markingType={"period"}
          markedDates={{
            "2022-08-20": { textColor: colors.primary },

            // "2022-08-22": { startingDay: true, color: colors.primary },

            // "2022-08-23": {
            //   selected: true,
            //   endingDay: true,
            //   color: colors.primary,
            //   textColor: "gray",
            // },

            "2022-08-04": {
              disabled: true,
              startingDay: true,
              textColor: "black",
              color: colors.primary,
              endingDay: true,
            },
          }}
          theme={{
            textDayHeaderFontSize: 12,
            dayTextColor: "black",
            // agendaDayNumColor: "red",
            // textDayStyle: { color: "red" },
          }}
          firstDay={0}
          onDayPress={(day) => {
            // console.log("selected day", day);
            setSelectedDate(day);
          }}
        />

        <Schedule selectedDate={selectedDate} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default TimeTableScreen;
