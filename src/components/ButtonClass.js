import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import * as Animatable from "react-native-animatable";

const ButtonClass = ({ navigation, title, major, attend, date }) => {
  return (
    <Animatable.View
      animation={"fadeInDown"}
      delay={100}
      duration={2500}
      style={{ marginLeft: 20 }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Attendace", {
            title,
            major,
            attend,
            date,
          })
        }
      >
        <View
          style={{
            width: "90%",
            marginTop: 30,
            backgroundColor: "white",
            height: 100,
            borderRadius: 10,
            shadowOpacity: 0.3,
            shadowOffset: { width: 2, height: 1 },
          }}
        >
          <View style={{ margin: 10 }}>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 15 }}>{title}</Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.gray,
                marginTop: 5,
                fontFamily: "Poppins-Regular",
              }}
            >
              {major}
            </Text>
            <View
              style={{ backgroundColor: colors.gray, height: 0.3, width: 320, marginTop: 10 }}
            />

            <View style={{ marginTop: 4, flexDirection: "row" }}>
              {attend == true ? (
                <Text style={{ color: colors.green, fontFamily: "Poppins-Regular" }}>✓ Marked</Text>
              ) : (
                <Text style={{ color: colors.green, fontFamily: "Poppins-Regular" }}></Text>
              )}

              <View
                style={{
                  marginLeft: "auto",
                  width: 110,
                  backgroundColor: colors.pink,
                  borderRadius: 20,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: colors.white, fontFamily: "Poppins-Medium", fontSize: 13 }}>
                  {date}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ButtonClass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "center",
  },
  listclass: {
    marginTop: 20,
    width: "90%",
    height: 50,
    alignItems: "center",
    elevation: 15,
    shadowColor: colors.primary,
    shadowOpacity: 0.1,
    borderWidth: 2,
    borderColor: colors.primary,
    opacity: 0.9,
    borderRadius: 10,
    margin: 20,
  },
});
