import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import SettingsScreen from "../screens/SettingsScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import SingleExerciseScreen from "../screens/SingleExerciseScreen";
import RegisterMaxScreen from "../screens/RegisterMaxScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import KitchenScreen from "../screens/KitchenScreen";
import WeeksScreen from "../screens/WeeksScreen";

const HomeStack = createStackNavigator(
  {
    Main: createStackNavigator(
      {
        Exercises: ExercisesScreen,
        Settings: SettingsScreen,
        Weeks: WeeksScreen,
        SingleExercise: SingleExerciseScreen,
        Kitchen: KitchenScreen
      },
      {
        initialRouteName: "Weeks"
      }
    ),
    Register: RegisterMaxScreen,
    Workout: WorkoutScreen
  },
  {
    initialRouteName: "Main",
    mode: "modal",
    headerMode: "none"
  }
);
export default HomeStack;
