#! /usr/bin/env node

import inquirer from "inquirer";
 const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "Secondnumber" },
    {
      message: "Select one operator to perform operations",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
  ]);
     // conditional ststement:
  
     if(answer. operator ==="Addition" )
     {console.log(answer.firstNumber + answer.Secondnumber);}
  
     else if(answer.operator   ==="Subtractions")
       {console.log(answer.firstNumber - answer.Secondnumber);}
  
     else if(answer. operator === "Multiplication")
     {console.log(answer.firstNumber * answer.Secondnumber);}
  
     else if(answer. operator === "Division")
     {console.log(answer.firstNumber / answer.Secondnumber);}
  
     else{console.log("Please enter valid number");}