import React from "react";
import { View, Image } from "react-native";

import filledBall from "@assets/images/filled_ball.png";
import unfilledBall from "@assets/images/unfilled_ball.png";

import styles from "./styles.js";

export const Stepper = ({ step }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
    </View>
  );
};
