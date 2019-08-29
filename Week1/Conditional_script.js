var TeamJohn_1, TeamJohn_2, TeamJohn_3, TeamMark_1, TeamMark_2, TeamMark_3, TeamMary_1, TeamMary_2, TeamMary_3, Mary_AvgScore, John_AvgScore, Mark_Avgscore;

TeamJohn_1 = 300;
TeamJohn_2 = 120;
TeamJohn_3 = 103;
TeamMark_1 = 89;
TeamMark_2 = 112;
TeamMark_3 = 119;

John_AvgScore = (TeamJohn_1 + TeamJohn_2 + TeamJohn_3) / 3;
Mark_Avgscore = (TeamMark_1 + TeamMark_2 + TeamMark_3) / 3;

if (John_AvgScore > Mark_Avgscore) {
  console.log('John\'s Team is the winner with an average score of ' + John_AvgScore);
}
else if (John_AvgScore < Mark_Avgscore) {
  console.log('Mark\'s Team is the winner with an average score of ' + Mark_Avgscore);
}
else {
  console.log('It is a draw');
}
