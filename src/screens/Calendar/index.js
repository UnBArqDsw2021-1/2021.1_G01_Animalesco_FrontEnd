import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import defaultStyles from "@screens/styles.js";

import { ModalRegister, Add, GoBackHeader } from "@components";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("yyyy-MM-DD")
  );
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={defaultStyles.page}>
      <GoBackHeader />
      <View style={styles.container}>
        <View style={styles.calendar}>
          <CalendarPicker
            allowRangeSelection={false}
            weekdays={["D", "S", "T", "Q", "Q", "S", "S"]}
            months={[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ]}
            previousTitle="Anterior"
            nextTitle="Próximo"
            todayBackgroundColor="#ccc"
            selectedDayColor="#F15A24"
            selectedDayTextColor="#000000"
            textStyle={{
              fontFamily: "Cochin",
              color: "#000000",
            }}
            onDateChange={setSelectedDate}
          />
          <ModalRegister visible={modalVisible} setVisible={setModalVisible} />
          <Add withoutFooter action={() => setModalVisible(true)} />
        </View>
        <View style={styles.hr}></View>
        <View style={styles.vetVisits}>
          <ScrollView>
            <Text>
              Dia selecionado: {`${moment(selectedDate).format("yyyy-MM-DD")}`}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
