
"use strict";

var models = {};

models.EmployeeMood = Backbone.Model.extend({
    availableLevels: {
        '1': {name: '1', label: "Oops", symbol: ":'("},
        '2': {name: '2', label: "Mmmmh...", symbol: ":("},
        '3': {name: '3', label: "OK,", symbol: ":|"},
        '4': {name: '4', label: "Great!", symbol: ":)"},
        '5': {name: '5', label: "Awesome!", symbol: ":-D"}
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
