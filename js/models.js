
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

models.Questions = Backbone.Model.extend({
    questions: []
});

models.AllUserInput = Backbone.Model.extend({
    questions: [],
    userAnswers: {},
    submitted: false
});

models.SingleUserInput = Backbone.Model.extend({
    initialize: function(attributes, options) {
        this.questionNum = options.questionNum;
        this.question = options.question;
        this.totalQuestions = options.totalQuestions;
        this.rank = -1;
        this.text = null;
        //console.log(this.question, this.totalQuestions, this.rank);
    }
});
