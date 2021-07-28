import { shallow } from 'enzyme'
import "@testing-library/jest-dom"
import React from 'react'
import { AddCategory } from '../../components/AddCategory'

describe('Testing the AddCategory component', () => {
    const setCategory=jest.fn();
    let wrapper=shallow(<AddCategory setCategory={setCategory} />);
    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper=shallow(<AddCategory setCategory={setCategory} />);
    })
    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('should change the input box ', () => {
        const input = wrapper.find("input");
        const value = "hola mundo"
        input.simulate("change", 
        {target:{value:value}});

        expect(wrapper.find("p").text().trim()).toBe(value)
    })
    test('should not post submited information', () => {
        
        wrapper.find("form").simulate("submit",{preventDefault(){}})

        expect(setCategory).not.toHaveBeenCalled()

    })
    
    test('should call the setCategory and clean de input box', () => {
        const input = wrapper.find("input")
        const value= "testing setCategory"
        input.simulate("change",{target:{value:value}})
        const submit = wrapper.find("form")
        submit.simulate("submit",{preventDefault(){}})
        expect(setCategory).toHaveBeenCalled()
        const cleanValue= ""
        expect(wrapper.find("input").prop("value")).toBe(cleanValue)

    })
    
    

})
