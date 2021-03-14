const reverseString = require('./reverseString');

test('reverses the word happy', ()=>{
    expect(reverseString('happy')).toBe('yppah');
});