import * as React from "react";
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
import ButtonClass from "../components/ButtonClass";
import styles from "../styles/listclass";
import colors from "../../config/colors";
import {
  faAngleDoubleRight,
  faC,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectAllListClass } from "../features/listclass/listclassSlice";
import { useState, useEffect, useCallback } from "react";
import Modal from "react-native-modal";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { TextInput } from "../components/common/TextInput";

import DocumentPicker from "react-native-document-picker";

const current = new Date().toLocaleDateString("en-GB");

const DATA = [
  {
    title: "Synonyms & Antonyms",
    major: "English",
    date: current,
    status: false,
  },
  { title: "OOP", major: "Science", date: current, status: true },
  {
    title: "Solar Sytem",
    major: "Science",
    date: current,
    status: false,
  },
  {
    title: "Security System",
    major: "Science",
    date: current,
    status: false,
  },
  { title: "Solar Sytem", major: "Science", date: current, status: true },
  {
    title: "Data structor",
    major: "Science",
    date: current,
    status: false,
  },
];

//https://blog.logrocket.com/picking-files-react-native-apps-using-react-native-document-picker/
const ListClass = ({ navigation }) => {
  const classList = useSelector(selectAllListClass);

  const [date, setDate] = useState(new Date());

  const [isModalVisible, setModalVisible] = useState(false);

  const [singleFile, setSingleFile] = useState("");
  const [multipleFile, setMultipleFile] = useState([]);

  const [fileResponse, setFileResponse] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { ...methods } = useForm();

  const onSubmit = (data) => console.log(data);

  const onError = (errors, e) => {
    return console.log(errors);
  };

  // File
  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log("res: " + JSON.stringify(res));
      console.log("URI: " + res.uri);
      console.log("Type: " + res.type);
      console.log("File Name: " + res.name);
      console.log("File Size: " + res.size);

      setSingleFile(res);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        alert("Error import File");
      } else {
        alert("Unkown Error: " + JSON.stringify(error));
        throw error;
      }
    }
  };

  const selectMultipleFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      for (const res of results) {
        console.log("res: " + JSON.stringify(res));
        console.log("URI: " + res.uri);
        console.log("Type: " + res.type);
        console.log("File Name: " + res.name);
        console.log("File Size: " + res.size);
      }

      setMultipleFile(results);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        alert("Error import File");
      } else {
        alert("Unkown Error: " + JSON.stringify(error));
        throw error;
      }
    }
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

  const rederClass = ({ item }) => (
    <ButtonClass
      title={item.title}
      major={item.major}
      navigation={navigation}
      date={item.date}
      attend={item.status}
    />
  );

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.listclass}>
            <Text
              style={{
                color: colors.primary,
                marginTop: "auto",
                marginBottom: "auto",
                fontFamily: "Poppins-Medium",
              }}
            >
              List Class of Week
            </Text>
          </View>

          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  color: colors.gray,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Current Week
              </Text>

              <View
                style={{
                  backgroundColor: colors.gray,
                  height: 0.1,
                  width: 250,
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.btnAddCourse}
              title="Show modal"
              onPress={toggleModal}
              underlayColor="#fff"
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Add Course
              </Text>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>

                  <FormProvider {...methods}>
                    <TextInput
                      name="email"
                      label="Email"
                      placeholder="jon.doe@email.com"
                      keyboardType="email-address"
                      rules={{ required: "Email is required!" }}
                    />
                    <TextInput
                      name="password"
                      label="Password"
                      placeholder="Password"
                      secureTextEntry
                      rules={{ required: "Password is required!" }}
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

            <FlatList
              style={{ marginTop: 5, width: "100%" }}
              data={classList}
              renderItem={rederClass}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListClass;
