import React, { useState, useEffect } from "react";
import Loginparent from "../screens/Loginparent";
import Loginteacher from "../screens/Loginteacher";
import Welcome from "../screens/Welcome";
import Teacherhome from "../screens/Teacherhome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Takeattendance from "../screens/TakeAttendance";
import Parenthome from "../screens/Parenthome";
import CreateNotice from "../screens/CreateNotice";
import PreviousNotices from "../screens/PreviousNotices";
import LeaveAppeals from "../screens/BrowseLeaveAppeals";
import AppealLeave from "../screens/AppealLeave";
import AttendanceRecord from "../screens/AttendanceRecord";
import ListClass from "../screens/ListClass";
import Attendance from "../screens/Attendance";
import * as SecureStore from "expo-secure-store";
import ScreenCamera from "../screens/ScreenCamera";
import History from "../screens/History";
import StudentRegister from "../screens/StudentRegister";
import StudentProfile from "../screens/StudentProfile";
import colors from "../../config/colors";

import "react-native-gesture-handler";

import TimeTable from "../screens/TimeTable";

import Attendanceinfo from "../screens/Attendanceinfo";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_100Thin,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  const [date, setDate] = useState(null);
  const [defaultScreen, setDefaultScreen] = useState("Welcome");

  const getToken = async () => {
    const token = await SecureStore.getItemAsync("user");
    if (token) {
      console.log(token);
      const role = JSON.parse(token).role;
      if (role === "parent") {
        setDefaultScreen("Parenthome");
      } else {
        setDefaultScreen("Teacherhome");
      }
      // navigation.navigate(
      //   `${role === "parent" ? "Parenthome" : "Teacherhome"}`
      // );
    }
  };

  useEffect(() => {
    getToken();
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  }, []);
  let [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_500Medium,
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_300Light,
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),

    "Poppins-Blod": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={defaultScreen}>
        <Stack.Screen
          name="Attendance"
          component={Takeattendance}
          options={{
            title: "Attendance: " + date,
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />

        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Loginp"
            component={Loginparent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Logint"
            component={Loginteacher}
            options={{
              headerShown: false,
            }}
          />
        </>
        <Stack.Screen
          name="Teacherhome"
          component={Teacherhome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Parenthome"
          component={Parenthome}
          options={{
            headerShown: false,
          }}
        />

        {/* List button in screen Teacherhome */}
        <Stack.Screen
          name="ListClass"
          component={ListClass}
          options={{
            title: "List Classes",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: "History",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />

        <Stack.Screen
          name="StudentRegister"
          component={StudentRegister}
          options={{
            title: "Student Register",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />

        <Stack.Screen
          name="StudentProfile"
          component={StudentProfile}
          options={{
            title: "Student Profile",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />

        <Stack.Screen
          name="Attendace"
          component={Attendance}
          options={{
            title: "Attendace",

            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="ScreenCamera"
          component={ScreenCamera}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Attendancerecord"
          component={AttendanceRecord}
          options={{
            title: "Attendance record",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="CreateNotice"
          component={CreateNotice}
          options={{
            title: "Create Notice",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="PreviousNotices"
          component={PreviousNotices}
          options={{
            title: "Previous Notices",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="BrowseLeaveAppeals"
          component={LeaveAppeals}
          options={{
            title: "Leave Appeals",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />

        <Stack.Screen
          name="TimeTable"
          component={TimeTable}
          options={{
            title: "TimeTable",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />

        <Stack.Screen
          name="AppealLeave"
          component={AppealLeave}
          options={{
            title: "Appeal leave",
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.navi,
            headerTitleStyle: {
              fontFamily: "Poppins-Blod",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Studentinfo"
          component={Attendanceinfo}
          options={{
            title: "",
            headerTransparent: true,
            headerTintColor: colors.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
