var inquirer = require("inquirer");

var word = require('./Word');

var wordChoice = ["Lebron James", "Fulton County", "Atlanta", "Ohio", "California", "Childish Gambino", "Sahas", "Mobile Bartending", "Nikes"];

var guesses = [];

newGame();

function newGame(){
    inquirer.prompt({
        type: 'confirm',
        message: "Would you like to play a game?? Y/N",
        default: true,
        name: 'start'
    }).then(function(answer){
        if(answer.start) startGame()
        else console.log("Some other time then playa!")
    })
}

function startGame(){
    console.log("Let's get it!");

    var currentWord = wordChoice[Math.floor(Math.random() * wordChoice.length)]

    console.log(currentWord);

    


    for (i in currentWord){
        guesses.push(currentWord[i].placeholder)
    }
    console.log(guesses)
}

