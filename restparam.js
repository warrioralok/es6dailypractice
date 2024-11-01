// function sum(...input){
//     let total = 0;

//     for(let i of input){
//         total += i;
//     }

//     console.log(total)
// }

// sum(1,2,3,4,5,6)

function fun(a,b,...c){
    console.log(`${a} ${b}`);  //Ronaldo Neymar
    console.log(c);//['Pele','Messi','Edan']
    console.log(c[0]);// Pele
    console.log(c.length) //3
    console.log(c.indexOf('Edan'));//2
}

fun('Ronaldo', 'Neymar','Pele','Messi','Edan')