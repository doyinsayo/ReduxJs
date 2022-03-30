//import { compose, pipe } from 'lodash/fp';

//let input = "   Javascript   ";
//let output = "<div>" + input.trim() + "</div>";

//const trim = str => str.trim();
//const wrap = (type,str) => '<${type}>${str}</${type}>';
//const toLowerCase = str => str.toLowerCase();

//const transform = pipe(trim, toLowerCase, wrap);
//console.log(transform(input));

const person = { 
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }
};

const updated = {...person,
    address: {
        ...person.address,
        city: 'Illinois'
    },
    name:"Bob"};
console.log(updated)