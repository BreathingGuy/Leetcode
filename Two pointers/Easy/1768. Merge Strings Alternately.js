var mergeAlternately = function(word1, word2) {
    let theNewWord = [];
    
    for (let i = 0; i < word1.length + word2.length; i++) {
        theNewWord.push(word1[i]);
        theNewWord.push(word2[i]);
    }

    return theNewWord.join('');
};