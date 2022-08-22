function bubble(arr){
    for(let i =0;i<arr.length;i++){
        for(let j =0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1])
            {
               swap(arr,j,j+1)
            }
        }
    }
}

function selction(arr){
    for(i=0;i<arr.length-1;i++){
        let min = arr[i];
        let minIndex = i;
        for(let j =i ;j<arr.length; j++){
            if(min>arr[j]){
                min = arr[j];
                minIndex =j;
            }

        }
        swap(arr,i,minIndex)
    }
}

function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let j = i-1;
        let key = arr[i];
        while (j>=0 && arr[j] > key){
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]= key;
    }
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp
}
let arr =[6,9,6,3,1];

insertion(arr);
console.log(`insertion  after sorting ${arr}`);

selction(arr);
console.log(`selection after sorting ${arr}`);

bubble(arr);
console.log(`after sorting ${arr}`);