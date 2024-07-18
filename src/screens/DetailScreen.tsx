// HomeScreen.tsx
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Pages } from "../types/Navigation"
import { PokemonSpecies } from "../types/Pokemon"
import { getPokemonSpecies } from "../api"
import { capitalizeFirstLetter, getColor } from "../utils"
import { LinearGradient } from "expo-linear-gradient"
import StatsComponent from "../components/common/StatsItem"
export interface DetailScreenProps
  extends NativeStackScreenProps<Pages, "DetailScreen"> {}
interface State {
  speciesData: PokemonSpecies | null
}
export default class DetailScreen extends Component<DetailScreenProps, State> {
  state: State = {
    speciesData: null,
  }

  async componentDidMount() {
    const { route } = this.props
    const { pokemon } = route.params

    try {
      const speciesData = await getPokemonSpecies(pokemon.id)
      this.setState({ speciesData })
      console.log(speciesData)
    } catch (error) {
      console.error("Error fetching Pokémon species:", error)
    }
  }

  constructor(props: DetailScreenProps) {
    super(props)
  }
  render() {
    const { route } = this.props
    const { pokemon } = route.params
    const { speciesData } = this.state

    const colorType = getColor(pokemon.types)
    const gradientColors = [colorType, "#fff"]
    const pokeName = capitalizeFirstLetter(pokemon.name)
    const stats = [
      { title: "weight", unit: "kg", value: pokemon.weight },
      { title: "height", unit: "m", value: pokemon.height },
      { title: "happiness", unit: null, value: speciesData?.happiness },
      { title: "habitat", unit: null, value: speciesData?.habitat },
    ]
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {Platform.OS === "web" ? (
          <View
            style={[
              styles.halfCircleContainer,
              { backgroundColor: colorType },
            ]}>
            <LinearGradient
              locations={[0.5, 1]}
              colors={gradientColors}
              style={styles.halfCircle}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0.8 }}
            />
          </View>
        ) : (
          <View
            style={[styles.halfCircleContainer, { backgroundColor: colorType }]}
          />
        )}

        <Image source={{ uri: pokemon.artWorkImage }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.pokemonName}>{pokeName}</Text>
          <Text style={styles.pokemonOrder}>
            N{"\u00B0"}
            {String(pokemon.id).padStart(3, "0")}
          </Text>

          <Text style={styles.description}>
            {speciesData &&
              speciesData.description
                .replace(/\\[n|f]/g, " ")
                .replace(/\s+/g, " ")
                .trim()}
          </Text>

          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <StatsComponent
                  title={stat.title}
                  value={stat.value ?? "N/A"}
                  unit={stat.unit ? stat.unit : ""}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  detailsContainer: {
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    color: "gray",
  },

  pokemonOrder: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  description: {
    color: "#2c3e50",
    fontSize: 18,
    marginVertical: 8,
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: "contain",
    marginBottom: 16,
    position: "absolute",
    top: 0,
  },
  halfCircle: {
    position: "absolute",
    top: -260,
    width: 500,
    height: 500,
    borderRadius: 250,
  },
  halfCircleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  statItem: {
    width: '48%',
    marginVertical: 5,
  },
})
