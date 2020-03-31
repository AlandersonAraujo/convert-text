import * as React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

//text-height - FontAwesome - Case
//font - FontAwesome - Title
//sort-alpha-asc - FontAwesome - AlphabeticalOrder

const Drawer = createDrawerNavigator();

import Case from "./pages/Case";
import TitleCase from "./pages/TitleCase";
import AlphabeticalOrder from "./pages/AlphabeticalOrder";
import LocateReplace from "./pages/LocateReplace";

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Case"
        drawerStyle={{ backgroundColor: "#181b22" }}
        drawerContentOptions={{
          inactiveTintColor: "#fff"
        }}
      >
        <Drawer.Screen name="Uppercase / Lowercase" component={Case} />
        <Drawer.Screen name="Title Case" component={TitleCase} />
        <Drawer.Screen
          name="Alphabetical Order"
          component={AlphabeticalOrder}
        />
        <Drawer.Screen name="Locate and Replace" component={LocateReplace} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
