import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import colors from "../../config/colors";

const Profile = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          padding: 40,
          justifyContent: "center",
        }}
      >
        <View style={{ paddingRight: 15 }}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../components/profile.png")}
          />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: colors.parentHome }}>
            Student ID: 123456789
          </Text>
          <Text style={{ fontSize: 12, marginTop: 5 }}>Nguyen Van A</Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 18,
            textDecorationLine: "underline",
          }}
        >
          Student Detail
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 30,
          paddingLeft: 20,
        }}
      >
        <Text style={{ marginRight: 50, paddingTop: 8 }}>StudentID:</Text>
        <TextInput
          placeholder="Student ID"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 30,
          paddingLeft: 20,
        }}
      >
        <Text style={{ marginRight: 50, paddingTop: 8 }}>Full Name:</Text>
        <TextInput
          placeholder="Full name"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 30,
          paddingLeft: 20,
        }}
      >
        <Text style={{ marginRight: 85, paddingTop: 8 }}>Age :</Text>
        <TextInput
          placeholder="Age"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 30,
          paddingLeft: 20,
        }}
      >
        <Text style={{ marginRight: 18, paddingTop: 8 }}>Phone number:</Text>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 30,
          paddingLeft: 20,
        }}
      >
        <Text style={{ marginRight: 78, paddingTop: 8 }}>Email:</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    width: "60%",
    height: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
export default Profile;
