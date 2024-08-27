function add(a, b) {
    const result = a+b;
    return result
}
// const a = add(4, 6)
// console.log(a);

// expression function
const sum = function (a, b) {
    const result = a+b;
    return result
}

// console.log(sum(4, 6));

// arrow function
 const sum2 = (a , b) => a+b
//  console.log(sum2(9, 6));

// one param arrow function
 const person = name => name;
// console.log(person('raju'));

// no param arrow function
const click = () => ' hello world'
// console.log(click());

// default function
function add6(a=12, b=6) {
    const result = a+b;
    console.log(a, b, result);
    
}
add6(4);


