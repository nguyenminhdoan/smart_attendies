import { Text, View, Image, Button, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import colors from "../../config/colors";

const ListStudent = ({ onPress }) => {
  return (
    <View
      style={{
        width: "90%",
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 20,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 1 },
      }}
    >
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View>
          <Image source={require("../components/profile.png")} />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 5 }}>
          <Text style={{ color: colors.parentHome }}>List Student</Text>
          <Text style={{ fontSize: 12, marginTop: 5 }}>124123123</Text>
          <Text style={{ marginTop: 5, fontSize: 12 }}>UI/UX Desinger</Text>
        </View>

        <View
          style={{
            backgroundColor: colors.gray,
            width: 1,
            height: "90%",
            marginLeft: 35,
          }}
        />

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 10, textAlign: "center" }}>09:00:00</Text>
            <Pressable style={styles.button} onPress={onPress}>
              <Text style={styles.text}>In Time</Text>
            </Pressable>
          </View>

          <View>
            <Text style={{ fontSize: 10, textAlign: "center" }}>17:09:38</Text>
            <Pressable style={[styles.button, { backgroundColor: "red" }]} onPress={onPress}>
              <Text style={styles.text}>Out Time</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListStudent;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.parentHome,
    position: "relative",
    height: "10%",
  },
  text: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    position: "absolute",
  },
});
