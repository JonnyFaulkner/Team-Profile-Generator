const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template.js')
const writeFile = require('./src/generate-site.js')

function Generator() {
    const employeeDataArr = [];
    console.log('Welcome to the Team Profile Generator');
    const userPrompt = () => {
        inquirer
            .prompt(
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is the role of this employee?',
                    choices: ['Manager', 'Engineer', 'Intern']
                },
            )
            .then(({ role }) => {
                if (role === 'Manager') {
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the employee's name?"
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the employee's ID?"
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the employee's Email?"
                            },
                            {
                                type: 'text',
                                name: 'office',
                                message: "What is the manager's office number?"
                            },
                        ])
                        .then(({ name, id, email, office }) => {
                            employeeDataArr.push(new Manager(name, id, email, office));
                            addEmployeePrompt()
                        })
                };
                if (role === 'Engineer') {
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the employee's name?"
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the employee's ID?"
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the employee's Email?"
                            },
                            {
                                type: 'text',
                                name: 'github',
                                message: "What is the Engineer's github account?"
                            },
                        ])
                        .then(({ name, id, email, github }) => {
                            employeeDataArr.push(new Engineer(name, id, email, github));
                            addEmployeePrompt()
                        })
                }
                if (role === 'Intern') {
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the employee's name?"
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: "What is the employee's ID?"
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is the employee's Email?"
                            },
                            {
                                type: 'text',
                                name: 'school',
                                message: "What is the Intern's school?"
                            },
                        ])
                        .then(({ name, id, email, school }) => {
                            employeeDataArr.push(new Intern(name, id, email, school));
                            addEmployeePrompt()
                        })
                }
            })

    }

    function addEmployeePrompt() {
        inquirer
            .prompt({
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another employee',
                default: true
            }).then(({ addEmployee }) => {
                if (addEmployee === true) {
                    userPrompt()
                } else {
                    generateHTML()
                }
            })
    }

    function generateHTML() {
        const pageHTML = pageTemplate(employeeDataArr)
        writeFile(pageHTML);
    }

    userPrompt()
}

Generator();