function carDetail(){
    this.model = "";
    this.fetchDetail = function(){
        return this.model;
    };
}

// Create mobileDetail function
function mobileDetail(){
    // for arrowfunction carDetail.call(this); 
    this.model = "Pro10";
}

// Set carDetail as the prototype of mobileDetail
mobileDetail.prototype = new carDetail();

// Create an instance of mobileDetail
const mobile = new mobileDetail();

// Access fetchDetail method from carDetail
console.log(mobile.fetchDetail()); // Output: "Pro10"