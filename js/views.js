"use strict";

var views = {};

views.HeaderView = Backbone.View.extend({
    render: function () {
        this.$el.html('<p><a href="https://support.butterfly.ai" target="_blank"><button>Logo</button>' +
            '</a><h3>Butterfly Inc.</h3></p>');
    }
});

views.FooterView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.model, 'change', this.render)
    },
    render: function () {
        if (this.model.get('submitted')) {
            this.$el.html("<p>Butterfly. Feedback is a gift.</p>" +
                "<p>&copy; 2015 AnonyMessenger, Inc.</p><a href='https://butterfly.ai'>butterflyforce.com</a>");
        } else {
            this.$el.html("<p>Butterfly. Your team's happiness manager.</p>" +
                "<p>&copy; 2016 AnonyMessenger, Inc.</p><a href='https://butterfly.ai'>butterfly.ai</a>");
        }
        return this;
    }
});


views.SelectedMoodView = Backbone.View.extend({
    template: _.template('<p><label><%= symbol %></label>&nbsp;<button id="edit">Edit</button></p>' +
        '<p><h3><%= label %></h3></p>'),
    events: {
        'click #edit': 'editMood'
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        this.$el.html('');
        if (!(this.model.get('submitted'))) {
            console.log('selected mood view - not submitted');
            this.$el.html(this.template({
                symbol: this.model.get('symbol'),
                label: this.model.get('label')
            }));
        }
        return this;
    },
    editMood: function () {
        var moodSelectionView = new views.MoodSelectionView({el: this.$el, model: this.model, parent: this});
        moodSelectionView.render();
        this.$el.append(moodSelectionView.$el);
    }
});

views.MoodSelectionView = Backbone.View.extend({
    template: _.template('<label>&nbsp;<input type="radio" name="mood" value="<%= name %>">' +
        '&nbsp;<%= symbol %>&nbsp;<%= label %></label>'),
    events: {
        'click input': 'selectMood'
    },
    initialize: function (options) {
        this.parent = options.parent;
    },
    render: function () {
        var that = this;
        this.$el.html('');
        if (!(this.model.get('submitted'))) {
            this.$el.html('<p>Did you make a mistake? Please select your correct mood.</p>');
            _.each(this.model.availableLevels, function (level) {
                var label = level.label;
                var symbol = level.symbol;
                var name = level.name;
                that.$el.append(that.template({symbol: symbol, label: label, name: name}));
            });
        }
        return this;
    },
    selectMood: function (event) {
        var $input = $(event.currentTarget);
        this.parent.trigger('moodChanged', $input.val());
    }
});

views.QuestionsView = Backbone.View.extend({
    template: _.template('<p><button id="send" <%= disabled %>>Send</button></p>'),
    events: {
        'click #send': 'submit'
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        var that = this;
        this.$el.html('');
        if (!(this.model.get('submitted'))) {
            this.$el.append('<h4>Your answers will always remain anonymous.</h4>' +
                '<p>Do you agree with the following statements?</p><ul></ul>');
            _.each(this.model.get('questions'), function (question, index) {
                var singleQuestionView = new views.SingleQuestionView({model: that.model, parent: that, questionNum: index + 1});
                singleQuestionView.render();
                that.$el.append(singleQuestionView.$el);
            });
            this.$el.append('<h4>Anything to add?</h4>' +
                '<p><input type="text" id="addl_input" name="addl_input" placeholder="This is where you can express yourself freely ' +
                '& Your answers will always remain anonymous."></p>');
            var disabled;
            if (this.allQuestionsAnswered()) {
                disabled = "";
            } else {
                disabled = "disabled";
            }
            //console.log('disabled: ' + disabled);
            //console.log('all questions answered? ' + this.allQuestionsAnswered());
            this.$el.append(this.template({disabled: disabled}));
        }
        return this;
    },
    allQuestionsAnswered: function() {
        var size = _.size(this.model.get('userAnswers'));
        var length = this.model.get('questions').length;
        //console.log('size === length ' + (size === length));
        return size === length;
    },
    submit: function () {
        var $input = $('#addl_input');
        var textInput = $input.val();
        //console.log(textInput);
        this.model.set('additionalInput', textInput);
        this.model.set('submitted', true);
        this.trigger('submitted');
    }
});

views.SingleQuestionView = Backbone.View.extend({
    template0: _.template('<ul><%= question %></ul>'),
    template1: _.template('<label><input type="radio" name="<%= name %>" value="<%= rating %>"<%= selected ? "checked":""%>>' +
        '<%= rating %></label>'),
    template2: _.template('<p><input id="<%= id %>" value="<%= value %>" type="text"></p>'),
    events: {
        'click input[type="radio"]': 'updateUserRating',
        'mouseleave input[type="text"]': 'updateUserText'
    },
    initialize: function (options) {
        this.parent = options.parent;
        this.questionNum = options.questionNum;
        //this.listenTo(this.model, 'change', this.render)
    },
    render: function () {
        //console.log('rendering single question view');
        var that = this;
        this.$el.html('');
        this.$el.append(this.template0({question: this.model.get('questions')[this.questionNum - 1]}));
        this.$el.append('<p>');
        var name = 'question_' + this.questionNum;
        var userRating;
        if (this.model.get('userAnswers')[this.questionNum]) {
            userRating = this.model.get('userAnswers')[this.questionNum]['rating'];
        } else {
            userRating = -1;
        }
        for (var i = 0; i < 5; i++) {
            var selected = ((i + 1) === userRating);
            //console.log(selected + ' ' + userRating + ' ' + i);
            that.$el.append(that.template1({name: name, rating: i + 1, selected: selected}));
        }
        this.$el.append('</p');
        if (userRating > 0 && userRating <= 2) {
            var value;
            if (that.model.get('userAnswers')[this.questionNum]['text']) {
                value = that.model.get('userAnswers')[this.questionNum]['text'];
            } else {
                value = '';
            }
            that.$el.append(that.template2({id: name, value: value}));
        }
        return this;
    },
    updateUserRating: function (event) {
        //console.log('update user input');
        var $input = $(event.currentTarget);
        //console.log('rating: ' +  $input.val());
        if (this.model.get('userAnswers')[this.questionNum]) {
            this.model.get('userAnswers')[this.questionNum]['rating'] = parseInt($input.val());
        } else {
            this.model.get('userAnswers')[this.questionNum] = {'rating': parseInt($input.val())};
        }
        var questionsAnswered = this.model.get('questionsAnswered');
        //console.log(this.model);
        this.model.set('questionsAnswered', questionsAnswered + 1);
    },
    updateUserText: function (event) {
        var $input = $(event.currentTarget);
        var textInput = $input.val();
        //console.log($input.val());
        if (this.model.get('userAnswers')[this.questionNum]) {
            this.model.get('userAnswers')[this.questionNum]['text'] = textInput;
        } else {
            this.model.get('userAnswers')[this.questionNum] = {'text': textInput};
        }
        var questionsAnswered = this.model.get('questionsAnswered');
        this.model.set('questionsAnswered', questionsAnswered + 1);
    }
});



