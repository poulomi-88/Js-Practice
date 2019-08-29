var JohnMass,MarkMass,JohnHeight,MarkHeight,BMI_Mark,BMI_John,BMI_Comp;
JohnMass=52;
MarkMass=50;
JohnHeight=132;
MarkHeight=128;

BMI_Mark=MarkMass/(MarkHeight*MarkHeight);
BMI_John=JohnMass/(JohnHeight*JohnHeight);

console.log(BMI_Mark);
console.log(BMI_John);

BMI_Comp=BMI_Mark>BMI_John;
console.log('Is Mark BMI greater than John? ' +BMI_Comp);
