//таймер с обратным отсчетом
// вопрос
//варианты ответов( можно выбрать только один правильный ответ)
//если правильны - отразить поздравления на экране
//тоже самое для неправильного ответа + показать правильный ответ
// если время закончилось - тот же сценарий для неправильного ответа
//через несколько секунд запустить следующий вопрос
//On the final screen, show the number of correct answers, 
//incorrect answers, and an option to restart the game (without reloading the page).

var question1 = new Object();
	question1.h = "What is Audrey Hepburn's real name?";
	question1.option1 = "Audrey Kathleen Ruston";
	question1.option2 = "Audrey van Heemstra";
	question1.option3 = "Emma Kathleen Ferrer";
	question1.answer1 = "Right! She was born Audrey Kathleen Ruston and didn't start calling herself Audrey Hepburn until 1948.";
	question1.answer1.true = true;
	question1.answer2 = "No, Ella van Heemstra was the Audrey's mother.";
	question1.answer3 = "No, this is the granddaughter of actors Audrey Hepburn and Mel Ferrer.";
	

var question2 = new Object();
	question2.h="Audrey could speak five languages. Which one she dod not speak?";
	question2.option1="French";
	question2.option2="Italian";
	question2.option3="Russian";
	question2.answer1="No, she could speak English, Spanish, French, Dutch, and Italian.";
	question2.answer2="No, she could speak English, Spanish, French, Dutch, and Italian.";
	question2.answer3="Right! She could speak English, Spanish, French, Dutch, and Italian, but not Russian.";
	question2.answer3.true=true;

var question3 = new Object();
	question3.h="She wasn't Truman Capote's first choice for Holly Golightly- the main character in Breakfast at Tiffany's. In fact, there was another actriss for whom the author had his heart set on. Who is she?";
	question3.option1="Marilyn Monroe";
	question3.option2="Katharine Hepburn";
	question3.option3="Crace Kelly";
	question3.answer1="Rigth! Capote whanted to see Marilyn Monroe as a main character for the movie who turns out to be a vagrant from west Texas whose real name is Lulamae Barnes. ";
	question3.answer1.true=true;
	question3.answer2="No, Capote whanted Marilyn Monroe to become the main character";
	question3.answer3="No, Capote whanted Marilyn Monroe to become the main character";
	
var question4 = new Object();
	question4.h="Who designed Holly's famous little black dress for Breakfast?";
	question4.option1="Gabrielle Chanel";
	question4.option2="Christian Dior";
	question4.option3="Hubert de Givenchy";
	question4.answer1="No, but in fact fashion historians ascribe the origins of the little black dress to the 1920s designs of Coco Chanel and Jean Patou.";
	question4.answer2="No, he did not designed this dress";
	question4.answer3="Right! He achieved this remarkable feat with a single little black satin dress worn by Audrey Hepburn in the opening sequence of 1961’s 'Breakfast at Tiffany’s.'";
	question4.answer3.true=true;

var question5 = new Object();
	question5.h="For which movie Audrey won Oscar?";
	question5.option1="Roman Holiday";
	question5.option2="Breakfast at Tiffany's";
	question5.option3="Sabrina";
	question5.answer1="Right!";
	question5.answer1.true=true;
	question5.answer2="No, just nominated";
	question5.answer3="No, just nominated";
	

var $mainQuestion = $("#main_question");
var $chose = $('button[data-toggle="collapse"]');
var $chose1 = $("#chose1");
var $chose2 = $("#chose2");
var $chose3 = $("#chose3");
var answer1 = $(".answer1");
var answer2 = $(".answer2");
var answer3 = $(".answer3");
var $buttonNext = $("#next");
var correctAnswers=0;
var wrongAnswers=0;


// выбор ответа: правильный - появляется кнопка дальше и 
//запрещается нажатие на остальные варианты
$chose.on('click', function(){
if(question1.option1){
	correctAnswers++;
	$(this).addClass('correct');
}
else{
	wrongAnswers++;
	$(this).addClass('wrong');
}


//$('#collapseExample').on('shown.bs.collapse', function () {
  //  $('[data-toggle=collapse]').prop('disabled',true);
//});
$buttonNext.removeClass('hidden');

})


$('.start').on('click', function(){
	$('#front_page').addClass('hidden');
	$('#question_page').removeClass('hidden');
});
//$('.card-header').on('click', function(){
//	$(this).addClass('correct');
//})























