import React from 'react';
import { shallow } from 'enzyme';
import FlatListGoalItem from '../../Components/FlatListGoalItem';

const testInputDict = {
    'myOwnKey': Math.random().toString,
    'value': 'Learn react native'
}

describe('Rendering', () => {
    it('Should match snapshot', () => {
        const component = shallow(<FlatListGoalItem item={testInputDict} />);
        expect(component).toMatchSnapshot('Flat List Item Snapshot')
    })
})

// describe('Interaction', () => {
//     describe('On Press', () => {
//         it('Should call on press', () => {
//             const mockOnPress = jest.fn()
//             const component = shallow(<FlatListGoalItem item={testInputDict} />);
//             // const component = shallow(<FlatListGoalItem
//             //     item={testInputDict}
//             //     onPress={mockOnPress} />)

//             const componentInstance = component.instance()
//             console.log(componentInstance)
//             componentInstance.onPressHandler()
//             //../../node_modules/react-native/Libraries/Components/Touchable/
//             // component.find('TouchableOpacity').simulate('click')
//             expect(mockOnPress).toHaveBeenCalled()
//             expect(mockOnPress).toHaveBeenCalledTimes(1)
//         })
//     })
// })