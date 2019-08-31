var John = {
  Name: 'John Miller',
  Bills: [124,48,268,180,42],
    TipCalc: function() {
    var Percentage;
    this.Tip=[];
    this.TotalBill=[];
    for (i=0;i<this.Bills.length;i++){
        if (this.Bills[i]<=50){
          Percentage=.2;
        } else if (this.Bills[i]>50 && this.Bills[i]<=200) {
          Percentage=.15;
        } else {
          Percentage=.1;
        }
    this.Tip[i]=Percentage*this.Bills[i];
  //  return Tip[i];
  this.TotalBill[i]=this.Bills[i] + Percentage*this.Bills[i];
    }
  }
}

John.TipCalc();
console.log(John);

var Mark = {
  Name: 'Mark Miller',
  Bills: [77,375,110,45],
  TipCalculator: function(){
    var Percentage;
    this.Tip=[];
    this.TotalBill=[];
    var bills=this.Bills[i];
    for (i=0;i<this.Bills.length;i++)
    {
        if(bills<=100){
          Percentage=.2;
        } else if (bills<=300 && bills>100) {
          Percentage=.1;
        } else {
          Percentage =.25;
        }
    this.Tip[i]=Percentage*this.Bills[i];
    this.TotalBill[i]=this.Bills[i] + this.Tip[i];
    }
  }
}

Mark.TipCalculator();
console.log(Mark);

function AvgTipCalc(tips){
  var sum=0;
  var Avg;
    for(i=0;i<tips.length;i++){
      sum=sum+tips[i];
    }
    Avg=sum/(tips.length);
    return Avg;
}

var num = AvgTipCalc(John.Tip);
console.log(num);
