"use strict";

var models = {};

models.EmployeeMood = Backbone.Model.extend({
    availableLevels: {
        '1': {
            name: '1',
            label: "Oops",
            alt: ":'(",
            lgSmiley: "images/Smiley1.png",
            smSmiley: "images/SmallSmiley1.png"
        },
        '2': {
            name: '2',
            label: "Mmmmh...",
            alt: ":(",
            lgSmiley: "images/Smiley2.png",
            smSmiley: "images/SmallSmiley2.png"
        },
        '3': {
            name: '3',
            label: "OK,",
            alt: ":|",
            lgSmiley: "images/Smiley3.png",
            smSmiley: "images/SmallSmiley3.png"
        },
        '4': {
            name: '4',
            label: "Great!",
            alt: ":)",
            lgSmiley: "images/Smiley4.png",
            smSmiley: "images/SmallSmiley4.png"
        },
        '5': {
            name: '5',
            label: "Awesome!",
            alt: ":-D",
            lgSmiley: "images/Smiley5.png",
            smSmiley: "images/SmallSmiley5.png"
        }
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
