import React from 'react';
import { shallow } from 'enzyme';
import ClassCustomButton from '../../TestableComponents/ClassComponents/CustomButton';
import { Linking } from 'react-native';

let mockOpenURL = jest.fn(() => Promise.reject('some error reason'));

// 1. Set openURL module function to jest.fn
jest.mock('../../node_modules/react-native/Libraries/Linking/Linking', () => {
    return {
        openURL: mockOpenURL,
    }
})

describe('ClassCustomButton', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<ClassCustomButton label="test label" primary />)
            expect(component).toMatchSnapshot("Primary button snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<ClassCustomButton label="test label" primary={false} />)
            expect(component).toMatchSnapshot("Secondary button snapshot")
        });
    });

    describe('Interaction', () => {
        describe('onPressHandler', () => {
            const mockOnPress = jest.fn();
            let instance;

            // 2. preparing a reusable shallow rendered instance
            beforeEach(() => {
                instance = shallow(<ClassCustomButton
                    label="test label"
                    onPress={mockOnPress}
                    url="https://www.test.com"
                />).instance();
                jest.clearAllMocks();
            });

            it('should call onPress', () => {
                instance.onPressHandler();
                expect(mockOnPress).toHaveBeenCalled();
                expect(mockOnPress).toHaveBeenCalledTimes(1);
            });

            it('should call openURL if url is provided', () => {
                instance.onPressHandler();
                // 3. mockOpenURL should be called since we have passed in 'url' prop
                // expect(mockOpenURL).toHaveBeenCalled();
                // expect(mockOpensURL).toHaveBeenCalledTimes(1);
                expect(mockOpenURL).toHaveBeenCalledWith("https://www.test.com");
            });

            it('should not call openURL if url is nor provided', () => {
                const innerInstance = shallow(<ClassCustomButton label="test label" onPress={mockOnPress} />).instance();
                innerInstance.onPressHandler();
                // 4. mockOpenURL should NOT be called as we have NOT passed in 'url' prop
                expect(mockOpenURL).not.toHaveBeenCalled();
            });
        });
    });
});