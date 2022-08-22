const mod = 1000000007;
let currsum=0;
// function count(currsum){
//     if(currsum == n) return 1;
//     if(currsum > n) return 0;
//     let possiblecnt =0;
//     for(let i=3;i<=n;i=i+2){
//         possiblecnt +=count(currsum +i);

//     }
//     return possiblecnt;
// }
// var n=90;
// console.log(count(currsum));
function count(currsum){
    if(currsum == n) return 1;
    if(currsum > n) return 0;
    if (dp[currsum]!= -1){
        return dp[currsum];
    }
    let possiblecnt =0;
    for(let i=3;i<=n;i=i+2){
        possiblecnt +=count(currsum +i);

    }
    dp[currsum]=possiblecnt % mod;
    return possiblecnt % mod;
}
var n=90;
let dp =Array(n).fill(-1);
console.log(count(currsum));

