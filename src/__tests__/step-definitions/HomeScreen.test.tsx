import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { defineFeature, loadFeature } from "jest-cucumber";
import { HomeScreen } from "../../screens";
import PokemonItem from "../../components/common/PokemonItem";
import { getPokemonList } from "../../api";

jest.mock("../../api", () => ({
  getPokemonList: jest.fn(),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

const feature = loadFeature("./src/__tests__/features/HomeScreen.feature");

defineFeature(feature, (test) => {
  let wrapper: ShallowWrapper;
  let instance: HomeScreen;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    const props = {
      navigation: mockNavigation,
      route: {},
    } as any;

    wrapper = shallow(<HomeScreen {...props} />);
    instance = wrapper.instance() as HomeScreen;
  });

  test("Displaying a list of Pokemon", ({ given, when, then }) => {
    given("I am on the Home screen", () => {
      // No specific setup required here
    });

    when("the list of Pokemon is loaded", async () => {
      (getPokemonList as jest.Mock).mockResolvedValue(
        Array.from({ length: 20 }, (_, i) => ({
          name: `Pokemon ${i}`,
          types: [],
          id: i,
          defaultImage: `image${i}`,
        }))
      );
      await instance.loadPokemonList();
      wrapper.update();
      console.log(instance.state.pokemonList);
    });

    then("I should see 20 Pokemon items", () => {
      expect(wrapper.find(PokemonItem)).toHaveLength(20);
    });
  });

  test("Navigating to DetailScreen", ({ given, when, then }) => {
    given("I am on the Home screen", async () => {
      (getPokemonList as jest.Mock).mockResolvedValue(
        Array.from({ length: 20 }, (_, i) => ({
          name: `Pokemon ${i}`,
          types: [],
          id: i,
          defaultImage: `image${i}`,
        }))
      );
      await instance.loadPokemonList();
      wrapper.update();
    });

    when("I tap on a Pokemon item", () => {
      wrapper.find(PokemonItem).first().simulate("press");
    });

    then("I should navigate to the Detail screen", () => {
      expect(mockNavigation.navigate).toHaveBeenCalledWith("DetailScreen", {
        pokemon: {
          name: "Pokemon 0",
          types: [],
          id: 0,
          defaultImage: "image0",
        },
      });
    });
  });
});
