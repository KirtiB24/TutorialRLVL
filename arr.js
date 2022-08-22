let twoarray=[
    ["mayank","Btech","iitk",98],
    ["maya","Btech","iitk",90],
    ["Kirti","Btech","iitk",78], 
]
twoarray.forEach((element,mainindex) =>{
    element.forEach((nestedElem,nestedIndex)=>{
        console.log(nestedElem,`Index is{${mainindex},${nestedElem})`);
    });
});
