function Tip_Calculator(Bill_Amount){
  var Tip;
  if (Bill_Amount<=50){
    Tip=0.2*Bill_Amount;
    return Tip;
  } else if (Bill_Amount>50 && Bill_Amount<=200) {
    Tip=0.15*Bill_Amount;
    return Tip;
  } else {
    Tip=0.1*Bill_Amount;
    return Tip;
  }
}

var Bills=[124,48,268];
var Tips=[Tip_Calculator(Bills[0]),Tip_Calculator(Bills[1]),Tip_Calculator(Bills[2])];
console.log(Tips);

var Total_Bill=[Bills[0]+Tips[0],Bills[1]+Tips[1],Bills[2]+Tips[2]];
console.log(Total_Bill);
/*var Resto_1=Tip_Calculator(124)+124;
var Resto_2=Tip_Calculator(48)+48;
var Resto_3=Tip_Calculator(268)+268;

console.log('['+ Tip_Calculator(124) + ',' + Tip_Calculator(48) + ',' + Tip_Calculator(268) + ']');
console.log('['+ Resto_1 + ',' + Resto_2 + ',' + Resto_3 + ']');*/
