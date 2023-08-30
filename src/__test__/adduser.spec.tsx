import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store/store';
import AddUser from '../Componets/AddUser';
import { findByTestAttr } from '../Utils/index';

const setUp = () => {
    const component = mount(<Provider store={store}>
        <AddUser
            showModal={true} closeModel={() => { }}
        />
    </Provider>);
    return component;
}


describe('AddUser Component', () => {
    let component: any;
    beforeEach(() => {
        component = setUp();
    });
    test('renders without crashing', () => {
        expect(component.exists()).toBe(true);
    });
    test('should add snapshot ', () => {
        expect(component).toMatchSnapshot()
    });
    test('input fields change', () => {
        const firstName = findByTestAttr(component, 'firstName')
        expect(firstName.exists()).toBe(true);
        firstName.simulate('change', { target: { value: 'John' } })
        expect(firstName.exists()).toBe(true);
    });
    test('updates state when input fields firstName change', () => {
        const wrapper = setUp();
        expect(wrapper.find('input[name="firstName"]').prop('value')).toEqual('');
        const newFirstName = 'Test';
        const input = wrapper.find('input[name="firstName"]');
        input.simulate('change', {
            target: { name: 'firstName', value: newFirstName },
        });
        expect(wrapper.find('input[name="firstName"]').prop('value')).toEqual(newFirstName);
    });
    test('updates state when input fields LastName change', () => {
        const wrapper = setUp();
        expect(wrapper.find('input[name="lastName"]').prop('value')).toEqual('');
        const newLastName = 'Case';
        const input = wrapper.find('input[name="lastName"]');
        input.simulate('change', {
            target: { name: 'lastName', value: newLastName },
        });
        expect(wrapper.find('input[name="lastName"]').prop('value')).toEqual(newLastName);
    });
    test("Can change email field", () => {
        const wrapper = setUp();
        expect(wrapper.find('input[name="email"]').prop('value')).toEqual('');
        const newEmail = "test@gmail.com";
        const input = wrapper.find("input").at(0);
        input.simulate("change", {
            target: { name: "email", value: newEmail },
        });
        expect(input.exists()).toBe(true);
    })

    // it('calls addNewUser and closeModel when form is submitted', () => {
    //     const addNewUserMock = jest.fn();
    //     const closeModelMock = jest.fn();
    //     const wrapper = setUp();
    //     wrapper.find('#firstName').simulate('change', { target: { value: 'John' } });
    //     wrapper.find('form').simulate('submit');
    //     expect(addNewUserMock).toHaveBeenCalled();
    //     expect(closeModelMock).toHaveBeenCalled();
    // });

    // it('prevents form submission if required fields are empty', () => {
    //     const addNewUserMock = jest.fn();
    //     const closeModelMock = jest.fn();

    //     const wrapper = mount(
    //         <AddUser
    //             addNewUser={addNewUserMock}
    //             showModal={true}
    //             closeModel={closeModelMock}
    //             userList={[]}
    //         />
    //     );

    //     // Attempt to submit the form without filling in any fields
    //     wrapper.find('form').simulate('submit');

    //     // Verify that addNewUser and closeModel were not called
    //     expect(addNewUserMock).not.toHaveBeenCalled();
    //     expect(closeModelMock).not.toHaveBeenCalled();
    // });
});
