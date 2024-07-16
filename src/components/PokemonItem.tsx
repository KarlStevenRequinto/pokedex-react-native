import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { pokemonColors } from "../styles/colors"
import { BugSvg } from "./svg/BugSvg";
import { GrassSvg } from "./svg/GrassSvg";
interface PokemonItemProps {
  onPress: () => void
  pokemonName: string
  pokemonTypes: { slot: number; type: { name: string } }[]
  pokemonId: string
  pokemonImg: string
}
type PokemonColorKeys = keyof typeof pokemonColors

class PokemonItem extends Component<PokemonItemProps> {
  getColorType = () => {
    const { pokemonTypes } = this.props
    if (pokemonTypes.length > 0) {
      const firstType = pokemonTypes[0].type.name as PokemonColorKeys
      return pokemonColors[firstType] || pokemonColors.default_dark
    }
    return pokemonColors.default_dark
  }

  render() {
    const { onPress, pokemonName, pokemonTypes, pokemonId, pokemonImg } =
      this.props
    // console.log(pokemonTypes)
    const colorType = this.getColorType()
    const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.pokemonNumber}>
          N{"\u00B0"}
          {String(pokemonId).padStart(3, "0")}
        </Text>
        <Text style={styles.pokemonName}>
          {capitalizeFirstLetter(pokemonName)}
        </Text>
        <View style={[styles.imgContainer, { backgroundColor: colorType }]}>
          <Image source={{ uri: pokemonImg }} style={styles.pokemonImage} />
        </View>

        <View style={styles.pokemonTypesContainer}>
          {pokemonTypes.map((item, index) => {
            const backgroundColor =
              pokemonColors[item.type.name as keyof typeof pokemonColors] ||
              pokemonColors.default_dark
            return (
              <View
                style={[
                  styles.typeContainer,
                  { backgroundColor: backgroundColor },
                ]}
                key={index}>
                  <GrassSvg/>
                <Text>{capitalizeFirstLetter(item.type.name)}</Text>
              </View>
            )
          })}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    width: "100%",
    minWidth:200,
    height: 120,
    borderRadius: 22,
    marginVertical: 4,
    overflow: "hidden",
  },
  imgContainer: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: "100%",
    width: 120,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  pokemonNumber: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  pokemonName: {
    color: "black",
    fontWeight:"700",
    fontSize:20,
    backgroundColor:"pink",
    position:"absolute",
    left: 14,
  },
  typeContainer: {
    padding:4,
    marginHorizontal:4,
    borderRadius:18,
    flexDirection:"row"
  },
  pokemonTypesContainer:{
    position:"absolute",
    bottom:14,
    left:14,
    flexDirection:"row",
    width:"100%"
  }
})

export default PokemonItem
