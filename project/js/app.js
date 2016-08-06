"use strict";

// set model based on query params:
var params = _.object(_.compact(_.map(location.search.slice(1).split('&'), function(item) {
    if (item) {
        return item.split('=');
    }
})));

var getParam = function(obj) {
    var acceptableValues = ['1','2','3','4','5'];
    if (_.contains(acceptableValues, obj['v'])) {
        return obj['v'];
    } else {
        return '3';
    }
};
var v = getParam(params);

var moodModel = new models.EmployeeMood();

moodModel.set({
    lgSmiley: moodModel.availableLevels[v].lgSmiley,
    label: moodModel.availableLevels[v].label,
    submitted: false
});


// set the questions and the order in which they will be asked:
var availableQuestions = [
    'I am satisfied with my roles and responsibilities.',
    'I feel like I have a healthy work/life balance.',
    'I feel comfortable working and interacting with the colleagues on my team.',
    'I like my work environment, and I believe it helps me perform at my best.',
    'My direct manager gives me necessary support and clear objectives.'
];
// function to shuffle array (implementation of Fisher-Yates)
var shuffle = function(array) {
    var j = 0,
        temp = null;
    for (var i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
shuffle(availableQuestions);

var allUserInput = new models.AllUserInput();
// iterate through randomized availableQuestions array and add to allUserInput model:
for (var i = 0; i < availableQuestions.length; i++) {
    allUserInput.get('questions').push(availableQuestions[i]);
}

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



selectedMoodView.render();
questionsView.render();
footerView.render();



questionsView.on('submitted', function() {
    moodModel.set('submitted', true);
});



