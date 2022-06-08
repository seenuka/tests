test('Object',()=>
{
    const data={'one':1}
    data['two']=2
    expect(data).toEqual({one:1,two:2})
})
test('null',()=>
{
    const n=null
    expect(n).toBeNull()
    console.log('tested')
    // expect(n).toBeDefined()
    // console.log('tested')
    // expect(n).toBeUndefined()
    //  console.log('tested')
    // expect(n).not.toBeTruthy()
    // console.log('tested')
    // expect(n).toBeFalsy()
    // console.log('tested')

})