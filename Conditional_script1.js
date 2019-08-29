var TeamJohn_1,TeamJohn_2,TeamJohn_3,TeamMark_1,TeamMark_2,TeamMark_3,
TeamMary_1,TeamMary_2,TeamMary_3,Mary_AvgScore,John_AvgScore,Mark_Avgscore;

TeamJohn_1=300;
TeamJohn_2=120;
TeamJohn_3=103;
TeamMark_1=89;
TeamMark_2=112;
TeamMark_3=119;
TeamMary_1=100;
TeamMary_2=200;
TeamMary_3=300;

John_AvgScore=(TeamJohn_1+TeamJohn_2+TeamJohn_3)/3;
Mark_Avgscore=(TeamMark_1+TeamMark_2+TeamMark_3)/3;
Mary_AvgScore=(TeamMary_1+TeamMary_2+TeamMary_3)/3;

if (John_AvgScore>Mark_Avgscore && John_AvgScore>Mary_AvgScore)
{
  console.log('John\'s Team is the winner with an average score of ' + John_AvgScore);
}
else if (Mark_Avgscore>John_AvgScore && Mark_Avgscore>Mary_AvgScore)
{
  console.log('Mark\'s Team is the winner with an average score of ' + Mark_Avgscore);
}
else if (Mary_AvgScore>John_AvgScore && Mary_AvgScore>Mark_Avgscore)
{
  console.log('Mary\'s Team is the winner with an average score of ' + Mary_AvgScore);
}
else if (Mary_AvgScore === John_AvgScore === Mark_AvgScore)
{
  console.log('It is a draw');
}
