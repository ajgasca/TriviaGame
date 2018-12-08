$(document).ready( function () {

var questions = [
    {
    question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
    answers:["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
    values:[false, true, false, false],
    trivia: "At the end of Season 1, Daenerys Targaryen placed her three dragon eggs on the funeral pyre of her late husband. She then walked into the flames and emerged from the ashes the next morning holding three newly hatched dragons.",
    gif: "assets/images/got_baby_dragon.gif"
    },
    {
    question: "The phrase 'Valar Morghulis' or 'All Men Must Die' is usually responded with:",
    answers: [" Valar Dohaeris or 'All Men Must Serve'", "Valar Rohnas or 'All Men Must Live'", "Valar Geros Ilas or 'All Men Must Say Goodbye'", "Valar Dracarys or 'All Men Must Burn'"],
    values: [true, false, false, false],
    trivia: "The Season 2 finale was named 'Valar Morghulis' while the Season 3 premiere was named 'Valar Dohaeris.' In 2014, the Brewery Ommegang created a beer called 'Valar Morghulis,' with each cork fire-branded with the response.",
    gif: "assets/images/valar_morghulis.gif"
    },
    {
    question: "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:",
    answers: ["Lord of the Rings", "Harry Potter", "The Chronicles of Narnia", "The Legend of Zelda"],
    values: [false, false, true, false],
    trivia: "Dinklage played Trumpkin in the 2008 film 'The Chronicles of Narnia: Prince Caspian.' He was not only the first person cast for the 'Game of Thrones' series, but also the only person author George R.R. Martin wanted to play Tyrion.",
    gif: "assets/images/tyrion.gif"
    },
    {
    question: "What is the only thing that can put out volatile Wildfire?",
    answers: ["Sand", "Water", "Dragon's Blood", "Sunlight"],
    values: [true, false, false, false],
    trivia: "So unstable that even strong sunlight can set it ablaze, Wildfire is an extremely volatile substance that can only be extinguished with copious amounts of sand.",
    gif: "assets/images/wildfire.gif"
    },
    {
    question: "Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
    answers: ["Weirwood", "Wildfire", "Valyrian Steel", "Snowballs"],
    values: [false, false, true, false],
    trivia: "Valyrian Steel is not only exceptionally sharp, strong and free of maintenance, but is also capable of taking down an immortal White Walker. The metal is easily identified by its distinctive rippled pattern.",
    gif: "assets/images/valyrian_steel.gif"
    },
    {
    question: "How many times has Beric Dondarrion been brought back to life?",
    answers: ["3 Times", "5 Times", "6 Times", "7 Times"],
    values: [false, false, true, false],
    trivia: "Beric Dondarrion has been resurrected by the God of Light a total of six times. His constant cheating of death comes with a price: each time, he explains, he loses some of his memories and is less himself.",
    gif: "assets/images/beric.gif"
    },
    {
    question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
    answers: ["Ghost", "Lady", "Nymeria", "Summer"],
    values: [false, true, false, false],
    trivia: "After the direwolf Nymeria flees into the woods following a defensive attack against Prince Joffrey, Queen Cersei Lannister orders the execution of her pack sister, Lady.",
    gif: "assets/images/direwolf.gif"
    },
    {
    question: "Arya's punishment for stealing from the Many-Face God is:",
    answers: ["Death", "Memory Loss", "Blindness", "Paralysis"],
    values: [false, false, true, false],
    trivia: "After Arya takes a life that was not hers to kill, she is rendered blind as punishment. The scene, at the end of Season 5, is a new twist on Arya's efforts to become a 'faceless' assassin.",
    gif: "assets/images/blind_arya.gif"
    },
    {
    question: "'It's nothing' were the last words of this infamous character:",
    answers: ["Renly Baratheon", "Tywin Lannister", "Robb Stark", "King Joffrey"],
    values: [false, false, false, true],
    trivia: "The tyrant King Joffrey uttered these rather unremarkable last words after being poisoned on his wedding day. Joffrey was killed by a potion called 'The Strangler,' which causes the throat to immediately swell shut.",
    gif: "assets/images/joffrey.gif"
    },
    {
    question: "What was the name of Ned Stark's greatsword?",
    answers: ["Ice", "Oathkeeper", "Widow's Wail", "Northguard"],
    values: [true, false, false, false],
    trivia: "Ice was the official sword of the Lord of Winterfell, forged from Valyrian steel and handed down over the ages. After being used to behead Ned Stark at the end of Season 1, it was subsequently melted down to forge two new swords – the Oathkeeper and Widow's Wail.",
    gif: "assets/images/ned.gif"
    },
    {
    question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
    answers: ["Pride in drawing blood first", "Knowledge of poisons", "Nighttime attacks", "Ruby-colored armor"],
    values: [false, true, false, false],
    trivia: "Oberyn Martell is skilled not only in combat, but also in the use of deadly potions. In the battle against Ser Gregor Clegane that ultimately cost him his life, Martell managed to severely wound 'The Mountain' with a spear tip coated in poisonous Manticore venom.",
    gif: "assets/images/oberyn.gif"
    },
    {
    question: "The Night King was created using a dagger made of:",
    answers: ["Valyrian Steel", "Blue Ice", "Dragonglass", "Obsidian"],
    values: [false, false, true, false],
    trivia: "In season six, it's revealed that the Children of the Forest created the White Walkers during a war with the First Men. During a vision, Bran sees one of the children force a Dragonglass dagger into the chest of a captive First Man. He then transforms into the Night King.",
    gif: "assets/images/white_walker.gif"
    },
    {
    question: "How many arrows does Ramsay Bolton let loose at Rickon Stark?",
    answers: ["Three", "Five", "Two", "Four"],
    values: [false, false, false, true],
    trivia: "At the beginning of 'The Battle of the Bastards,' Ramsay Bolton tells Rickon Stark to run across the battlefield towards Jon Snow. In a cruel twist, he then begins shooting arrows at the young man. Despite Rickon's best efforts, the fourth arrow finds its mark and ends his life.",
    gif: "assets/images/rickon.gif"
    },
    {
    question: "Who created the secret tunnel in the sewers under Casterly Rock?",
    answers: ["Tyrion Lannister", "Lord Baelish", "Jaime Lannister", "Varys"],
    values: [true, false, false, false],
    trivia: "Speaking with Varys in season 2, Tyrion explains how when he came of age, his father placed him in charge of 'all the drains and cisterns in Casterly Rock.' In season 7, Tyrion reveals that he added a secret entrance in the sewers that Daenerys' army later uses to take the fortress.",
    gif: "assets/images/siege.gif"
    },
    {
    question: "What is Sansa Stark's favorite treat?",
    answers: ["Apple Cranberry Crisp", "Strawberry Rhubarb Pie", "Lemon Cakes", "Honey Cakes"],
    values: [false, false, true, false],
    trivia: "As author George R.R. Martin explains, lemons do not grow in the North, so having access to the traditional Lannister dish would be a treat. 'They would occasionally in the summers get fruit, lemons, that they would makes cakes out of, but it would not be an everyday thing,' he said, 'It would be special and exciting.'",
    gif: "assets/images/sansa.gif"
    },
    {
    question: "Dead creatures revived by White Walkers are known as:",
    answers: ["Walkers", "Wights", "Zombies", "Claws"],
    values: [false, true, false, false],
    trivia: "Wights compose the undead army of the White Walkers and include humans, giants, horses, snow bears, and one very large dragon. They are extremely susceptible to fire and dragonglass. More importantly, if the White Walker that revived it dies, the wight too will perish.",
    gif: "assets/images/wight.gif"
    }
]

var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var unanswered = 0;

$("#start-button").on("click", function () {
    $("#start-button").fadeToggle("slow", showQuestion)
})


function showQuestion() {

    
    $("#start-button").empty();

    var questionBox = $("<div>");
    questionBox.attr("id", "question-area");
    var timer = $("<h2>");
    var question = $("<h2>");

    $("#content").append(questionBox);
    questionBox.append(timer);
    questionBox.append(question);


    var time = 30;
    timer.html("<h2>" + time + " seconds remaining</h2>");

    var counter = setInterval( function() {
        time--;
        timer.html("<h2>" + time + " seconds remaining</h2>");

        if (time===0) {
            clearInterval(counter);
            questionBox.fadeToggle("slow", timedOut);
            unanswered++;
        }
    }, 1000);

    question.html(questions[currentQuestion].question);

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var answers = $("<button>");
        answers.html(questions[currentQuestion].answers[i]);
        answers.addClass("answer-buttons");
        answers.attr("value", questions[currentQuestion].values[i]);
        questionBox.append(answers);
    };


    $(".answer-buttons").on("click", function() {

        console.log($(this).attr("value"));

        if ($(this).attr("value") === "true") {
            questionBox.fadeToggle("slow", correctAnswer());
            clearInterval(counter);
            correct++;
        };

        if ($(this).attr("value") === "false") {
            questionBox.fadeToggle("slow", wrongAnswer);
            clearInterval(counter);
            wrong++;
        };
    });
};


function correctAnswer() {

    var cycle = setTimeout(showQuestion, 7000);
    var messageBox = $("<div>");

    messageBox.addClass("message-content");

    var winMessage = $("<h2>");
    var trivia = $("<h2>");
    var image = $("<img>");

    $("#content").append(messageBox);
    messageBox.append(winMessage);
    messageBox.append(trivia);
    messageBox.append(image);
    winMessage.text("Correct!");
    trivia.text(questions[currentQuestion].trivia);
    image.attr("src", questions[currentQuestion].gif);

    if (currentQuestion === (questions.length - 1)) {
        clearTimeout(cycle);
        var winterIsHere = setTimeout(gameOver, 7000)
    }

 
    currentQuestion++;

    setTimeout (function(){
        $(".message-content").fadeOut();
    }, 7000);
};



function wrongAnswer() {

    var cycle = setTimeout(showQuestion, 7000);
    var messageBox = $("<div>");

    messageBox.addClass("message-content");

    var loseMessage = $("<h2>");
    var trivia = $("<h2>");
    var image = $("<img>");

    $("#content").append(messageBox);
    messageBox.append(loseMessage);
    messageBox.append(trivia);
    messageBox.append(image);
    loseMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
    trivia.text(questions[currentQuestion].trivia);
    image.attr("src", questions[currentQuestion].gif);

    if (currentQuestion === (questions.length - 1)) {
        clearTimeout(cycle);
        var winterIsHere = setTimeout(gameOver, 7000)
    }
    currentQuestion++;
    setTimeout (function(){
        $(".message-content").fadeOut();
    }, 7000);
    

};

function timedOut() {

    var cycle = setTimeout(showQuestion, 7000);
    var messageBox = $("<div>");

    messageBox.addClass("message-content");

    var loseMessage = $("<h2>");
    var trivia = $("<h2>");
    var image = $("<img>");

    $("#content").append(messageBox);
    messageBox.append(loseMessage);
    messageBox.append(trivia);
    messageBox.append(image);
    loseMessage.html("You timed out! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
    trivia.text(questions[currentQuestion].trivia);
    image.attr("src", questions[currentQuestion].gif);

    if (currentQuestion === (questions.length - 1)) {
        clearTimeout(cycle);
        var winterIsHere = setTimeout(gameOver, 7000)
    }
    currentQuestion++;

    setTimeout (function(){
        $(".message-content").fadeOut();
    }, 7000);
};


function gameOver() {

    $(".message-content").empty();

    var totalCorrect = $("<h3>");
    var totalWrong = $("<h3>");
    var totalUnanswered = $("<h3>");
    var restart = $("<button>")

    $("#content").append(totalCorrect);
    totalCorrect.html("You got " + correct + " correct!");
    $("#content").append(totalWrong);
    totalWrong.html("You got " + wrong + " wrong.");

    $("#content").append(totalUnanswered);
    if (unanswered === 1) {
        totalUnanswered.html("You didn't answer " + unanswered + " question");
    }
    if (unanswered > 1 || unanswered === 0) {
        totalUnanswered.html("You didn't answer " + unanswered + " questions.");
    }

    restart.addClass("restart");
    restart.text("Restart");
    $("#content").append(restart);

    $(".restart").on("click", function() {
        totalCorrect.empty();
        totalWrong.empty();
        totalUnanswered.empty();
        restart.empty();
        currentQuestion = 0;
        correct = 0;
        wrong = 0;
        unanswered = 0;
        showQuestion();
    })
}

})