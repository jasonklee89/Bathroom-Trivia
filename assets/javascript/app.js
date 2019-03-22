$("#start").on("click", function(){
    $("#start").remove(); 
});

var questions = [{
    question: "The average person uses the toilet 2,500 times per year. So over the course of an average lifetime, people spend about ______ years on the toilet!",
    answers: ["1", "3", "10", "10,000"],
    correctAnswer: "3",
    image: "assets/images/toiletclock.jpg"
}, {
    question: "_____ of people use their mobile phone on the toilet. Folks do everything from talk and text to online shopping, all from the john. It’s now more popular than reading in the bathroom!",
    answers: ["0%", "25%", "50%", "75%"],
    correctAnswer: "75%",
    image: "assets/images/bathroom.jpg"
} , {
    question: "Aaaaand somewhat predictably, ___ million phones a year fall in. SPLOOOOSH!!!",
    answers: ["7", "100", "2", "40"],
    correctAnswer: "7",
    image: "assets/images/phoneintoilet.jpg"
} , {
    question: "Americans are really on a roll… we use ____ million miles of toilet paper every year – that’s enough to stretch to the sun and back!",
    answers: ["100", "50", "900", "433"],
    correctAnswer: "433",
    image: "assets/images/toiletpaperrolls.jpg"
} , {
    question: "When it comes to gender, men and women have different bathroom pet peeves. Men’s top annoyances are makeup on the towels and _________________.",
    answers: ["leaving the toilet seat down", "hair in the sink", "hair in the shower", "toothpaste in the sink"],
    correctAnswer: "hair in the sink",
    image: "assets/images/hairinsink.jpg"
} , {
    question: "The top complaints for women were leaving the seat up (who didn’t see that one coming?), and _________________.",
    answers: ["leaving the toilet seat down", "hair in the sink", "hair in the shower", "toothpaste in the sink"],
    correctAnswer: "toothpaste in the sink",
    image: "assets/images/toothpasteinsink.jpg"
} , {
    question: "And in defense of women everywhere, putting the seat down just makes good safety sense. A full ____ of bathroom-related injuries happen when someone falls into the toilet because the seat has been left up!.",
    answers: ["10%", "30%", "75%", "85%"],
    correctAnswer: "85%",
    image: "assets/images/toiletfall.jpg"
}
]
