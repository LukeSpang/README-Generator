function readme(answers){
    return `<h1 align="center">${answers.title}</h1>

<br>
    
## Description

${answers.description}

<br>

## License

This project/application is covered under the ${answers.license} license.

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

<br>


## Table of Contents

* [Install](#Install)
* [Usage](#Usage)
* [Contribute](#Contribute)
* [Tests](#Tests)
* [Questions](#Questions)
<br>
    

## Install

In order to install this application run the command below:

${answers.install}

<br>

## Usage

${answers.usage}

<br>


## Contribute

${answers.contribute}

<br>

## Tests

${answers.test}

<br>

## Questions

If there are any questions regarding the repo, or any techincal issues, please feel free to contact me at my personal email: ${answers.email}. You can also find me at (https://github.com/${answers.github})
    
`;
}

module.exports = readme;