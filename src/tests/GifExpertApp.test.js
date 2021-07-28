import React from 'react'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'

describe('Testing <GifExpertApp/>', () => {
    test('should match the snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp/>)

        expect(wrapper).toMatchSnapshot()

    })

    test('should show a list of categories', () => {
        
        const categories = ["shingeki", "los simpsons"];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("GifGrid").length).toBe(categories.length);


    })
    
    
})
