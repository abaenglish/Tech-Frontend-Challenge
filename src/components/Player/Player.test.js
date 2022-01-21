import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

describe('Player', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Player />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });
})