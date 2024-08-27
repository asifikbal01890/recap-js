// const number = [46, 46, 83, 49];
// for (const a of number) {
//     console.log(a);
    
// }


// const gf = 'ar koitori vala aconi'

// for (const character of gf) {
//         console.log(character);
        
//     }


const sajib = {
    name: 'sajib Khan',
    age: 16,
    profession: 'tik toker',
    isMale: true
}

for (const key in  sajib) {
        const element =  sajib[key];
        console.log(key, element);
        
}
