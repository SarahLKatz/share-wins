import React from 'react';
import ReactDOM from 'react-dom';
import { AddWin } from '../components/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddWin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
