export interface Pokemon {
  name: string
  url: string
}
export interface PokemonDetails {
  name: string
  url: string
  types: Array<{ slot: number; type: { name: string; url: string } }>
  id: number
  defaultImage: string
  height: number
  weight: number
  artWorkImage: string
}
export interface PokemonSpecies{
  happiness: number
  habitat:string
  description:string
}
export interface SvgProps {
  width: number
  height: number
  fill: string
  isGradient: boolean
}


export interface PokemonItemProps {
  onPress: () => void
  pokemonName: string
  pokemonTypes: { slot: number; type: { name: string } }[]
  pokemonId: string
  pokemonImg: string
}