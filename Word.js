var letter = require ('./Letter')

currentWord = [];

// constructor that builds words from letters

function Word(word){
    for (i = 0; i<=word.length; i++){
        let char = new letter(word[i])
        currentWord.push(char)
    }
};


module.export = Word