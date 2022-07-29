import { Text, View, TouchableNativeFeedback, Image, Dimensions } from "react-native";
import styles from "../styles/nav_item";
import colors from "../../config/colors";
import * as Animatable from "react-native-animatable";

const colorAr = [
  "#637aff",
  "#60c5a8",
  "#CCCCCC",
  "#ff5454",
  "#039a83",
  "#dcb834",
  "#8f06e4",
  "skyblue",
  "#ff4c98",
];

const bgColor = (i) => colorAr[i % colorAr.length];

const NavItem = ({ navigation, img, title, path, routeParams }) => {
  return (
    <TouchableNativeFeedback onPress={() => navigation.navigate(path, { ...routeParams })}>
      {/* <View style={styles.nav}>
        <Image style={styles.icon} source={img} />
        <Text style={styles.navinfo}>{title}</Text>
        <Image
          style={styles.iconarr}
          source={require("../../assets/arrow.png")}
        />
      </View> */}
      <Animatable.View animation={"pulse"} duration={2000} delay={300}>
        <View
          style={{
            width: Dimensions.get("window").width / 2 - 16,
            backgroundColor: "white",
            margin: 8,
            borderRadius: 10,
            shadowOpacity: 0.3,
            shadowOffset: { width: 1, height: 2 },
          }}
        >
          <View
            style={{
              height: 160,
              margin: 2,
              borderRadius: 25,
              // backgroundColor: colors.primary,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image style={[styles.icon, { marginTop: 65 }]} source={img} />
                <Text style={{ fontWeight: "bold", fontSize: 13, color: "black", paddingTop: 40 }}>
                  {title}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Animatable.View>
    </TouchableNativeFeedback>
  );
};

export default NavItem;