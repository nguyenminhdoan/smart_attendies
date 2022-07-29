import { Text, View, Image, Button } from "react-native";
import colors from "../../config/colors";

const ListStudent = () => {
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
            marginLeft: 50,
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ width: 20, height: 20, color: colors.parentHome }}
            title="Right button"
            onPress={() => Alert.alert("Right button pressed")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListStudent;
