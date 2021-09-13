import React from "react";
import { View, Image } from "react-native";

import filledBall from "@assets/images/filled_ball.png";
import unfilledBall from "@assets/images/unfilled_ball.png";

import styles from "./styles.js";

export const Stepper = ({ nuSteps, step }) => {
  const numberOfSteps = [];
  for (let i = 0; i < nuSteps; i++) {
    numberOfSteps.push(i + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {numberOfSteps.map((element) =>
          step === element ? (
            <Image source={filledBall} />
          ) : (
            <Image source={unfilledBall} />
          )
        )}
      </View>
    </View>
  );
};
