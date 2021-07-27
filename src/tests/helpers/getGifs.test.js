import { getGifs } from "../../helpers/getGifs"

describe('Testing getGifs', () => {
    
    test('should return 10 elements', async () => {
        
        const gifs= await getGifs("One Punch");
        // console.log(gifs)
        expect(gifs.length).toBe(10)

    })
    test('should return an empty array', async() => {
        
        const gifs = await getGifs("");

        expect(gifs.length).toBe(0)

    })
    

})
