import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import React from 'react'

describe('Testing GifGriItem', () => {
  const title= "un titulo";
  const url="https://localhost/algo.jpg"
  // const animation= "animate__heartBeat"
  const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('should show the component correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
    
  test('should have a paragraph with the title', () => {
    
      const p = wrapper.find("p");
      
      expect(p.text().trim()).toBe(title)

  })

  test('img should have url and alt matching to the props', () => {
    
      const img= wrapper.find("img")
      // console.log(img.props())
      const {src, alt}= img.props()
      
      expect(src).toBe(url)
      expect(alt).toBe(title)

  })
  
  test('div should have the animate__heartBeat ', () => {
    
    const div= wrapper.find("div")
    const animation= "animate__heartBeat"
    const className = div.prop("className")
    

    expect(className.includes(animation)).toBe(true)  
    
  })
  
  
})
