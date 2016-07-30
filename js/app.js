"use strict";

var moodModel = new models.EmployeeMood();
// set initial defaults:
moodModel.set({
    symbol: ":-D",
    label: 'Awesome!'
});

//var questionModel = new models.Questions();

// set the questions and the order in which they will be asked:
var availableQuestions = [
    'I am satisfied with my roles and responsibilities.',
    'I feel like I have a healthy work/life balance.',
    'I feel comfortable working and interaction with the colleagues on my team.',
    'I like my work environment, and I believe it helps me perform at my best.',
    'My direct manager gives me necessary support and clear objectives.'
];


var allQuestionsModel = new models.AllUserInput();

// for now iterating through the array; later, can change this to randomize the order of questions
for (var i = 0; i < availableQuestions.length; i++) {
    allQuestionsModel.questions.push(availableQuestions[i]);
}


var headerView = new views.HeaderView({
    el: $('#header')
});
var selectedMoodView = new views.SelectedMoodView({
    el: $('#mood-selection'),
    model: moodModel
});
var questionsView = new views.QuestionsView({
    el: $('#mood-questions'),
    model: allQuestionsModel
});
var footerView = new views.FooterView({
    el: $('#footer'),
    model: allQuestionsModel
});


headerView.render();
selectedMoodView.render();
questionsView.render();
footerView.render();

selectedMoodView.on('moodChanged', function (level) {
    var symbol = moodModel.availableLevels[level].symbol;
    var label = moodModel.availableLevels[level].label;
    moodModel.set({
        symbol: symbol,
        label: label,
        submitted: false
    });
});

questionsView.on('userRankUpdated', function (rank, userInputModel) {
    userInputModel.set('rank', rank);
    //userInputModel.set('text', textInput);
    var questionNum = userInputModel.questionNum;
    //console.log('question number: ' + questionNum);
    if (!(allQuestionsModel.userAnswers[questionNum])) {
        allQuestionsModel.userAnswers[questionNum] = userInputModel;
    }

});

questionsView.on('userTextUpdated', function (textInput, userInputModel) {
    userInputModel.set('text', textInput);
    var questionNum = userInputModel.questionNum;
    //console.log('question number: ' + questionNum);
    if (!(allQuestionsModel.userAnswers[questionNum])) {
        allQuestionsModel.userAnswers[questionNum] = userInputModel;
    }
});

questionsView.on('submitted', function() {
    moodModel.set('submitted', true);
});



