import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"
import { wait } from "@testing-library/dom"


describe('Testing custom hook useFetchGifs', () => {
    
    test('should return initial state', async () => {
        const {result, waitForNextUpdate}= renderHook( ()=> useFetchGifs("simpsons") )
        const {data,loading}= result.current;
        await waitForNextUpdate();
        // const {data,loading}= useFetchGifs("simpsons")
        // console.log(data, loading)

        expect(data).toEqual([]);
        expect(loading).toBe(true)
    })
    

    test('should return an images array', async () => {
        const {result, waitForNextUpdate}= renderHook( ()=> useFetchGifs("simpsons") )
        await waitForNextUpdate();
        const {data,loading}= result.current;
        // const {data,loading}= useFetchGifs("simpsons")
        // console.log(data, loading)

        expect(data.length).toBe(10);
        expect(loading).toBe(false)
        
    })
    
})

