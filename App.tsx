import React, { Component } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Pages } from "./src/types/Navigation"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen, DetailScreen } from "./src/screens"
import { View, StyleSheet, Dimensions } from "react-native"

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
            component={(props) => (
              <View style={styles.screenContainer}>
                <HomeScreen {...props} />
              </View>
            )}
            options={{
              title: "Pokedex",
              headerStyle: { backgroundColor: "#65676b" },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="DetailScreen"
            component={(props) => (
              <View style={styles.screenContainer}>
                <DetailScreen {...props} />
              </View>
            )}
            options={{
              title: "Pokedex",
              headerStyle: { backgroundColor: "#65676b" },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const screenWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: screenWidth > 400 ? 400 : "100%",
    alignSelf: "center",
    minWidth: 380
  },
})

