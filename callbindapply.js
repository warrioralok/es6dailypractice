//function borrowing

const employee = {
    firstName : "Alok",
    lastName: "Singh",
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
    another: function(){
        console.log(this.firstName+' '+this.lastName)
    }
}
const seperateFn = function(){
    console.log(this.firstName+' '+this.lastName)
}
const customer ={
    firstName: "Amar",
    lastName: "Jeet"
}
// employee.fullName()
// employee.another()
// employee.another.call(customer);
// employee.another.bind(customer);
// employee.another.apply(customer);
seperateFn.call(customer, 'XYZ','ABC');
//seperateFn.apply(customer, ['XYZ','ABC']);
const callthefun = seperateFn.bind(customer, 'XYZ','ABC');
//callthefun()