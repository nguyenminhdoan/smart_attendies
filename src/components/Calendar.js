import { View, Text, Alert, StatusBar } from "react-native";
// import TimeTable from "@mikezzb/react-native-timetable";
import styles from "../styles/timetable";
import colors from "../../config/colors";
// import WeekView from 'react-native-week-view';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// import TimeTableView, { genTimeBlock } from "react-native-timetable";
import { useRef, useState } from "react";
import TimeTable from "@mikezzb/react-native-timetable";

// import EventCalendar from 'react-native-events-calendar'
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";

function Calendar() {
  return <View></View>;
}

export default Calendar;
