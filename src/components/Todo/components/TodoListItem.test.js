import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from './TodoListItem';

describe('TodoListItem', () => {
    it('should display an li with a check mark link and text', () => {
        let t = jest.fn((key) => key === 'todo:done' ? 'Done' : '');
        let wrapper = shallow(<TodoListItem index={1} text={'some text'} onDone={() => {}} t={t} />);

        let doneLink = wrapper.find('a.done').children('Icon[icon="check"][title="Done"]');
        expect(doneLink.length).toBe(1);

        let label = wrapper.find('span');
        expect(label.text()).toBe('1) some text');
    });

    it('should index properly', () => {
        let t = jest.fn((key) => key === 'todo:done' ? 'Done' : '');
        let wrapper = shallow(
            <TodoListItem index={2} text={'some text2'} onDone={() => {}} t={t} />
        );

        expect(wrapper.find('span').text()).toBe('2) some text2');
    });

    it('should fire the onDone callback when the check box is clicked', () => {
        let t = jest.fn((key) => key === 'todo:done' ? 'Done' : '');
        let onDoneMock = jest.fn();
        let wrapper = shallow(
            <TodoListItem index={2} text={'some text'} onDone={onDoneMock} t={t} />
        );

        expect(onDoneMock.mock.calls.length).toBe(0);
        wrapper.find('a.done').simulate('click');
        expect(onDoneMock.mock.calls.length).toBe(1);
    });     
});