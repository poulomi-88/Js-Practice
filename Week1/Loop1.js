var John = {
Name: 'John Miller',
Bills: [124,48,52,179,181]
}

var Mark = {
  Name: 'Mark Miller',
  Bills: [142,51,191,187,92]
}

function TipCalculator(Bills){
var Percentage;
Tip=[];
  for(var i=0;i<Bills.length;i++){
    if (Bills[i] > 100 && Bills[i] < 200) {
      Percentage = .2;
    } else {
      Percentage = .25;
    }
    Tip[i]=Percentage*Bills[i];
  }
    console.log(Tip);
    return Tip;
}

var v=TipCalculator(John.Bills);
//console.log(Tip1[]);
var w=TipCalculator(Mark.Bills);

function AvgTipCalc(tips){
  var Sum=0;
  var Avg;
  for(var j=0;j<tips.length;j++){
    Sum = Sum + tips[j];
  }
    Avg=Sum/tips.length;
    console.log(Avg);
}

AvgTipCalc(v);
AvgTipCalc(w);
