const writeFile = require('./writeFile');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What is name of the function?',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which file types should be created?',
      choices: ['component', 'spec', 'stories'],
      validate: answers => {
        if (answers.length < 1) {
          return 'You must select at least one type!';
        }
        return true;
      },
    },
  ])
  .then(answers => {
    console.log(answers);
    answers.fileTypes.forEach(type => {
      writeFile(answers.functionName, type);
    });
  });
