const inquirer = require('inquirer');
const fs = require('fs');

 //---------------
//-inquirer inquiries-
inquirer.prompt(   //prompt method arguments should be wrapped in this order (regular[brackets{pointy}])
    [
        { //title
            type: 'input',
            message: 'hello user, what would you like to name your project?',
            name: 'title',
            validate: (value)=>{if (value){return true} else {return "c'mon my dude, don't you wanna name your project?!"} }       
        },   // validate will check to ensure the user has provided some information, otherwise it will not ask any further questions
        
        { //description
            type: 'input',
            message: "alrighty, now that we've got a name, how about you gimme a little description of the project",
            name: 'description',
            validate: (value)=>{if (value){return true} else {return "input SOMETHING at least! work with me here"} }   
        },
        
        { //table of contents
            type: 'confirm',
            message: 'would you like to include a table of contents?',
            name: 'T.O.C',
            validate: (value)=>{if (value){return true} else {return "its either yes or no this ones easy -_-"} }  // include a function here later after you've achieved mvp, this function will take user input for the TOC
        },

        { //how to install
            type: 'input',
            message: "how do you install this app?",
            name: 'install',
            validate: (value)=>{if (value){return true} else {return "HOW WILL THEY KNOW?!"} }  
        },
        
        { //usage instructions
            type: 'input',
            message: 'how do we use this app?',
            name: 'usage',
            validate: (value)=>{if (value){return true} else {return " "} }  
        },
        
        { //license
            type: 'list',
            message: "is there any specific license you'd like to use?",
            name: 'license',
            choices: ['MIT', 'ISC', 'GPL', 'N/A'],
            validate: (value)=>{if (value){return true} else {return "if you don't care all you gatta put is NA"} }  
        },
        
        { //how to contribute
            type: 'input',  //change to 'list' later after mvp is achieved
            message: "if you'd like to help I'd greatly appreciate, as i am poor and live with my parents :')",
            name: 'contributions',
            validate: (value)=>{if (value){return true} else {return "c'mon, Lemme hold a dollah... pls :'''( "} }  
        },
        
        { //tests
            type: 'confirm',
            message: 'include tests?',
            name: 'tests',
            validate: (value)=>{if (value){return true} else {return "I've run out of clever things to say just click yes or no!"} }  
        },
        
        { //questions
            type: 'input',
            message: "if you've got any questions don't hesitate to reach out to me on github :)",
            name: 'questions',
            validate: (value)=>{if (value){return true} else {return "you're almost done! this is the last one just put anything!"} }  
        },
    ]
)

 //----------------
//-file writer-

 //----------------
//-todo goes here-

 //----------------
//-todo goes here-

 //----------------
//-todo goes here-