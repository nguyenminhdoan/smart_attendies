import { View, Text, Image, LogBox, FlatList, Pressable, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import styles from "../styles/home";
import NavItem from "../components/NavItem";
import Logout from "../components/Logout";

export default function Teacherhome({ navigation }) {
  const [teacher, setTeacher] = useState("");

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("user");
      if (token) {
        setTeacher(JSON.parse(token));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();

    // Ignore the warning about the setting a timer
    LogBox.ignoreLogs(["Setting a timer"]);
  });

  return (
    <View style={styles.main}>
      <View style={[styles.container, { height: 160 }]}>
        <View style={styles.infobox}>
          <View style={styles.imgbox}>
            <Image
              style={styles.img}
              source={{
                uri: teacher.image,
              }}
            />
          </View>
          <View style={styles.basic}>
            <Text style={styles.name}>{teacher?.name}</Text>
            <Text style={styles.address}>{teacher?.address}</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            marginTop: "25%",
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-around",
            // flex: 1,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <NavItem
            img={require("../../assets/icon/class-icon.png")}
            title="List Class"
            navigation={navigation}
            path="ListClass"
          />

          <NavItem
            img={require("../../assets/icon/timetable3.png")}
            title="Time Table"
            navigation={navigation}
            path="TimeTable"
          />
          <NavItem
            img={require("../../assets/icon/take-attendance.png")}
            title="Take attendance"
            navigation={navigation}
            path="Attendance"
          />
          <NavItem
            img={require("../../assets/icon/notice-icon.png")}
            title="Create notice"
            navigation={navigation}
            path="CreateNotice"
          />
          <NavItem
            img={require("../../assets/icon/record-icon.png")}
            title="Attendance record"
            navigation={navigation}
            path="Attendancerecord"
          />

          {/* <NavItem
            img={require("../../assets/paper.png")}
            title="Previous notices"
            navigation={navigation}
            path="PreviousNotices"
          /> */}
        </View>
      </ScrollView>

      <Logout navigation={navigation} />
    </View>
  );
}
