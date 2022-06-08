import add from './Add'
import sub from './Sub'
import mul from './Mul'
import div from './Div'
describe('test',()=>
{
    it('result',()=>
    {
        expect(add(10,20)).toBe(30)
    })
})
describe('test',()=>
{
    it('result',()=>
    {
        expect(sub(10,20)).toBe(-10)
    })
})
describe('test',()=>
{
    it('result',()=>
    {
        expect(mul(10,20)).toBe(200)
    })
})
describe('test',()=>
{
    it('result',()=>
    {
        expect(div(10,20)).toBe(0.5)
    })
})