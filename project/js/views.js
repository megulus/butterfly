"use strict";

var views = {};


views.FooterView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.model, 'change', this.render)
    },
    render: function () {
        if (this.model.get('submitted')) {
            this.$el.html("<div class='footer'><div class='white-text'><p>Butterfly. Feedback is a gift." +
                "<br>&copy; 2016 AnonyMessenger, Inc.</p></div><a class='ltgrn-text' href='https://butterfly.ai'>butterfly.ai</a></div>");
        } else {
            this.$el.html("<div class='footer'><div class='white-text'><p>Butterfly. Your team's happiness manager." +
                "<br>&copy; 2016 AnonyMessenger, Inc.</br></div><a class='ltgrn-text' href='https://butterfly.ai'>butterfly.ai</a></div>");
        }
        return this;
    }
});


views.SelectedMoodView = Backbone.View.extend({
    template: _.template('<div id="smiley-box"><img id="smiley" alt="<%= alt %>" src="<%= lgSmiley %>"><img id="edit" src="images/Edit.png"></div>'+
        '<div class="row mood-text-box"><div class="col-md-8" id="mood-text"><p><h5 class="white-text"><%= label %></h5></p>'
       + '<p class="ltgrn-text" id="thanks">THANK YOU FOR YOUR FEEDBACK</p></div></div>'),
    events: {
        'click #edit': 'editMood'
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        this.$el.html('');
        if (!(this.model.get('submitted'))) {
            if (this.model.get('lgSmiley') && this.model.get('label')) {
                this.$el.html(this.template({
                    lgSmiley: this.model.get('lgSmiley'),
                    label: this.model.get('label'),
                    alt: this.model.get('alt')
                }));
            } else {
                var moodSelectionView = new views.MoodSelectionView({model: this.model, parent: this});
                moodSelectionView.render();
                this.$el.html(moodSelectionView.$el);
            }
        } else {
            this.$el.html('<p>THANK YOU FOR THE EXTRA FEEDBACK</p>' +
                '<h4>Have a nice day!</h4>')
        }
        return this;
    },
    editMood: function () {
        this.model.unset('lgSmiley');
        this.model.unset('label');
    }
});


views.MoodSelectionView = Backbone.View.extend({
    template: _.template('<div class="sm-smiley" id="<%= name %>">' +
        '<img src="<%= smSmiley %>"></div>'),
    events: {
        'click .sm-smiley': 'selectMood'
    },
    attributes: function() {
        return {
            class: 'selection-view'
        }
    },
    initialize: function (options) {
        this.parent = options.parent;
    },
    render: function () {
        var that = this;
        this.$el.html('<p>Did you make a mistake? Please select your correct mood.</p>');
        _.each(this.model.availableLevels, function (level) {
            //var label = level.label;
            var smSmiley = level.smSmiley;
            var name = + level.name;
            that.$el.append(that.template({smSmiley: smSmiley, name: name}));
        });
        return this;
    },
    selectMood: function (event) {
        var $input = $(event.currentTarget);
        var level = $input.attr('id');
        var lgSmiley = this.model.availableLevels[level].lgSmiley;
        var label = this.model.availableLevels[level].label;
        this.model.set({
            lgSmiley: lgSmiley,
            label: label
        });
    }
});


