import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
// import Signup from "../screens/Signup";
// import Forgot from "../screens/Forgot";
// import Browse from "../screens/Browse";
// import Explore from "../screens/Explore";
// import Product from "../screens/Product";
// import Settings from "../screens/Settings";

import { theme } from "../constants";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        headerMode="none"
        screenOptions={{
          headerStyle: {},
          headerBackImage: <Image />,
          headerBackTitle: null,
          headerLeftContainerStyle: {},
          headerRightContainerStyle: {},
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
