import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen, { HomeScreenProps } from '../screens/HomeScreen';
import { getPokemonList } from '../api';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('../api');

describe('HomeScreen', () => {
  let props: HomeScreenProps;
  let component: any;

  beforeEach(() => {
    props = {
      navigation: { navigate: jest.fn() },
      route: { params: {} },
    } as any;
    component = shallow(
      <NavigationContainer>
        <HomeScreen {...props} />
      </NavigationContainer>
    );
  });

  it('fetches and displays Pokémon list', async () => {
    (getPokemonList as jest.Mock).mockResolvedValue([
      { name: 'bulbasaur', types: [{ type: { name: 'grass' } }], id: 1, defaultImage: 'image_url' },
    ]);

    await component.instance().loadPokemonList();

    expect(getPokemonList).toHaveBeenCalledTimes(1);
    expect(component.state('pokemonList')).toEqual([
      { name: 'bulbasaur', types: [{ type: { name: 'grass' } }], id: 1, defaultImage: 'image_url' },
    ]);
  });

  it('navigates to DetailScreen on item press', () => {
    const mockPokemon = { name: 'bulbasaur', types: [{ type: { name: 'grass' } }], id: 1, defaultImage: 'image_url' };
    component.setState({ pokemonList: [mockPokemon] });

    const pokemonItem = component.find('PokemonItem').at(0);
    pokemonItem.props().onPress();

    expect(props.navigation.navigate).toHaveBeenCalledWith('DetailScreen', { pokemon: mockPokemon });
  });
});
