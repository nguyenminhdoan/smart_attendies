import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../config/colors";

function Schedule(props) {
  const { selectedDate } = props;

  const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));
  // console.log(selectedDate?.day, selectedDate?.month, selectedDate?.year);

  useEffect(() => {
    setDate(
      `${selectedDate?.day}/${selectedDate?.month}/${selectedDate?.year}`
    );
  }, [props]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.header}>
          {/* 0{selectedDate?.day}-0{selectedDate?.month}-{selectedDate?.year} */}
          {date}
        </Text>

        <View
          style={{
            marginLeft: 30,
            flexDirection: "column",
          }}
        >
          <Text style={styles.timetext}>07:00 - 08:30</Text>
          <Text style={styles.content}>Nhập Môn Lập Trình</Text>
        </View>
      </View>
    </View>
  );
}

export default Schedule;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    margin: 20,
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    fontFamily: "Poppins-Blod",
    color: colors.primary,
    marginBottom: 10,
  },

  content: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    // fontWeight: "600",
  },
  timetext: {
    fontFamily: "Poppins-Blod",
  },
});
