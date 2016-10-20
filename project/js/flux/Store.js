import {EventEmitter} from 'fbemitter';


let mood;
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
        mood = v;
        moodText = availableMoods[v];
        this.shuffle(questions);
        let count = 0;
        for (var item of questions) {
            count += 1;
            userAnswers[count] = {};
            userAnswers[count]['question'] = item;
            userAnswers[count]['answer'] = null;
        }
    },

    getMood() {
        return mood;
    },

    getMoodText() {
        return availableMoods[mood] ? availableMoods[mood] : null;
    },

    getMoodClass() {
        return moodClasses[mood] ? moodClasses[mood] : null;
    },

    getQuestions() {
        return questions;
    },

    setMood(newMood) {
        mood = newMood;
        emitter.emit('change');
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