import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { pokemonColors } from "../../styles/colors"
import SvgComponents from "../svg"
import { PokemonItemProps } from "../../types/Pokemon"
import { getColor } from "../../utils"
import { capitalizeFirstLetter } from "../../utils"
class PokemonItem extends Component<PokemonItemProps> {
  render() {
    const { onPress, pokemonName, pokemonTypes, pokemonId, pokemonImg } =
      this.props
    const colorType = getColor(pokemonTypes)

    const TypeIconBackground =
      pokemonTypes.length > 0
        ? SvgComponents[pokemonTypes[0].type.name as keyof typeof SvgComponents]
        : null

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
          {TypeIconBackground && (
            <View style={styles.typeBackgroundContainer}>
              <TypeIconBackground
                width={100}
                height={100}
                fill={colorType}
                isGradient={true}
              />
            </View>
          )}
          <Image source={{ uri: pokemonImg }} style={styles.pokemonImage} />
        </View>

        <View style={styles.pokemonTypesContainer}>
          {pokemonTypes.map((item, index) => {
            const backgroundColor =
              pokemonColors[item.type.name as keyof typeof pokemonColors] ||
              pokemonColors.default_dark
            const TypeIconComponent =
              SvgComponents[item.type.name as keyof typeof SvgComponents]
            return (
              <View
                style={[
                  styles.typeContainer,
                  { backgroundColor: backgroundColor },
                ]}
                key={index}>
                <View style={styles.svgContainer}>
                  {TypeIconComponent && (
                    <TypeIconComponent
                      width={20}
                      height={20}
                      fill={backgroundColor}
                      isGradient={false}
                    />
                  )}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.pokemonNameText}>
                    {item.type.name.charAt(0).toUpperCase() +
                      item.type.name.slice(1)}
                  </Text>
                </View>
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
    backgroundColor: "#ecf0f1",
    width: "100%",
    minWidth: 200,
    height: 120,
    borderRadius: 22,
    marginVertical: 4,
    overflow: "hidden",
    borderWidth:1,
    borderColor:"#65676b"
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
    left: 18,
    top: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  pokemonName: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
    position: "absolute",
    left: 18,
    top: 34,
  },
  typeContainer: {
    padding: 4,
    marginHorizontal: 4,
    borderRadius: 18,
    flexDirection: "row",
  },
  pokemonTypesContainer: {
    position: "absolute",
    bottom: 14,
    left: 14,
    flexDirection: "row",
    width: "100%",
  },
  svgContainer: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  pokemonNameText: {
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 18,
  },
  typeBackgroundContainer: {
    position: "absolute",
    padding: 6,
    borderRadius: 20,
    marginHorizontal: 6,
  },
})

export default PokemonItem
