const nums = [1,2,3,4,5]
const name = ["Alok","Singh"]
const objecSet = [
    {id:1, name:"Alok", profile:"Developer"},
    {id:2, name:"Singh",profile:"Senior Developer"},
    {id:3, name:"Amar",profile:"Developer"},
    {id:4, name:"Jeet",profile:"Senior Developer"}
]

const reducerCheck = name.reduce( (x,y) => {
    return x +" "+y;
},"")

const redueernum = nums.reduce((acc,num) => {
    return acc + num

},0)
const filerProfile = objecSet.filter( (arg) => {
    return arg.profile == "Senior Developer";
} )
const filerName = objecSet.map((x) => {
    return x.name.toLocaleUpperCase();
})
const morThanTwo = nums.filter((num) =>{
    return num <= 2
})

console.log(filerName);
console.log(redueernum);

console.log(reducerCheck);