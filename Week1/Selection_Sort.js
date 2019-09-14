var Array=[9,12,11,21,2,8];

function Selection_Sort(arr){
//var min=0;
for (var i = 0; i < arr.length; i++) {

      let min = i; //  storing the index of minimum element

      for (var j = i + 1; j < arr.length; j++) {
          if (arr[min] > arr[ j ]) {
              min = j; // updating the index of minimum element
              console.log('min is' +min);
          }
      }

      if (i !== min) {
          let temp = arr[ i ];
          arr[ i ] = arr[min];
          arr[min] = temp;
      }
  }
  return arr;
}

var v=Selection_Sort(Array);
console.log(v);
