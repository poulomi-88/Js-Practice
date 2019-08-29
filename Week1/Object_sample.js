var John = {
  fullName: "John Andreas",
  mass: 52,
  height: 162,
  BMI: function() {
    this.index= this.mass/this.height^2;
   return this.index;
  }
};

var Mark = {
  fullName: "Mark Andreas",
  mass: 212,
  height: 147,
  BMI: function() {
    this.index= this.mass/this.height^2;
   return this.index;
  }
};

console.log(John.BMI());
console.log(Mark.BMI());
console.log(John);

if (John.BMI()>Mark.BMI()){
  console.log('John\'s BMI is greater than Mark\'s');
}
else if (John.BMI()<Mark.BMI()) {
    console.log('Mark\'s BMI is greater than John\'s');
}
else {
    console.log('Mark\'s and John\'s BMI is equal');
}



//var mark = {

//}
