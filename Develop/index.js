// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const readme = require('./util/readme.js')
const writeFile = util.promisify(fs.writeFile);


const generateMarkdown = require('./util/generateMarkdown');
// TODO: Create an array of questions for user input

function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What should the title of your ReadMe be?',
            name: 'title',
            validate: function(response){
                if(response.length < 1){
                    return console.log("You must give your readme a title!");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Please describe this application',
            name: 'description',
            validate: function(response){
                if(response.length < 1){
                    return console.log("You must describe your application for the readme!");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'How do you install the application?',
            name: 'install',
            validate: function(response){
                if(response.length < 1){
                    return console.log("You must explain how to install!");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the usage of this application?',
            name: 'usage',
            validate: function(response){
                if(response.length < 1){
                    return console.log("You must explain the usage!");
                }
                return true;
            }
        },
        {
            type: 'list',
            message: 'Choose a license for your project?',
            name: 'license',
            choices: ['Mozilla', 'Apache',
        'MIT', 'GPL', 'BSD'],
        },
        {
            type: 'input',
            message: 'Explain how to contribute to the application. (not required)',
            name: 'contribute',
            
        },
        {
            type: 'input',
            message: 'Explain tests written for your application, and how to run them. (not required)',
            name: 'test',
            
        },
        {
            type: 'input',
            message: 'What is your GitHub username? (required for Questions)',
            name: 'github',
            validate: function(response){
                if(response.length < 1){
                    return console.log("You must submit a GitHub username!");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is your contact email? (required for Questions)',
            name: 'email',
            validate: function(response){
                if(response.length < 1){
                    return console.log("You must submit an email for questions!");
                }
                return true;
            }
        },
    ])
}
    

async function init(){
    try{
        const answers = await promptUser();
        const useAnswers = readme(answers);
        await writeFile('./util/README.md', useAnswers);
        console.log('You have successfully created a readme!')
    } catch (err){
        console.log(err);
    }
}


// Function call to initialize app
init();
