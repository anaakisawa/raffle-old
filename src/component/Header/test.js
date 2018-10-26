
import React from 'react';
import Header from './index';
import renderer from 'react-test-renderer';

describe('Component - Header', () => {
  test('renders a text element', () => {
    const component = renderer.create(
      <Header text="it works"/>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
