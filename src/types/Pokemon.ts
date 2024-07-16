export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetails {
  name: string
  url: string
  types: Array<{ slot: number; type: { name: string; url: string } }>
}

export interface SvgProps {
  width: number
  height: number
  fill: string
  isGradient:boolean
}

