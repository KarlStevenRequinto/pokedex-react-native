import React, { Component } from "react";
import { PokemonDetails } from "../types/Pokemon";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native"

interface PokemonItemProps {
  onPress: ()=>void,
  pokemonName: string,
  pokemonTypes: PokemonDetails["types"],
  pokemonId:string,
  pokemonImg:string
}

class PokemonItem extends Component<PokemonItemProps> {
  render() {
    const { onPress, pokemonName,pokemonTypes,pokemonId,pokemonImg  } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text>{pokemonId}</Text>
        <Text>{pokemonName}</Text>
        <View style={styles.imgContainer}>
          <Image source={{ uri: pokemonImg }} style={styles.pokemonImage} />
        </View>
        <View>
          {pokemonTypes.map((type) => (
            <Text key={type.slot}>{type.type.name}</Text>
          ))}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "100%",
    height: 100,
    borderRadius: 20,
    marginVertical: 4,
    overflow: "hidden",
  },
  imgContainer: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 10,
    height: "100%",
    width: 120,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain', 
  },
})

export default PokemonItem
