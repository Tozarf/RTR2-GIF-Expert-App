import React from 'react'
import "@testing-library/jest-dom"
import { GifGrid } from '../../components/GifGrid'
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Testing <GifGrid/>', () => {
    const category = "the simpsons"
    // const wrapper = shallow(<GifGrid category={category}/>)
    test('should match snapshot', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot();
    })
    test('should show items when images are loaded (useFetchGifs)', () => {
        
        const gifs= [{
            id: "ABC",
            url:"https://localhost/cualquiercosa.jpg",
            title: "cualquier cosa"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category}/>)
        // console.log(wrapper.find("GifGridItem"))
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false)
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length)
    })

    
    
    

})
