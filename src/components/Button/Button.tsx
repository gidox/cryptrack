import React from "react";
import { Button as RNButton } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: ButtonProps): JSX.Element {
  return <RNButton title={title} onPress={onPress} />;
}
