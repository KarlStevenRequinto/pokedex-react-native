import React from "react"
import renderer from "react-test-renderer"
import PokemonItem from "../../../components/common/PokemonItem"
import { StyleSheet } from 'react-native';

jest.mock("../../utils", () => ({
  capitalizeFirstLetter: jest.fn().mockImplementation((text: string) => text),
  getColor: jest.fn().mockImplementation(() => "red"),
}))

const mockPokemon = {
  pokemonName: "pikachu",
  pokemonTypes: [{ slot: 1, type: { name: "electric" } }],
  pokemonId: "25",
  pokemonImg: "http://example.com/pikachu.png",
}

describe("PokemonItem", () => {
  it("should render correctly with given props", () => {
    const component = renderer.create(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should match the snapshot for given props", () => {
    const component = renderer.create(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it("should render correctly with multiple Pokémon types", () => {
    const mockPokemon = {
      pokemonName: "charizard",
      pokemonTypes: [
        { slot: 1, type: { name: "fire" } },
        { slot: 2, type: { name: "flying" } },
      ],
      pokemonId: "6",
      pokemonImg: "http://example.com/charizard.png",
    }

    const component = renderer.create(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should handle missing Pokémon image gracefully", () => {
    const mockPokemon = {
      pokemonName: "bulbasaur",
      pokemonTypes: [{ slot: 1, type: { name: "grass" } }],
      pokemonId: "1",
      pokemonImg: "",
    }

    const component = renderer.create(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should apply the correct background color based on Pokémon type", () => {
    const mockPokemon = {
      pokemonName: "squirtle",
      pokemonTypes: [{ slot: 1, type: { name: "water" } }],
      pokemonId: "7",
      pokemonImg: "http://example.com/squirtle.png",
    }

    const component = renderer.create(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />,
    )

    const tree = component.toJSON()
    const backgroundColor = tree.children[2].props.style.backgroundColor
    expect(backgroundColor).toBe("blue")
  })

  it('should handle invalid image URL gracefully', () => {
    const mockPokemon = {
      pokemonName: 'jigglypuff',
      pokemonTypes: [{ slot: 1, type: { name: 'normal' } }],
      pokemonId: '39',
      pokemonImg: 'invalid-url'
    };
  
    const component = renderer.create(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
})
