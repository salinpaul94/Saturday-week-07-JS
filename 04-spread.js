// .. (rest / spread)
// copying object / arrays
// merging objects / arrays
const john = {
    name: 'John',
    age: 32
};

const johnOfficial = {
    name: 'Johnathan Doe',
    company: 'Example Consulting',
    role: 'Accountant'
};

// merge 2 objects into one and a few more properties
const johnMasterDetails = {
    ...john,
    ...johnOfficial
};

const johnMasterDetails1 = {
    ...johnOfficial,
    children: ['Jack', 'Jane'],
    ...john,
    spouse: 'Jane'
};

console.log( johnMasterDetails );
console.log( johnMasterDetails1 );

// array spread
console.log( Math.max( 10000, 20, 30, 40, 50, 60, 70, 80, 90 ) );

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log( arr3 );

const nums = [ 10, 20, 30, 25, 15, 5];
console.log( Math.max( nums ) ); // does not work;

console.log( Math.max(...nums) );