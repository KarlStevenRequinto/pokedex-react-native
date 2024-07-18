// src/utils/utils.ts

import { pokemonColors } from "../styles/colors"

type PokemonColorKeys = keyof typeof pokemonColors

export const getColor = (
  pokemonTypes: { slot: number; type: { name: string } }[],
): string => {
  if (pokemonTypes) {
    // const firstType = pokemonTypes[0].type.name as PokemonColorKeys;
    if (pokemonTypes.length > 0) {
      const firstType = pokemonTypes[0].type.name as PokemonColorKeys
      return pokemonColors[firstType] || pokemonColors.default_dark
    }
    console.log(pokemonTypes)
  }
  return pokemonColors.default_dark
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
