import React, { Component } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Pages } from "./src/types/Navigation"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen,DetailScreen } from "./src/screens"

const Stack = createStackNavigator<Pages>()

export default class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Pokedex",
              headerStyle: { backgroundColor: "#CC0000" },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{
              title: "Pokedex",
              headerStyle: { backgroundColor: "#CC0000" },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

