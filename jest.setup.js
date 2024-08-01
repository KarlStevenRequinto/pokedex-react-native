global.__DEV__ = true;

jest.mock('react-native-svg', () => {
  const React = require('react');
  const mockComponent = (name) => {
    return (props) => React.createElement(name, props, props.children);
  };

  return {
    Svg: mockComponent('Svg'),
    Path: mockComponent('Path'),
    Defs: mockComponent('Defs'),
    LinearGradient: mockComponent('LinearGradient'),
    Stop: mockComponent('Stop'),
  };
});

// Mock expo-linear-gradient
jest.mock('expo-linear-gradient', () => {
  const React = require('react');
  const mockComponent = (name) => {
    return (props) => React.createElement(name, props, props.children);
  };

  return {
    LinearGradient: mockComponent('LinearGradient'),
  };
});

// Mock expo-modules-core
jest.mock('expo-modules-core', () => {
  return {
    NativeModulesProxy: {
      viewManagersNames: jest.fn(),
    },
    requireNativeViewManager: jest.fn(),
  };
});

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
