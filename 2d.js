let classroom=[
    ["mayank","Btech","iitk",98],
    ["maya","Btech","iitk",90],
    ["Kirti","Btech","iitk",78], 
];

console.log(classroom[2][1]);


for(let i =0;i<=classroom.length -1 ; i++)
{
     for(let j = 0;j<=classroom[i].length -1;j++)
    {
        console.log(classroom[[i][j]]);
        
    }
    
}

