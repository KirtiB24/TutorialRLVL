function qsort(array, start, end) {
    if (start === undefined) {
      start = 0;
      end = array.length - 1;
   } 
    if (start >= end) {
      return array;
    }
    var rStart = start, rEnd = end;
    var pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
    while (start < end) {
      while (array[start] <= pivot) start++;
      while (array[end] > pivot) end--;
      if (start < end) {
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
      }
    }
    qsort(array, rStart, start - 1);
    qsort(array, start, rEnd);
    return array;
  }
  
  console.log(qsort([9, 8, 7, 6, 10, 5]));