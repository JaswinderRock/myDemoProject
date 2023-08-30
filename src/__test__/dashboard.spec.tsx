import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../Componets/Dashboard';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store/store';
import { MemoryRouter } from 'react-router-dom';
import { findByTestAttr } from '../Utils/index';

const setUp = () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
            <Dashboard loggedInUsers={[]} id={1} />
        </MemoryRouter>
    </Provider>);
    return component;
}

describe('Dashboard Component', () => {
    let component: any;
    beforeEach(() => {
        component = setUp();
    });
    test("DashBoard Test", () => {
        expect(component).toMatchSnapshot()
    })
    it('should render the component without errors', () => {
        const props = {
            loggedInUsers: [],
            id: 1,
            userList: [],
            setUserId: jest.fn(),
        };
        const wrapper = setUp();
        expect(wrapper.exists()).toBe(true);
    });
    it('should show the "Add User" button when clicked', () => {
        const props = {
            loggedInUsers: [],
            id: 1,
            userList: [],
            setUserId: jest.fn(),
        };
        const addButton = findByTestAttr(component, 'add-user-button');
        expect(addButton.exists()).toBe(true);
        addButton.simulate('click');
    });
});
