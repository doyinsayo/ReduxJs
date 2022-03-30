//import { compose, pipe } from 'lodash/fp';

//let input = "   Javascript   ";
//let output = "<div>" + input.trim() + "</div>";

//const trim = str => str.trim();
//const wrap = (type,str) => '<${type}>${str}</${type}>';
//const toLowerCase = str => str.toLowerCase();

//const transform = pipe(trim, toLowerCase, wrap);
//console.log(transform(input));

// mutability with objects

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

// mutability with arrays

const numbers = [1,2,3];

// Adding 
const index = numbers.indexOf(2);
const added = [...numbers.slice(0,index),4,...numbers.slice(index)];
console.log(added);

// removing
const removed = numbers.filter( n => n !== 2);
console.log(removed);

// updating
const numUpdated = numbers.map( n => n ===2 ? 20 : n);
console.log(numUpdated);