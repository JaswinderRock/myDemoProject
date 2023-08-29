import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Link } from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from '../Componets/LoginPage';
configure({ adapter: new Adapter() });

describe('LoginPage Component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<LoginPage />);
    });

    it('should render without errors', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render a login form with email and password inputs', () => {
        expect(wrapper.find('input[type="email"]').exists()).toBe(true);
        expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    });

    it('should update state when email and password inputs change', () => {
        wrapper.find('input[type="email"]').simulate('change', {
            target: { value: 'test@example.com' },
        });
        wrapper.find('input[type="password"]').simulate('change', {
            target: { value: 'testpassword' },
        });
        expect(wrapper.state('email')).toEqual('test@example.com');
        expect(wrapper.state('password')).toEqual('testpassword');
    });
    it('should navigate to the dashboard when the login button is clicked', () => {
        const link = wrapper.find(Link);
        expect(link.prop('to')).toEqual('/dashboard');
    });
});
