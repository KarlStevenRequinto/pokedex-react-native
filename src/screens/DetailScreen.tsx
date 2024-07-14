// HomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pages } from '../types/Navigation';


export interface DetailScreenProps extends NativeStackScreenProps<Pages, "DetailScreen"> {}

export default class DetailScreen extends Component<DetailScreenProps> {
  constructor(props: DetailScreenProps) {
    super(props)
  }
  render() {
    const { route } = this.props;
    const { pokemonId } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the DetailScreen</Text>
        <Text>{pokemonId}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
    color: 'gray',
  },
});
