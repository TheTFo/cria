import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from './TodoListItem';

describe('TodoListItem', () => {
    it('should display an li with a check mark link and text', () => {
        let t = jest.fn((key) => key === 'todo:done' ? 'Done' : '');
        let wrapper = shallow(<TodoListItem index={1} text={'some text'} onDone={() => {}} t={t} />);

        let doneLink = wrapper.find('a.done').children('Icon[icon="check"][title="Done"]');
        expect(doneLink.length).toBe(1);
    });
});