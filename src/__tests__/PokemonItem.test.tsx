import React from "react"
import { shallow } from "enzyme"
import PokemonItem from "../components/common/PokemonItem"
import { getColor, capitalizeFirstLetter } from "../utils"
import { pokemonColors } from "../styles/colors"

jest.mock("../utils", () => ({
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
    const wrapper = shallow(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemon.pokemonName}
        pokemonTypes={mockPokemon.pokemonTypes}
        pokemonId={mockPokemon.pokemonId}
        pokemonImg={mockPokemon.pokemonImg}
      />,
    )

    expect(wrapper.find("Text").at(0).props().children).toContain("25")
    expect(wrapper.find("Text").at(1).props().children).toContain("pikachu")
  })

  it("should render correctly with multiple Pokémon types", () => {
    const mockPokemonMultipleTypes = {
      pokemonName: "charizard",
      pokemonTypes: [
        { slot: 1, type: { name: "fire" } },
        { slot: 2, type: { name: "flying" } },
      ],
      pokemonId: "6",
      pokemonImg: "http://example.com/charizard.png",
    }

    const wrapper = shallow(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemonMultipleTypes.pokemonName}
        pokemonTypes={mockPokemonMultipleTypes.pokemonTypes}
        pokemonId={mockPokemonMultipleTypes.pokemonId}
        pokemonImg={mockPokemonMultipleTypes.pokemonImg}
      />,
    )

    expect(wrapper.find("Text").at(0).props().children).toContain("6")
    expect(wrapper.find("Text").at(1).props().children).toContain("charizard")
    expect(wrapper.find("Text").at(2).props().children).toContain("fire")
    expect(wrapper.find("Text").at(3).props().children).toContain("flying")
  })

  it("should handle missing Pokémon image gracefully", () => {
    const mockPokemonMissingImage = {
      pokemonName: "bulbasaur",
      pokemonTypes: [{ slot: 1, type: { name: "grass" } }],
      pokemonId: "1",
      pokemonImg: "",
    }

    const wrapper = shallow(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemonMissingImage.pokemonName}
        pokemonTypes={mockPokemonMissingImage.pokemonTypes}
        pokemonId={mockPokemonMissingImage.pokemonId}
        pokemonImg={mockPokemonMissingImage.pokemonImg}
      />,
    )

    expect(wrapper.find("Image").exists()).toBe(false)
  })

  it("should apply the correct background color based on Pokémon type", () => {
    const mockPokemonColor = {
      pokemonName: "squirtle",
      pokemonTypes: [{ slot: 1, type: { name: "water" } }],
      pokemonId: "7",
      pokemonImg: "http://example.com/squirtle.png",
    }

    const wrapper = shallow(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemonColor.pokemonName}
        pokemonTypes={mockPokemonColor.pokemonTypes}
        pokemonId={mockPokemonColor.pokemonId}
        pokemonImg={mockPokemonColor.pokemonImg}
      />,
    )

    const imgContainer = wrapper.find("View").at(1).props().style

    if (Array.isArray(imgContainer)) {
      const backgroundColor = imgContainer.find(
        (style) => style.backgroundColor,
      )?.backgroundColor
      expect(backgroundColor).toBe(pokemonColors.water)
    } else {
      throw new Error(
        "Style is not an array or does not contain backgroundColor",
      )
    }
  })

  it('should handle invalid image URL gracefully', () => {
    const mockPokemonInvalidImg = {
      pokemonName: 'jigglypuff',
      pokemonTypes: [{ slot: 1, type: { name: 'normal' } }],
      pokemonId: '39',
      pokemonImg: 'invalid-url'
    };
  
    const wrapper = shallow(
      <PokemonItem
        onPress={() => {}}
        pokemonName={mockPokemonInvalidImg.pokemonName}
        pokemonTypes={mockPokemonInvalidImg.pokemonTypes}
        pokemonId={mockPokemonInvalidImg.pokemonId}
        pokemonImg={mockPokemonInvalidImg.pokemonImg}
      />
    );
  
    const imageProps = wrapper.find('Image').props() as any;
    expect(imageProps.source.uri).toBe('invalid-url');
  });
  
})
