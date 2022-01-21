import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Player from '../Player/Player';
import { Provider } from 'react-redux';
import store from '../../store';

describe('App', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><App /></Provider>);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders the navbar', () => {
        const navbar = wrapper.find(Navbar);

        expect(navbar).toHaveLength(1);
    });

    it('renders the header', () => {
        const header = wrapper.find(Header);

        expect(header).toHaveLength(1);
    });

    it('renders a content section', () => {
        const content = wrapper.find(Content);

        expect(content).toHaveLength(1);
    });

    it('renders a player', () => {
        const player = wrapper.find(Player);

        expect(player).toHaveLength(1);
    });

    it('has state', () => {
        const state = wrapper.prop('store');

        expect(state).not.toBeNull();
    });
});
