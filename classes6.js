class Student{

    constructor(name,age,_class){
        this.names = name;
        this.class = _class;
        this.hisage = age

    }

    biodata(){
        return `student data of ${this.names} and he is in class ${this.class}th , he is ${this.hisage} year old`;
    }
}

class studentdetail extends Student{
    constructor(name,age,_class,isPlayer){
        super(name,age,_class);
        this.player = isPlayer;
    }
    newbiodata(){
        return `${super.biodata()}. He plays ${this.player}`;
    }
}

let getbiodata  = new Student('Vinod',15,10);
let getbiodata2  = new studentdetail('Alok',16,12,'Football');
console.log(getbiodata.biodata())
console.log(getbiodata2.newbiodata())