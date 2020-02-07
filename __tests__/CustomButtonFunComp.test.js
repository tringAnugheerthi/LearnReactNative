import React from 'react';
import { shallow } from 'enzyme';
import FunctionalCustomButton from '../TestableComponents/FunctionalComponents/CustomButton';

/* Snapshot Serializer */
// import {createSerializer} from 'enzyme-to-json';
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

import toJson from 'enzyme-to-json';

describe('CustomButton', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const funcComponent = shallow(<FunctionalCustomButton label="test label" primary />)
            expect(toJson(funcComponent)).toMatchSnapshot("Primary button snapshot - funcComponent")
        });
        it('should match to snapshot - Secondary', () => {
            const funcComponent = shallow(<FunctionalCustomButton label="test label" primary={false} />)
            expect(toJson(funcComponent)).toMatchSnapshot("Secondary button snapshot - funcComponent")
        });
    });
});