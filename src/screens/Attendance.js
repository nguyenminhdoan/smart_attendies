import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import styles from "../styles/attendace";
import colors from "../../config/colors";
import moment from "moment";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "react-native-datepicker";
import ListStudent from "../components/ListStudent";
import Modal from "react-native-modal";
// import RNPickerSelect from "react-native-picker-select";
// import RNDateTimePicker from "@react-native-community/datetimepicker";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";
import { Feather } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";

import { useDispatch, useSelector } from "react-redux";
import { selectAllListStudent } from "../features/liststudent/liststudentSlice";

import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";

import { TextInput } from "../components/common/TextInput";
import { addStudent } from "../features/liststudent/liststudentSlice";

const Attendance = ({ navigation, route }) => {
  const [classofweek, setClassofweek] = useState();

  const listStudent = useSelector(selectAllListStudent);
  // console.log(listStudent);

  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [selectedLanguage, setSelectedLanguage] = useState();

  const { reset, ...methods } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      addStudent({
        name: data.name,
        id: data.id,
        job: data.job,
      })
    );

    reset({
      name: "",
      id: "",
      job: "",
    });
    alert("Add student success.");
  };

  const onError = (errors, e) => {
    return console.log(errors);
  };

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
      });

      console.log(response);
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const today = moment(new Date()).format("DD/MM/YYYY");

  const [date, setDate] = useState(today);

  useEffect(() => {
    let { title, major, attend, date } = route.params;
    setClassofweek({ title, major, attend, date });
  }, [route]);

  function hanldeonPress(params) {
    console.log("hello");
  }

  const render = listStudent.map((item) => (
    <ListStudent
      name={item.name}
      id={item.id}
      job={item.job}
      onPress={hanldeonPress}
    />
  ));

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Text
            style={{
              fontSize: 15,
              color: colors.primary,
              fontFamily: "Poppins-Blod",
            }}
          >
            Class: {classofweek?.title}
          </Text>

          <Pressable
            style={{
              marginRight: 40,
              marginLeft: 40,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: "#1E6738",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#fff",
            }}
            // onPress={() => console.log("Hello")}
            onPress={toggleModal}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              Add Student
            </Text>
          </Pressable>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Course</Text>

              <FormProvider {...methods}>
                <TextInput
                  name="name"
                  label="Name"
                  placeholder="Makerting"
                  // keyboardType="email-address"
                />
                <TextInput
                  name="id"
                  label="Id"
                  placeholder="Business"
                  // secureTextEntry
                />
                <TextInput
                  name="job"
                  label="Job"
                  placeholder="Business"
                  // secureTextEntry
                />
              </FormProvider>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                }}
              >
                <Pressable
                  style={[
                    styles.button,
                    styles.buttonClose,
                    { marginRight: 30 },
                  ]}
                  label="Hide modal"
                  onPress={toggleModal}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonSubmit]}
                  label="Submit"
                  title="Submit"
                  onPress={methods.handleSubmit(onSubmit, onError)}
                >
                  <Text style={styles.textStyle}>Submit</Text>
                </Pressable>
              </View>
              <Pressable
                activeOpacity={0.5}
                onPress={handleDocumentSelection}
                style={{ marginTop: 10 }}
              >
                <Text
                  style={{ color: "blue", textDecorationLine: "underline" }}
                >
                  Add file Exce
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={{
            right: "50%",
            backgroundColor: "#C81A15",
            padding: 15,
            borderRadius: "50%",
          }}
          onPress={() => navigation.navigate("ScreenCamera")}
        >
          <View
            style={{
              textAlign: "center",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <Feather name="camera" size={30} color="white" />
          </View>
        </Pressable>
      </View>

      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <DatePicker
            style={{}}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            minDate="01-01-2022"
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                right: -5,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderColor: "gray",
                alignItems: "flex-start",
                borderWidth: 0,
                borderBottomWidth: 1,
              },
              placeholderText: {
                fontSize: 17,
                color: "gray",
                fontFamily: "Poppins-Regular",
              },
              dateText: {
                fontSize: 17,
                fontFamily: "Poppins-Medium",
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />

          <View
            style={{ flexDirection: "column", marginTop: 3, paddingLeft: 90 }}
          >
            <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium" }}>
              Total Students
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 13,
                fontFamily: "Poppins-Medium",
              }}
            >
              3
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>{render}</View>
      </View>
    </View>
  );
};

export default Attendance;
