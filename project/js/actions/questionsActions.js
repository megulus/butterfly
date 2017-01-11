

export function setQuestions() {
    const availableQuestions = [
        'I am satisfied with my roles and responsibilities.',
        'I feel like I have a healthy work/life balance.',
        'I feel comfortable working and interacting with the colleagues on my team.',
        'I like my work environment, and I believe it helps me perform at my best.',
        'My direct manager gives me necessary support and clear objectives.'
    ];
    let shuffle = (array) => {
        let clone = array.slice(0);
        let j = 0;
        let temp = null;
        for (let i = clone.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = clone[i];
            clone[i] = clone[j];
            clone[j] = temp;
        }
        return clone;
    };
    let shuffled = shuffle(availableQuestions);
    return {
        type: 'SET_QUESTIONS',
        payload: shuffled,
    }
}

export function setUserRating(qnNumber, rating) {
    return {
        type: 'SET_RATING',
        payload: [qnNumber, rating],
    }
}


export function ratingChange() {
    return {
        type: 'RATING_CHANGE',
        payload: 1,
    }
}


export function unsetTmpRating() {
    return {
        type: 'UNSET_TMPRATING',
        payload: {},
    }
}


export function setTmpRating(qnNumber, rating) {
    let tmpRating = {};
    tmpRating[qnNumber] = rating;
    return {
        type: 'SET_TMPRATING',
        payload: tmpRating,
    }
}


export function setUserAnswer(qnNumber, answer) {
    return {
        type: 'SET_USER_ANSWER',
        payload: [qnNumber, answer],
    }
}


export function setAdditionalInput(answer) {
    return {
        type: 'SET_ADDITIONAL_INPUT',
        payload: answer,
    }
}
