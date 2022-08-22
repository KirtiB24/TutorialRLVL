let users = [
    {name: 'Ashutosh', age: 22,  hobbies: ['sing', 'dance']},
    {name: 'Akash', age: 23,  hobbies: ['draw']},
    {name: 'Aman', age: 22,  hobbies: ['drive', 'cook']},
    {name: 'Mayur', age: 21,  hobbies: []},
    {name: 'Nehal', age: 15,  hobbies: []},
];

for(let user of users){
    console.log("name:"+user.name);
    console.log("name:"+user.age);
    for(let i = 0; i<user.hobbies.length;i++){
        console.log(`hobbies${i+1}is ${user.hobbies[i]}`);

    }
}
