
"use strict";

var models = {};

models.EmployeeMood = Backbone.Model.extend({
    availableLevels: {
        '1': {name: '1', label: "Oops", alt: ":'(", imgPath: "images/BFEmailPollSmiley.png"},
        '2': {name: '2', label: "Mmmmh...", alt: ":(", imgPath: "images/BFEmailPollSmiley.png"},
        '3': {name: '3', label: "OK,", alt: ":|", imgPath: "images/BFEmailPollSmiley.png"},
        '4': {name: '4', label: "Great!", alt: ":)", imgPath: "images/BFEmailPollSmiley.png"},
        '5': {name: '5', label: "Awesome!", alt: ":-D", imgPath: "images/BFEmailPollSmiley.png"}
    }
});

models.AllUserInput = Backbone.Model.extend({
    defaults: {
        questions: [],
        userAnswers: {},
        submitted: false,
        questionsAnswered: 0
    }
});
