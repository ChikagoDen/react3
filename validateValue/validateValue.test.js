const validateValue=require('./validateValue')
describe('validateValue',()=>{
    test('Корректно',()=>{
        expect(validateValue(50)).toBe(true)
    })
    test('меньше корркетного', ()=>{
        expect(validateValue(-50)).toBe(false)
    })
})