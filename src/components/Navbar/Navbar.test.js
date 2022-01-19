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
    })

});