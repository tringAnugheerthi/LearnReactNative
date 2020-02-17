import React from 'react'
import { shallow } from 'enzyme'
import FlatListGoalItem from '../../Components/FlatListGoalItem'
import toJson from 'enzyme-to-json'

const testInputDict = {
    'myOwnKey': Math.random().toString,
    'value': 'Learn react native'
}

describe('Rendering', () => {
    it('Should match snapshot', () => {
        const component = shallow(<FlatListGoalItem item={testInputDict} />)
        expect(toJson(component)).toMatchSnapshot('Flat List Item Snapshot')

    })
})

describe('Interaction', () => {
    describe('On Press', () => {
        const mockOnPress = jest.fn()

        // const mockOnPress = () => console.log('Hello World')
        const initialProps = {
            item: testInputDict,
            onDelete: mockOnPress
        };

        const component = shallow(<FlatListGoalItem {...initialProps} />)
        it('should have Touchable Opacity Component', () => {
            expect(component.find('TouchableOpacity').length).toEqual(1);
        })

        it('should have proper props', () => {
            // console.log('PROPS:::', component.find('TouchableOpacity').props('onPress').onPress)
            expect(component.find('TouchableOpacity').props().onPress).toEqual(expect.any(Function))
        })

        it('Should call on press', () => {
            component.find('TouchableOpacity').simulate('press')
            expect(initialProps.onDelete).toHaveBeenCalledTimes(1)
            
        })
    })
})