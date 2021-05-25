// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


const questions = [
    
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
            choices: ['Mozilla Public License 2.0', 'Apache License 2.0',
        'MIT License', 'GPL License', 'BSD License'],
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
        
    
];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    const {title, description, install, usage, license, contribute, test, github, email} = data;
    //console.log('this is the data', data)
    let readmeConstruct = `#${title}
    
    ## Description

    ${description}

    ## Table of Contents

    * [Install](## Installation)
    * [Usage](## Usage)
    * [License](## License)
    * [Contribute](## Contribute)
    * [Tests](## Tests)
    * [Questions](## Questions)
    

    ## Installation

    In order to install this application run the command below:

    ${install}

    ## Usage

    ${usage}

    ## License

    This project/application uses the ${license}. 

    ## Contributing

    ${contribute}

    ## Test

    ${test}

    ## Questions

    If there are any questions regarding the repo, or any techincal issues, please feel free to contact me at ${email}. You can also find me at (https://github.com/${github})
    `
    fs.writeFile(fileName, readmeConstruct, (err)=> err ? console.log(err) : console.log("readme has been created!"))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log("answers:", answers)
        writeToFile('README.md', answers)
    });
}

// Function call to initialize app
init();
