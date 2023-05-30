/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved
        * starts with let, var, or const
        * cannot start with a number or characters other than $ or _
    * initilization
        * assignment of data value
        * if no value is assigned, it's undefined by default
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable Declaration
let firstName;
console.log(firstName);

// Variable Initilization (and reassignment)
firstName = "Sino";
console.log(firstName);

// Variable Declaration and Initilization
let lastName = "Sino";

// (a)  (b) (c)     (d)
let address = "123 Main St, Salem, MA"
    // (e)  |   (f)
    
// (a) - keyword
// (b) - variable identifier
// (c) - assignment operator
// (d) - value or initializer
// (e) - variable declaration
// (f) - variable initilization or value assignment

var age = 26;
console.log(age);
// var is hoisted whereas let or const are not
// do not use it

// ? Const variable CANNOT have reassigned primitive value
const ssn = "123-45-6789";
console.log(ssn)
// TypeError: assignment to constant variable 
// ssn = "333-33-3333";
// console.log(ssn);

/* 
    ? Coding Practices for Variables 
    * be concise (ex: firstName instead of userFirsName)
    * be specific (ex: value instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * SCREAMING_CASE
*/

let fName = "Sino"
let lName = "Roziqov"
let houseNumber = "123"
let street = "Evans"
let city = "Denver"
let state = "co"
let postCode = "12345"

let addressStapm = `${fName} ${lName}\n${houseNumber}$\n${street} ${city}, ${state.toUpperCase()} ${postCode}`;
console.log(addressStapm)
