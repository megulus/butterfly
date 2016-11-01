import {EventEmitter} from 'fbemitter';


let currentMood = null;  // why is this redundant?
let moodText;

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
        currentMood = v;
        moodText = availableMoods[v];
        this.shuffle(questions);
        let count = 0;
        for (var item of questions) {
            count += 1;
            userAnswers[count] = {};
            userAnswers[count]['question'] = item;
            userAnswers[count]['answer'] = null;
            userAnswers[count]['rating'] = null;
        }
    },

    getMood() {
        return currentMood;
    },

    getMoodText() {
        return availableMoods[currentMood] ? availableMoods[currentMood] : null;
    },

    unsetMood() {
        currentMood = null;
        emitter.emit('change');
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
        emitter.emit('change');
    },

    getRating(qnNumber) {
        return userAnswers[qnNumber]['rating'];
    },

    setRating(qnNumber, newRating) {
        userAnswers[qnNumber]['rating'] = newRating;
        emitter.emit('change');

    },

    addListener(eventType, fn) {
        emitter.addListener(eventType, fn);
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