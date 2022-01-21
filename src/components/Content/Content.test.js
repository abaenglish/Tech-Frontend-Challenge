import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';
import ContentSection from './ContentSection/ContentSection';

describe('Content', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Content />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders a content section', () => {
        const section = wrapper.find(ContentSection);

        expect(section).toHaveLength(3);
    });
});