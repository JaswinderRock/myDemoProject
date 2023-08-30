import React from 'react';
import { ShallowWrapper, shallow } from "enzyme";
import ProfilePage from '../Componets/ProfilePage';
import { Link } from 'react-router-dom';

describe("Render Profile Page", () => {
    let wrapper: ShallowWrapper;
    beforeAll(() => {
        wrapper = shallow(<ProfilePage />);
    });
    test("Profile test is render", () => {
        const component = shallow(<ProfilePage />);
        expect(component).toMatchSnapshot()
    });
    it('should contain the name "Miss Jazz"', () => {
        expect(wrapper.find('h1').text()).toEqual('Miss Jazz');
    });
    test('should contain a profile image', () => {
        expect(wrapper.find('img').prop('src')).toEqual('profilelogo.png');
    });
    it('should contain the job title "Software Engineer"', () => {
        expect(wrapper.find('.title').text()).toEqual('Software Engineer');
    });

    it('should contain the company name "Reckonsys Tech Labs"', () => {
        expect(wrapper.find('p').at(1).text()).toEqual('Reckonsys Tech Labs');
    });
    test('should contain a link to the dashboard', () => {
        const link = wrapper.find(Link);
        expect(link.prop('to')).toEqual('/dashboard');
        expect(link.text()).toEqual('Close');
    });

})
