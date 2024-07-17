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
  speciesUrl:string
}
export interface PokemonSpecies{
  happiness: number
  captureRate: number
  evolutionUrl: string
  habitat:string
}
export interface SvgProps {
  width: number
  height: number
  fill: string
  isGradient: boolean
}
