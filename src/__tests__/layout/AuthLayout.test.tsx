import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AuthLayout from '../../modules/layout/components/AuthLayout';

describe('AuthLayout component', () => {
  const defaultProps = {
    content: false
  };

  test('renders AuthLayout successfully', () => {
    shallow(<AuthLayout {...defaultProps} />);
  });

  test('renders successfully with default value', () => {
    const wrapper = mount(<AuthLayout {...defaultProps} />);
    const props = wrapper.props();

    expect(props).toMatchObject(defaultProps);
  });

  test('snapshot matches', () => {
    const rendered = renderer.create(<AuthLayout {...defaultProps} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
