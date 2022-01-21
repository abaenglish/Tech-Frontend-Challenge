import React from 'react';
import { shallow } from 'enzyme';
import ContentSection from './ContentSection';

describe('ContentSection', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ContentSection title={'Test Section'} />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('has a title', () => {
        const title = wrapper.find('h3');

        expect(title.text()).toEqual('TEST SECTION');
    });

    it('renders arrow buttons', () => {
        const arrow = wrapper.find('#arrow-buttons');

        expect(arrow).toHaveLength(1);
    });

    it('renders a list of tracks', () => {
        const tracks = wrapper.find('#track');

        expect(tracks).toHaveLength(1);
    })
});