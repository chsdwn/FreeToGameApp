import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';

import { App } from '../src/App';

describe('[App]', () => {
  it('should render correctly', () => {
    render(<App />);
  });
});
