let low,high,kSmall,kHigh,arr;
const quickSort = (arr,low,high,kSmall,kHigh) => {
    if(low >= high){
        return;
    } 
    let start = low;
    let end = high;
    const mid = Math.ceil(low + high /2);
    const pivot = arr[mid];
    while (start < end){
        while(arr[start]<pivot){
            start ++;

        }
        while(arr[end] > pivot){
            end --;
        }
        if(start <= end){
            swap(arr,start,end);
            start ++
            end --;
        }
    }

    if(kSmall === pivot){
        quickSort(arr,low,end,kSmall,kHigh);
        return;
    }
    if(kSmall < pivot){
        quickSort(arr,low,end,kSmall,kHigh);

    }
    else{
        quickSort(arr,start,high,kSmall,kHigh)
    }
    if(kHigh === pivot){
        quickSort(arr,low,end,kSmall,kHigh);
        return;
    }
    if(kHigh < pivot){
        quickSort(arr,low,end,kSmall,kHigh);
    }
    else{
        quickSort(arr,start,high,kSmall,kHigh);
    }
}


const quickSelect=(arr)=>{
    const start = 0;
    const end = arr.length - 1;
    quickSort(arr,start,end,start,end)
    return(arr[start] = arr[end]);
}

const swap = (arr,a,b) =>{
    let temp = arr[a];
    arr[a]=arr[b];
    arr[b] = temp;
}

const unsortedArray = [7,9,5,0,2,6];
const product = quickSelect (unsortedArray)
console.log(product);