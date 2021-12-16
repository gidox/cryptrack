import * as React from "react";
import { NavigationContainer as NContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/Home";
import { View, Text } from "react-native";

export type RootBottomParamList = {
  Home: undefined;
  Transactions: undefined;
  Account: undefined;
};

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator<RootBottomParamList>();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TabNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: "#F21CC8",
    }}
  >
    <Screen name="Transactions" component={SettingsScreen} />
    <Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Screen name="Account" component={SettingsScreen} />
  </Navigator>
);
export function NavigationContainer() {
  return (
    <NContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NContainer>
  );
}
