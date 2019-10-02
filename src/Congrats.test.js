import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({adapter:new EnzymeAdapter()});

const setup = (props={})=>{
    return shallow(<Congrats {...props} />)
};


it('renders without errors', () => {
const wrapper = setup();
const component = findByTestAttr(wrapper,'component-congrats');
expect(component.length).toBe(1)
});
it('renders no text when `success` is false', () => {
const wrapper = setup({success:false});
const component = findByTestAttr(wrapper,'component-congrats');
expect(component.text()).toBe("")
});
it('renders non-empty message when `success` is true', () => {
    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).toBe(8)
});