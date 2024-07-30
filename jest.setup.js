global.__DEV__ = true;

jest.mock('react-native-svg', () => {
    const React = require('react');
    const mockComponent = (name) => {
      return class extends React.Component {
        render() {
          return React.createElement(name, this.props, this.props.children);
        }
      };
    };
  
    return {
      Svg: mockComponent('Svg'),
      Path: mockComponent('Path'),
      Defs: mockComponent('Defs'),
      LinearGradient: mockComponent('LinearGradient'),
      Stop: mockComponent('Stop'),
    };
  });