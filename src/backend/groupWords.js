module.exports = words => {
    return new Promise((resolver, reject) => {
        try {
            const groupedWords = words.reduce(countWords, {})
            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(word => ({ name: word, amount: groupedWords[word] }))
                .sort(descreseByAmount);
            resolver(groupedWordsArray);
        } catch (e) {
            reject(e)
        }
    })
}

const descreseByAmount = (a, b) => {
    const response = b.amount - a.amount
    if (response == 0) {
        if (b.name < a.name)
            return -1;
        if (b.name > a.name)
            return 1;
        return 0;
    }
    return response
}

const countWords = (cumulator, currentWord) => {
    cumulator[currentWord] = cumulator[currentWord] ? cumulator[currentWord] + 1 : 1;
    return cumulator;
}