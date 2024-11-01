data = [1,5,7,11,14,42];

const test1 = function(x){
    return x * 2;
}
const test2 = function(fn, y){
    return fn(y);
}
const result = test2(test1, 5);
console.log(result)
const calC = function(x){
    return x * 2
}

const highorder = function(data){
    var newdata = []
    for(var i=0;i< data.length;i++){
        newdata.push(data[i]*2);
    }

    return newdata;
}

//console.log(data.map(calC));
//console.log(highorder(data))