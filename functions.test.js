const functions = require('./functions');


// before & after ea test it will run these functions
// beforeEach(()=> initDatabase());
// afterEach(()=> closeDatabase());

// before all tests runs initdb function then after all test are ran it runs closeDB function
// beforeAll(()=> initDatabase());
// afterAll(()=> closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const myBeverage = {
    delicious: true,
    sour: false,
  };
  
  describe('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });


test('adds 1 + 2 to equal 3', ()=>{
    expect(functions.add(1,2)).toBe(3);
});


test('subtracts 1 - 2 to equal -1', ()=>{
    expect(functions.subtract(1,2)).toBe(-1);
});


test('subtracts 1 - 2 to NOT equal 1', ()=>{
    expect(functions.subtract(1,2)).not.toBe(1);
});


// check for truthy or falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false    falsy values: 0, null, undefined, false, NaN, ""
test('should be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
});


// use toEqual for obj & arrays, toBe for Primitive types: strings, numbers, null, ect...Obj & arrays are Reference types in JS.
test('User should be John Doe object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: "John",
        lastName: "Doe"
    });
});


// less than, greater than || equal to ect.. toBeLessThan(), toBeGreaterThan(), ect..
test('should be under 1400', ()=>{
    const check1 = 700;
    const check2 = 700;
    expect(check1 + check2).toBeLessThanOrEqual(1400);
});


// Regex   if you want the check to be case sensitive toMatch(/I/i);   add the lowercase right after the uppercase 
test('should be no I in team', ()=>{
    expect('team').not.toMatch(/I/);
});


// Arrays    you can use the toContain matcher which loops through the array & checks for your value
test('admin should be in usernames', ()=>{
    const usernames = ['john', 'rachel', 'admin'];
    expect(usernames).toContain('admin');

    expect(new Set(usernames)).toContain('admin');

    const users = [...usernames];
    expect(users).toContain('admin');
});



// async await api call 
test('the name Leanne Graham should be returned', async ()=>{
    const data = await functions.fetchUser();
    expect(data).toBe('Leanne Graham');
});


// Promise one way of doing it
test('the name Leanne Graham should be returned', ()=>{
    expect.assertions(1);
    return functions.fetchUserPromise()
        .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});