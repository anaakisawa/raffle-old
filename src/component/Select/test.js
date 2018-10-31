import React from 'react';
import Select from './index';
import renderer from 'react-test-renderer';

describe('Component - Select', () => {
  test('renders a dropdown element', () => {
    const options = ['auto','vip','tecnologia'];
    const component = renderer.create(
      <Select options={options}/>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
