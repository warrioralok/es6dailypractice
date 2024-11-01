const user = {
    name:"Alok",
    surname:"Singh",
    age:39,
    profession:{
        category:"IT",
        Exp:"12"
    }
}

//const {surname:sname,name,age=10,profession:{category,Exp}} = user;
const {name,...userDetal} = user
console.log(name)