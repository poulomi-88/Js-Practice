var a=[5, 2, 3, 9, 10];
/*
function Simple(values){
  for(let i=values.length-1;i>=0;i--){
   console.log(values[i]);
}
}

var Test = Simple(a);
*/

function Forward_Dist(array,i_S,i_E){
let frwrd_dist=0;
for(let i=i_S;i<=i_E;i++){
  frwrd_dist += array[i];
}
return frwrd_dist;
}

function Reverse_Dist(array,i_S,i_E){
  let rev_dist_1=0;
  let rev_dist_2=0;
for(let i=i_S;i>=0;i--){
//  console.log(array[i]);
  rev_dist_1 += array[i];
}
for(let i=i_E;i<=array.length-1;i++){
  rev_dist_2 += array[i];
}
 Total_Rev_Dist = Number(rev_dist_1) + Number(rev_dist_2);
//console.log("Total Rev is " + Total_Rev_Dist);
return Total_Rev_Dist;
}

let Fwd = Forward_Dist(a,1,4);
let Rev = Reverse_Dist(a,1,4)

let Shortest_Dist=Math.min(Fwd,Rev);
console.log("Forward Distance is " +Fwd);
console.log("Reverse Distance is " +Rev);
console.log("Hence Shortest Distance is " +Shortest_Dist);
