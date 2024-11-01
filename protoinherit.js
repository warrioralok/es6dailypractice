function User(name,age){
    this.name = name;
    this.ages= 25;
    this.getDetail = function(){
        console.log(this.ages);
    }
}

User.prototype.getName = function(){
    console.log(this.name);
}

User.prototype.age = 26;

let user1 = new User("Alok");
let user2 = new User("Amar");
let user3 = new User();
let user4 = new User();
user1.getName();
user2.getName();
console.log(user4.ages)
console.log(user3.age);