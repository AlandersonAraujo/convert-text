import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

import Case from "./pages/Case";

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Case"
        drawerStyle={{ backgroundColor: "#181b22" }}
      >
        <Drawer.Screen name="Uppercase / Lowercase" component={Case} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