views.QuestionsView = Backbone.View.extend({
    //template: _.template('<p><button id="send" <%= disabled %>>Send</button></p>'),
    events: {
        'click #send': 'submit'
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        var that = this;
        this.$el.html('');
        if (!(this.model.get('submitted'))) {
            this.$el.append('<div class="banner-box"><div class="triangle"><img src="images/Triangle.png"></div><div class="qn-banner"><p class="white-text">Your answers will always remain anonymous.</p></div></div>' +
                '<div class="title"><p class="qn-container ltgrn-text">Do you agree with the following statements:</p></div>');
            _.each(this.model.get('questions'), function (question, index) {
                var singleQuestionView = new views.SingleQuestionView({
                    model: that.model,
                    parent: that,
                    questionNum: index + 1
                });
                singleQuestionView.render();
                that.$el.append(singleQuestionView.$el);
            });
            this.$el.append('<div class="addl-input"><p class="white-text">Anything to add?</p>' +
                '<p><textarea id="addl_input" name="addl_input" placeholder="This is where you can express yourself freely ' +
                '& Your answers will always remain anonymous."></textarea></p></div>');
            var disabled;
            if (this.allQuestionsAnswered()) {
                //disabled = "";
                this.$el.append('<div id="send"><img class="send-button" src="images/ButtonActive.png"></div>');
            } else {
                //disabled = "disabled";
                this.$el.append('<div><img class="send-button" src="images/ButtonInactive.png"></div>');
            }
            //console.log(this.template({disabled: disabled, class: disabled}));
            //this.$el.append(this.template({disabled: disabled, class: disabled}));
        }
        return this;
    },
    allQuestionsAnswered: function () {
        var size = _.size(this.model.get('userAnswers'));
        var length = this.model.get('questions').length;
        return size === length;
    },
    submit: function () {
        var $input = $('#addl_input');
        var textInput = $input.val();
        this.model.set('additionalInput', textInput);
        this.model.set('submitted', true);
        this.trigger('submitted');
    }
});


views.SingleQuestionView = Backbone.View.extend({
    template0: _.template('<p><%= question %></p>'),
    template1: _.template('<label><input type="radio" name="<%= name %>" value="<%= rating %>"<%= selected ? "checked":""%>>' +
        '<%= rating %></label>'),
    template2: _.template('<textarea id="<%= id %>" value="<%= value %>" type="text">'),
    events: {
        'click input[type="radio"]': 'updateUserRating',
        'mouseleave textarea': 'updateUserText'
    },
    attributes: function() {
        return {
            class: 'question'
        }
    },
    initialize: function (options) {
        this.parent = options.parent;
        this.questionNum = options.questionNum;
    },
    render: function () {
        var that = this;
        this.$el.html('');
        //this.$el.append('<li>');
        this.$el.append(this.template0({question: this.model.get('questions')[this.questionNum - 1]}));
        //this.$el.append('<p>');
        var name = 'question_' + this.questionNum;
        var userRating;
        if (this.model.get('userAnswers')[this.questionNum]) {
            userRating = this.model.get('userAnswers')[this.questionNum]['rating'];
        } else {
            userRating = -1;
        }
        this.$el.append('<p>');
        for (var i = 0; i < 5; i++) {
            var selected = ((i + 1) === userRating);
            that.$el.append(that.template1({name: name, rating: i + 1, selected: selected}));
        }
        this.$el.append('</p>');
        if (userRating > 0 && userRating <= 2) {
            var value;
            if (that.model.get('userAnswers')[this.questionNum]['text']) {
                value = that.model.get('userAnswers')[this.questionNum]['text'];
            } else {
                value = '';
            }
            that.$el.append(that.template2({id: name, value: value}));
        }
        //this.$el.append('</li>');
        return this;
    },
    updateUserRating: function (event) {
        var $input = $(event.currentTarget);
        if (this.model.get('userAnswers')[this.questionNum]) {
            this.model.get('userAnswers')[this.questionNum]['rating'] = parseInt($input.val());
        } else {
            this.model.get('userAnswers')[this.questionNum] = {'rating': parseInt($input.val())};
        }
        var questionsAnswered = this.model.get('questionsAnswered');
        this.model.set('questionsAnswered', questionsAnswered + 1);
    },
    updateUserText: function (event) {
        var $input = $(event.currentTarget);
        var textInput = $input.val();
        if (this.model.get('userAnswers')[this.questionNum]) {
            this.model.get('userAnswers')[this.questionNum]['text'] = textInput;
        } else {
            this.model.get('userAnswers')[this.questionNum] = {'text': textInput};
        }
        var questionsAnswered = this.model.get('questionsAnswered');
        this.model.set('questionsAnswered', questionsAnswered + 1);
    }
});



