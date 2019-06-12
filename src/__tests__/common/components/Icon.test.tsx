import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Icon from '../../../modules/common/components/Icon';

import * as renderer from 'react-test-renderer';

describe('Icon component', () => {
  const defaultProps = {
    icon: 'upload-1',
    size: 30,
    isActive: false
  };

  test('renders successfully', () => {
    shallow(<Icon {...defaultProps} />);
  });

  test('renders with default props', () => {
    const control = mount(<Icon {...defaultProps} />);
    const props = control.props();

    expect(props).toMatchObject(defaultProps);
  });

  test('snapshot matches', () => {
    const rendered = renderer.create(<Icon {...defaultProps} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  test('renders test email', () => {
    defaultProps.icon = 'email';
    defaultProps.size = 10;

    const rendered = mount(<Icon {...defaultProps} />);
    const props = rendered.props();

    expect(defaultProps).toMatchObject(props);
  });
});
