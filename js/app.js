"use strict";

var moodModel = new models.EmployeeMood();
// set initial defaults:
moodModel.set({
    symbol: ":-D",
    label: 'Awesome!',
    submitted: false
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


var allUserInput = new models.AllUserInput();

// for now iterating through the array; later, can change this to randomize the order of questions
for (var i = 0; i < availableQuestions.length; i++) {
    allUserInput.get('questions').push(availableQuestions[i]);
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
    model: allUserInput
});
var footerView = new views.FooterView({
    el: $('#footer'),
    model: allUserInput
});


headerView.render();
selectedMoodView.render();
questionsView.render();
footerView.render();



questionsView.on('submitted', function() {
    moodModel.set('submitted', true);
});



