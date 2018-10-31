
import React from 'react';
import Email from './index';
import renderer from 'react-test-renderer';

describe('Component - Email', () => {
  test('renders an email form', () => {
    const component = renderer.create(
      <Email/>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});


/* */
