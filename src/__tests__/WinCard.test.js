import React from 'react';
import ReactDOM from 'react-dom';
import { WinCard } from '../components/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WinCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
