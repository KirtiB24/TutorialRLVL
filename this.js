

let b =2;
function any(){
    console.log(this.b);
}
console.log(this.b);
any();

function any(){
         this.c = 2;
         console.log(this.c);
}
any();
//constuctor arrow

let sum = (a) => (b) => a+b;
let val = sum(2)(3);
console.log(val)


//map into arrow
let arr = [6,8,9,9];
console.log(arr.map((elem)=> elem + elem));
//console.log(arr)

//counter is also constructor and function
function counter(){
    let count = 0;
    this.increament = function(){
        count++;
    }
    this .a = 2// new properties
}

let counter1 = new counter()
counter1.increament();
console.log(counter1);
let obj = {
    a:2,
    appendKey: function(){
        this.b =4
    }
}
obj.appendKey();
console.log(obj)