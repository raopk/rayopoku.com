//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Who was elected President of the United States in 2001?"
choice1[1]="Barack Obama"
choice1[2]="George Bush"
choice1[3]="Bill Clinton"
choice1[4]="Donald Trump"

question[2]="When did Jonas Brothers make their comeback to the music world?"
choice2[1]="2015"
choice2[2]="2011"
choice2[3]="2019"
choice2[4]="2021"

question[3]="What is the official language of Mexico?"
choice3[1]="English"
choice3[2]="French"
choice3[3]="Spanish"
choice3[4]="Portuguese" 

question[4]="What is the national animal of Pakistan?"
choice4[1]="Peacock"
choice4[2]="Markhor"
choice4[3]="lion"
choice4[4]="Parrot" 

question[5]="Brazil is the biggest producer of?"
choice5[1]="Rice"
choice5[2]="Oil"
choice5[3]="Coffee"
choice5[4]="Rubber" 

question[6]="What is the difference between a jungle and a rain forest?"
choice6[1]="No difference. Simply two different ways in referring to the same thing."
choice6[2]="A jungle in general receives less rain than a rain forest."
choice6[3]="A jungle refers to the thickest area of a rain forest"
choice6[4]="A jungle and a rain forest each contain their own group of distinct plants and animals."

question[7]="What is the world's most common religion?"
choice7[1]="Christianity"
choice7[2]="Buddhism"
choice7[3]="Hinduism"
choice7[4]="Muslim"

question[8]="Which city ranks as the world\'s most populous city?"
choice8[1]="New York (US)"
choice8[2]="Mexico City (Mexico)"
choice8[3]="Tokyo (Japan)"
choice8[4]="Shanghai (China)"

question[9]="According to statistics, what kind of sites on the net are the most popular?"
choice9[1]="Adult content sites"
choice9[2]="Portal sites"
choice9[3]="Chat sites"
choice9[4]="News sites"

question[10]="As of June 1998, how much is Microsoft Chairman Bill Gates's net worth?"
choice10[1]="10 million US"
choice10[2]="10 billion US"
choice10[3]="35 billion US"
choice10[4]="50 billion US"

solution[1]="b"
solution[2]="c"
solution[3]="c"
solution[4]="b"
solution[5]="c"
solution[6]="c"
solution[7]="a"
solution[8]="b"
solution[9]="b"
solution[10]="d"

