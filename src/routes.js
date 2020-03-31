import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

import Case from "./pages/Case";
import TitleCase from "./pages/TitleCase";

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="TitleCase"
        drawerStyle={{ backgroundColor: "#181b22" }}
      >
        <Drawer.Screen name="Title Case" component={TitleCase} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
