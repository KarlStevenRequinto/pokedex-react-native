import React, { Component } from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Pages } from "../types/Navigation"
import { Pokemon, PokemonDetails } from "../types/Pokemon"
import PokemonItem from "../components/common/PokemonItem"
import { getPokemonList } from "../api"

export interface HomeScreenProps
  extends NativeStackScreenProps<Pages, "HomeScreen"> {}

export interface State {
  currentUrl: string | null
  pokemonList: PokemonDetails[]
}

export default class HomeScreen extends Component<HomeScreenProps, State> {
  state: State = {
    currentUrl: null,
    pokemonList: [],
  }

  componentDidMount() {
    this.loadPokemonList()
  }

  loadPokemonList = async () => {
    try {
      const data = await getPokemonList()
      this.setState({ pokemonList: data })
    } catch (error) {
      console.error("Error loading Pokémon list:", error)
    }
  }

  navigateToDetailScreen = (pokemon:PokemonDetails) => {
    this.props.navigation.navigate("DetailScreen", { pokemon })
  }

  renderItem = ({ item }: { item: any }) => {
    return (
      <PokemonItem
        onPress={() => this.navigateToDetailScreen(item)}
        pokemonName={item.name}
        pokemonTypes={item.types}
        pokemonId={item.id}
        pokemonImg={item.defaultImage}>
      </PokemonItem>
    )
  }

  render() {
    const { pokemonList } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={pokemonList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name}
          style={styles.flatListContainer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 80,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
    color: "gray",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
  },
})
