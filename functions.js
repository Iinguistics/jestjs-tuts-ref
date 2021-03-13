const axios = require("axios");

 functions = {
    add: (a,b) =>  a + b,
    subtract: (a,b) => a - b,
    isNull: ()=> null,
    checkValue: x => x,
    createUser: ()=>{
        const user = {
            firstName: 'John'
        };
        user['lastName'] = 'Doe'
        return user;
    },
    fetchUser: async()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      return res.data.name;
    },
    fetchUserPromise: ()=>
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

};






module.exports = functions;