import { View, Text, StyleSheet } from "react-native"
import React, { Component } from "react"

interface Props {
  title: string
  value: string | number
  unit: string
}

export default class StatsComponent extends Component<Props> {
  render() {
    const { title, value, unit } = this.props

    return (
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>{title.toUpperCase()}</Text>
        <View style={styles.textComponentContainer}>
          <Text style={styles.textComponent}>{value} </Text>
          <Text style={styles.textComponent}>{unit}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statsContainer: {

  },
  statsTitle: {
    fontSize: 16,
    color: "#65676b",
    marginVertical: 4,
  },
  textComponentContainer: {
    padding: 8,
    borderRadius: 12,
    width: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#949599"
  },
  textComponent: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
