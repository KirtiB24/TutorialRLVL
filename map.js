let unsort = [9,8,0,7];
unsort.sort(function(a,b){
    //return a-b;//asc
    //return b-a//desc 
   // return -1;
    return 1;
})
console.log(unsort)
let students = [
    {
        id:33,
        name: 'vishal'
    },
    {
        id:12,
        name: 'kirti'
    }

];
students.sort(function(student1,student2){
    return student1.id - student2.id
});

students.forEach(function(student){
    console.log(student);

});

///REDUCE
let arr = [6,9,1,9];
let a =arr.reduce(function(accumalator,element){
    return accumalator + element;
},0);

console.log(a)

//composibility
//passing of output as input to another function

//7.currying
function cal(inpu1){
let max = input1;
returnfunction(input2){
    max = Math.max(max,input2);
    return function(input3){
        max= Math.max(max, input3);
        return max;
    }
}
}

let max1 = cal(3)(4)(8);
console.log(max1);

let b =2;
function any(){
    console.log(this.b);
}
console.log(this.);
any();

