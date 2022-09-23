const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HER
test('Check if shuffleArray returns an array', () => {
   expect(shuffleArray.length).toBe(1)
})
test('check that the arrays have equal elements', () => {
    let sampleArray = [1, 2, 3, 4, 5]
    expect(shuffleArray(sampleArray).length).toEqual(sampleArray.length)

})

})