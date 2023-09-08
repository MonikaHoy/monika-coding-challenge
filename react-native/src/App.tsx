import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "./CameraScreen";
import HomeScreen from "./HomeScreen";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_900Black, Roboto_400Regular } from "@expo-google-fonts/roboto";

export type StackParamList = {
  Home: undefined;
  Camera: undefined;
};

const Stack = createStackNavigator<StackParamList>();
const store = configureStore();

export default () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
