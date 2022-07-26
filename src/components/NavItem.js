import { Text, View, TouchableNativeFeedback, Image } from "react-native";
import styles from "../styles/nav_item";

const NavItem = ({ navigation, img, title, path, routeParams }) => {
  return (
    <TouchableNativeFeedback
      // style={styles.btn}
      style={{
        display: "flex",
      }}
      onPress={() => navigation.navigate(path, { ...routeParams })}
    >
      {/* <View style={styles.nav}>
        <Image style={styles.icon} source={img} />
        <Text style={styles.navinfo}>{title}</Text>
        <Image
          style={styles.iconarr}
          source={require("../../assets/arrow.png")}
        />
      </View> */}
      <View
        style={{
          padding: 20,
          borderRadius: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eff1f4",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          margin: 10,
          // maxWidth: 200,
          // height: 150,
        }}
      >
        <Image style={styles.icon} source={img} />
        <Text>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default NavItem;
