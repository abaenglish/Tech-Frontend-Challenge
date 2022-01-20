import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navbar />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders a profile picture', () => {
        const picture = wrapper.find('#profile-picture');

        expect(picture).toHaveLength(1);
    });

    it('renders navigation links', () => {
        const links = wrapper.find('#nav-links');

        expect(links).toHaveLength(1);
    })

});