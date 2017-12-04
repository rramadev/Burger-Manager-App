import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('thows error', () => {
    const fn = () => { throw new Error('Out of cheese!') }
    expect(fn).toThrow('Out of cheese!');
  })  

  it('renders a <header> element', () => {
    const wrap = shallow(<App />);
    expect(wrap.find('header').length).toEqual(1);
    console.log(wrap.debug())
  })  
});
