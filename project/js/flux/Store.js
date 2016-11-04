import {EventEmitter} from 'fbemitter';


let currentMood = null;  // why is this redundant?
let moodText;
let canSubmit = false;
let submitted = false;

const availableMoods = {
    1: 'Oops',
    2: 'Mmmmh...',
    3: 'OK',
    4: 'Great!',
    5: 'Awesome!'
};
const moodClasses = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five'
};
let questions = [
    'I am satisfied with my roles and responsibilities.',
    'I feel like I have a healthy work/life balance.',
    'I feel comfortable working and interacting with the colleagues on my team.',
    'I like my work environment, and I believe it helps me perform at my best.',
    'My direct manager gives me necessary support and clear objectives.'
];

let userAnswers ={};
const emitter = new EventEmitter();


const Store = {

    init(v) {
        userAnswers['questions'] = {};
        currentMood = v;
        moodText = availableMoods[v];
        this.shuffle(questions);
        let count = 0;
        for (var item of questions) {
            count += 1;
            userAnswers['questions'][count] = {};
            userAnswers['questions'][count]['question'] = item;
            userAnswers['questions'][count]['answer'] = null;
            userAnswers['questions'][count]['rating'] = null;
            userAnswers['additional'] = null;
        }
    },

    isSubmitted() {
        return submitted;
    },

    saveData() {
        // ultimately, this should write to server
        this.showAllUserInput();
        submitted = true;
        emitter.emit('submitted');
    },

    getMood() {
        return currentMood;
    },

    getMoodText() {
        return availableMoods[currentMood] ? availableMoods[currentMood] : null;
    },

    unsetMood() {
        currentMood = null;
        emitter.emit('moodchange');
    },

    getMoodClass({mood}={}) {
        if (!mood) {
            mood = currentMood;
        }
        return moodClasses[mood] ? moodClasses[mood] : null;
    },

    getQuestionsObj() {
        return userAnswers;
    },

    getAllMoods() {
        return Object.keys(moodClasses);
    },

    setMood(newMood) {
        currentMood = newMood;
        emitter.emit('moodchange');
        this.allRequiredInputSet();
    },

    getRating(qnNumber) {
        return userAnswers['questions'][qnNumber]['rating'];
    },

    setRating(qnNumber, newRating) {
        userAnswers['questions'][qnNumber]['rating'] = newRating;
        emitter.emit('ratingset');
        this.allRequiredInputSet();
    },

    setAnswer(qnNumber, answer) {
        userAnswers['questions'][qnNumber]['answer'] = answer;
    },

    setAdditional(answer) {
        userAnswers['additional'] = answer;
    },

    userCanSubmit() {
        return canSubmit;
    },

    allRequiredInputSet() {
        if (!currentMood) {
            return false;
        }
        for (let i = 1; i <= questions.length; i++) {
            if (!userAnswers['questions'][i]['rating']) {
                return false;
            }
        }
        canSubmit = true;
        emitter.emit('requiredinputset');
        return true;
    },

    addListener(eventType, fn) {
        emitter.addListener(eventType, fn);
    },

    // TEMPORARY TODO: get rid of this
    showAllUserInput() {
        console.log('mood: ' + currentMood);
        console.log('question 1: ' + userAnswers['questions'][1]['question']);
        console.log('q1 rating : ' + userAnswers['questions'][1]['rating']);
        console.log('q1 answer: ' + userAnswers['questions'][1]['answer']);
        console.log('question 2: ' + userAnswers['questions'][2]['question']);
        console.log('q2 rating : ' + userAnswers['questions'][2]['rating']);
        console.log('q2 answer: ' + userAnswers['questions'][2]['answer']);
        console.log('question 3: ' + userAnswers['questions'][3]['question']);
        console.log('q3 rating : ' + userAnswers['questions'][3]['rating']);
        console.log('q3 answer: ' + userAnswers['questions'][3]['answer']);
        console.log('question 4: ' + userAnswers['questions'][4]['question']);
        console.log('q4 rating : ' + userAnswers['questions'][4]['rating']);
        console.log('q4 answer: ' + userAnswers['questions'][4]['answer']);
        console.log('question 5: ' + userAnswers['questions'][5]['question']);
        console.log('q5 rating : ' + userAnswers['questions'][5]['rating']);
        console.log('q5 answer: ' + userAnswers['questions'][5]['answer']);
        console.log('additional: ' + userAnswers['additional']);
    },

    shuffle(array) {
        let j = 0;
        let temp = null;
        for (let i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }


};


export default Store