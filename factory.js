function Animal(loai)
{
    return{
        loai,
        amthanh:function()
        {
            if(loai === 'dog')
            {
                console.log("gau gau");
            }
            else if(loai === 'cat')
            {
                console.log("meo meo");
            }
            else
            {
                console.log("This is a human");
            }
        }
    };
}
const pet1 = Animal("dog");
const pet2 = Animal("cat");
pet1.amthanh();
pet2.amthanh();



