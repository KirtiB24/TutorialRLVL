let word = "KAYAK";
function checkpal(word){
let WL = Math.floor(word.length/2);
for (i=0;i<WL;i++)
{
    if(word[i]!== word[word.length-1-i]);
    return false;
} 
return true;
}
let result = checkpal("kayak");
console.log(result);