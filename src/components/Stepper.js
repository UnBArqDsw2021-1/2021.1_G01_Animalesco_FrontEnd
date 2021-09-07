import React, { useState } from "react";
import { View, Image } from "react-native";

import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

import filledBall from "../../assets/images/filled_ball.png";
import unfilledBall from "../../assets/images/unfilled_ball.png";

const Stepper = ({ step }) => {
  return (
    <View style={styles.container}>
      {step === 1 ? (
        <Image source={filledBall} />
      ) : (
        <Image source={unfilledBall} />
      )}
      {step === 2 ? (
        <Image source={filledBall} />
      ) : (
        <Image source={unfilledBall} />
      )}
      {step === 3 ? (
        <Image source={filledBall} />
      ) : (
        <Image source={unfilledBall} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

export default Stepper;
