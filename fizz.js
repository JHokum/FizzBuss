alert("Script connection sucess");

/* Take in number from user, print all numbers from one to user's number
   and if number is multiple of 3, output "Fizz"
   Multiple of 5 ,output "Buzz"
   Multiple of 3 and 5, output "FizzBuss"*/

   //Prompt for initializing test variable, accepting user input

   test = prompt("Please enter a number."); //add switch to test if input is number
   //alert(test);

   

   //function for test of variable, multiple of 3
   let multipleThree = test => test % 3 == 0;
   //function for test test of variable, multiple of 5
   let multipleFive = test => test % 5 == 0;
   //function for test of variable, multiple of 3 and 5
   let multipleThreeAndFive = test => test % 3 == 0 && test % 5==0;
   //function to print result based on tests
   for (let i = 0; i <test; i++){
        if (multipleThreeAndFive(i+1)){
            console.log("FizzBuzz");
        }
        else if (multipleThree(i+1)){
            console.log("Fizz");
        }
        else if (multipleFive(i+1)){
            console.log("Buzz");
        }
        else{
            console.log(i+1);
        }
   }