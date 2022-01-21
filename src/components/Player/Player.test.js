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

    it('renders controls', () => {
        const controls = wrapper.find('#player-controls');

        expect(controls).toHaveLength(1);
    });

    it('renders a slider', () => {
        const slider = wrapper.find('#player-slider');

        expect(slider).toHaveLength(1);
    });

    it('renders an actions button', () => {
        const actions = wrapper.find('#player-actions');

        expect(actions).toHaveLength(1);
    });
});