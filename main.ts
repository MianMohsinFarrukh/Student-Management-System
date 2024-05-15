#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// Student Management System.

// This project is a simple console based Student Management System. 
//In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.

// Create a GitHub repository for the project and submit its URL in the project submission form.


const random_number: number = Math.floor(10000 + Math.random() * 90000);
// console.log(random_number);


let myBlance: number = 0;

let answer = await inquirer.prompt(
    [
        {
            name: "Students",
            type: "input",
            message: chalk.green("Enter Student Name :"),
            validate: function (value) {
                if (value.trim() !== "") { return true; }
                return chalk.red("Plz enter a non-empty value !")
            }
        },
        {
            name: "Courses",
            message: chalk.green("Select the course to enrolled :"),
            type: "list",
            choices: ["Html", "Css", "TypeScript", "Python", "Java"],
        }
    ]
);


const tution_fee: { [key: string]: number } = {

    "Html": 2000,
    "Css": 2500,
    "TypeScript": 3000,
    "Python": 3500,
    "Java": 4000,

};

console.log(chalk.yellow(`\nTutionFees: ${tution_fee[answer.Courses]}/=\n`));
console.log(chalk.yellow(`Blance: ${myBlance}\n`));



let payment_type = await inquirer.prompt(
    [
        {
            name: "payment",
            message: chalk.green("Select Payment Method"),
            type: "list",
            choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"],
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money :",
            validate: function (value) {
                if (value.trim !== "") {
                    return true;
                }
                return chalk.red("Plz enter a non-empty value !")
            },

        },
    ]
);



console.log(`\n You can Select Payment Method: ${payment_type.payment}\n`);


const tutionFees = tution_fee[answer.Courses];

const paymentAmount = parseFloat(payment_type.amount);


if (tutionFees === paymentAmount) {
    console.log(chalk.cyan(`************************************************************** \n`))
    console.log(chalk.yellow(`Congratulation , You have Successfully enrolled in ${answer.Courses} Course`));
    console.log(`\n`)
    console.log(chalk.cyan(`************************************************************** \n`))


    let ans = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: chalk.green("What would you like to do Next ?"),
        choices: ["View Status", "Exit"],

    }
    ]);

    if (ans.select === "View Status") {

        console.log(chalk.cyan(`\n*************** Status ***************\n`))
        console.log(chalk.yellow(`Student Name : ${answer.Students}`));
        console.log(chalk.yellow(`Student ID : ${random_number}`));
        console.log(chalk.yellow(`Student Courses : ${answer.Courses}`));
        console.log(chalk.yellow(`Tution Fees Paid: ${paymentAmount}`));
        console.log(chalk.yellow(`Balance : ${myBlance += paymentAmount}`));

    } else {
        console.log(chalk.red(`\n Exiting Student Management System\n`));

    };

} else {

    console.log(chalk.red(`Invalid amount due to course ! \n`))
};


//  ******************* END ******************* \\