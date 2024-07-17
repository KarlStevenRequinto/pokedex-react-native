// HomeScreen.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pages } from '../types/Navigation';
import { PokemonSpecies } from '../types/Pokemon';
import { getPokemonSpecies } from '../api';

export interface DetailScreenProps extends NativeStackScreenProps<Pages, "DetailScreen"> {}
interface State {
  speciesData: PokemonSpecies | null
}
export default class DetailScreen extends Component<DetailScreenProps,State> {
  state: State = {
    speciesData: null,
  }

  async componentDidMount() {
    const { route } = this.props;
    const { pokemon } = route.params;

    try {
      const speciesData = await getPokemonSpecies(pokemon.id)
      this.setState({ speciesData })
      console.log(speciesData )
    } catch (error) {
      console.error("Error fetching Pokémon species:", error)
    }
  }

  constructor(props: DetailScreenProps) {
    super(props)
  }
  render() {
    const { route } = this.props;
    const { pokemon } = route.params;
    console.log(pokemon.id)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the DetailScreen</Text>

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
