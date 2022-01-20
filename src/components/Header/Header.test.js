import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders the title', () => {
        const title = wrapper.find('h1');

        expect(title.text()).toEqual('Your favourite tunes');
    });

    it('renders the subtitle', () => {
        const subtitle = wrapper.find('h2');

        expect(subtitle.text()).toBe('All ☀️ and all 🌙');
    });
});