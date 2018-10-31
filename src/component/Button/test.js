
import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

describe('Component - Button', () => {
  test('renders a button element', () => {
    const component = renderer.create(
      <Button text="Go"/>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});


/* */
