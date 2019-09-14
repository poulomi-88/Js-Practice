var Array=[10,21,30,71];

function EvenOddDetector(values){
  var b,c=0;
  Even=[];
  Odd=[];
    for(var i=0;i<values.length;i++){
      b=values[i]%2;
    if (b===0) {
      Even=values[i];
    //  c=Even.length;
    //  console.log('The even numbers are ' + Even);
      console.log('Even count is '+ Even.length);
    } else {
      Odd=values[i];
      console.log('Odd count is ' + Odd.length);
    }
}
//console.log('The count of even number is: ' + Even);
}

EvenOddDetector(Array);
/*var a=10%2;
console.log(a);*/
