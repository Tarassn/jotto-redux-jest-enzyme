import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr, checkProps} from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({adapter:new EnzymeAdapter()});

const defaultProps = { success: false };

const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />)
};


it('renders without errors', () => {
const wrapper = setup({success:false});
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
it('does not throw warning with expected props',()=>{
    const expectedProps = { success: false };
   checkProps(Congrats, expectedProps)
});