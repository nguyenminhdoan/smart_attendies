import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";


const Register = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        
        <TextInput
          placeholder="Student ID"
          placeholderTextColor="gray"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="gray"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Age"
          placeholderTextColor="gray"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="gray"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style = {{color: "white"}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingBottom: 10,
  },
  button: {
    marginLeft: "25%",
    width: "50%",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
  },
});

export default Register;
