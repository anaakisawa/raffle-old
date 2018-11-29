import React from 'react';
import Department from './index';
import renderer from 'react-test-renderer';

describe('Component - Select', () => {
  test('renders a department selection element', () => {
    const component = renderer.create(
      <Department options/>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
