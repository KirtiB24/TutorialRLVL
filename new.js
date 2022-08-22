function maxprofit(a)
{
    let max =0;
    let min = a[0];
    for (let i =0;i<a.length;i++){
        min = Math.min(min,a[i]);
        let profit = a[i]-min;
        max = Math.max(max,profit);
    }
    return max;
}

a = [3,1,4,8,7,2,5]
console.log(maxprofit(a))