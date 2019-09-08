var Array=[0,12,30,3,19,8,22,42];

function Max(values){
var max=values[0];

for(i=0;i<values.length;i++){
  if (values[i]>max) {
    max=values[i];
  }
  }
console.log('Max number is:' + max);
}

function Min(values){
var min=values[0];

for(i=1;i<values.length;i++){
  if (values[i]<min) {
    min=values[i];
    }
  }
console.log('Min number is:' + min);
}

function Max_Min(values){
var max=values[0];
var min=values[0];

for(i=1;i<values.length;i++){
  if (values[i]>max) {
    max=values[i];
  } else if (values[i]<min) {
    min=values[i];
  }
  }
console.log('Max number is:' + max);
console.log('Min number is:' + min);
}


function Sec_Max(values){
var max=values[0];
var Sec_max=values[0];

for(i=1;i<values.length;i++){
  if (values[i]>max) {
    Sec_max=max;
    max=values[i];
  } else if (values[i]<max && values[i]>Sec_max) {
    Sec_max=values[i];
  }
}
console.log('Max number is:' + max);
console.log('Second max number is:' + Sec_max);
}

Max_Min(Array);
Sec_Max(Array);
Min(Array);
Max(Array);
