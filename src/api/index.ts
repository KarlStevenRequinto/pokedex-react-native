import axios from "axios"
import { Pokemon, PokemonDetails, PokemonSpecies } from "../types/Pokemon"
const BASE_URL_POKEMONLIST = "https://pokeapi.co/api/v2"

export const getPokemonList = async (): Promise<PokemonDetails[]> => {
  try {
    const response = await axios.get(`${BASE_URL_POKEMONLIST}/pokemon`)
    const pokemonList: Pokemon[] = response.data.results

    const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
      const detailsResponse = await axios.get(pokemon.url)
      const { front_default } = detailsResponse.data.sprites
      const speciesUrl = detailsResponse.data.species.url
      const { types, id, height, weight } = detailsResponse.data

      return {
        name: pokemon.name,
        url: pokemon.url,
        types: types,
        id: id,
        defaultImage: front_default,
        height: height,
        weight: weight,
        speciesUrl: speciesUrl,
      }
    })

    const detailedPokemonList = await Promise.all(pokemonDetailsPromises)
    return detailedPokemonList
  } catch (error) {
    console.error("Error fetching Pokémon list:", error)
    throw error
  }
}

export const getPokemonSpecies = async (
  id: number,
): Promise<PokemonSpecies> => {
  try {
    const response = await axios.get(
      `${BASE_URL_POKEMONLIST}/pokemon-species/${id}/`,
    )
    const { base_happiness, capture_rate, evolution_chain, habitat } =
      response.data
    return {
      happiness: base_happiness,
      captureRate: capture_rate,
      evolutionUrl: evolution_chain.url,
      habitat: habitat.name,
    }
  } catch (error) {
    console.error("Error fetching Pokémon species:", error)
    throw error
  }
}
