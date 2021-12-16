import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@navigation/NavigationContainet";
import { customTheme } from "@theme";
import { DripsyProvider, makeTheme } from "dripsy";

const theme = makeTheme(customTheme);

type MyTheme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends MyTheme {}
}

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <NavigationContainer />
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
