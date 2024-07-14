import axios from "axios"
import { Pokemon, PokemonDetails } from "../types/Pokemon"
const BASE_URL_POKEMONLIST = "https://pokeapi.co/api/v2"

export const getPokemonList = async (): Promise<PokemonDetails[]> => {
  try {
    const response = await axios.get(`${BASE_URL_POKEMONLIST}/pokemon`)
    const pokemonList: Pokemon[] = response.data.results

    const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
      const detailsResponse = await axios.get(pokemon.url)
      const { front_default } = detailsResponse.data.sprites
      const { types, id } = detailsResponse.data
      return {
        name: pokemon.name,
        url: pokemon.url,
        types,
        id,
        defaultImage: front_default,
      }
    })

    const detailedPokemonList = await Promise.all(pokemonDetailsPromises)
    return detailedPokemonList
  } catch (error) {
    console.error("Error fetching Pokémon list:", error)
    throw error
  }
}
