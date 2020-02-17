import React from 'react';
import { shallow } from 'enzyme';
import ClassCustomButton from '../../TestableComponents/ClassComponents/CustomButton';

/* Snapshot Serializer */
// import {createSerializer} from 'enzyme-to-json';
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

import toJson from 'enzyme-to-json';

describe('CustomButton', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const classComponent = shallow(<ClassCustomButton label="test label" primary />)
            console.log(classComponent, classComponent.props, classComponent.instance())
            expect(toJson(classComponent)).toMatchSnapshot("Primary button snapshot - classComponent")
        });
        it('should match to snapshot - Secondary', () => {
            const classComponent = shallow(<ClassCustomButton label="test label" primary={false} />)
            expect(toJson(classComponent)).toMatchSnapshot("Secondary button snapshot - classComponent")
        });
    });
});