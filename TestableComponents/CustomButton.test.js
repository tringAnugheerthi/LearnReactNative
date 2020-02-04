import React from 'react';
import {shallow} from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<CustomButton label="test label"/>)
            expect(component).toMatchSnapshot()
        });
    });
});