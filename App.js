import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Account from "./src/screens/Account";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import TrackCreate from "./src/screens/TrackCreate";
import TrackDetail from "./src/screens/TrackDetail";
import TrackList from "./src/screens/TrackList";

const swithNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup,
    Signin
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList,
      TrackDetail
    }),
    TrackCreate,
    Account
  })
});

export default createAppContainer(swithNavigator);
