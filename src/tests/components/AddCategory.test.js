import { shallow } from 'enzyme'
import React from 'react'
import { AddCategory } from '../../components/AddCategory'

describe('Testing the AddCategory component', () => {
    const setCategory=()=>{};
    const wrapper=shallow(<AddCategory setCategory={setCategory} />);

    test('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    

})
