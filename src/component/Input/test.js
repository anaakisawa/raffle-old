import React from 'react';
import Input from './index';
import renderer from 'react-test-renderer';

describe('Component - App', () => {
  test('renders an input element', () => {
    const component = renderer.create(
      <Input/>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
