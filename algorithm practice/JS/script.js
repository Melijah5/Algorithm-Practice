<<<<<<< HEAD
// creat a function that takes number as an argument. that prints the page from the start of the argument to the end of the argument.

// creat a function that prints page start to the end
// create two parametres must be (num)only
//create a for loop 
// start  with the first given page
//ends last given page
//print from start page to the end page

// function print (start,end){
//     if(isNaN(start)||isNaN(end) ||start>end ||start<0||end<0){

//         console.log("error")
//     }
//     for(let i=start;i<=end;i++){
//         console.log(i)
//     }

// }
// print(10,30)

//====================================================================================
//print even/odd pages
function print (start,end){
    if(isNaN(start)||isNaN(end) ||start>end ||start<0||end<0){

        console.log("error")
    }
    for(let i=start;i<=end;i++){
        if(i%2==1){
            console.log(i)
        }
        }
        
    }
print(19,30)


/*
####################################################################################################################
*/

// 1. Create a function that takes voltage and current and returns the calculated power.https://edabit.com/challenge/wAdE9te55cowBLcPs

function powerCal(voltage, current) {
    if (isNaN(voltage) || isNaN(current) || voltage < 0 || current < 0) {
        return "Error"
    }
    let power = voltage * current
    console.log(power)
}
powerCal(240,110)

// 2. Write a function that returns sum numbers from 1 to 50?

function sumOfFifty() {
    sum=0
    for (i = 1; i <= 50; i++) {
        sum = sum + i 
    }
    console.log(sum)
}
sumOfFifty()


// 3. Create a function that takes the age in years and returns the age in days.
function yearsTodates(age) {
    if (typeof (age) !== "number" || age < 0) {
        return 'Enter A valid Age'
    }
    let Age = age * 365
    console.log(Age + " days")
}
yearsTodates(36)


// 4. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise, return false.
// 	https://edabit.com/challenge/9MjEpkL7yAjAqiH58

function twoNumbers(x, y) {
    if (isNaN(x) || isNaN(y)  ) {
        return "provide only numbers"
    } else if((x+y)<=100) {
          return "true"
    } else {
        return "false"
    }
    
}
console.log(twoNumbers(-50,50))



// 5. Write a function that returns the sum of even numbers from 1 to 50.
// function sumOfEven() {
// let sum=0
//     for ( let i = 1; i <= 50; i++){
        
//         if (i % 2 == 0) {
//             sum = sum + i
//             }
//     }
//     console.log(sum)
// }
// sumOfEven()

// 6. Print all the integers from 1 to 50? using while loop and for loop


// for Loop
// for (i = 1; i <= 50; i++){
//     console.log(i)
// }

// while Loop

// var i=1
// while (i<51) {
//     console.log(i)
//     i++
// }

// let f = 1
// while (f <= 50) {
//     console.log(f)
//     f=f+1
// }

// 7.Create an array with odd integers from 1 to 50.

function oddIntgers() {
    let oddNum = []
    for (i = 1; i <= 50; i++){
        if (i % 2 !== 0) {
            oddNum.push(i)
        }
    }
        return(oddNum)
}
console.log(oddIntgers())
=======


                              Algorithm coding challange collection 

//=====================================================================================================================================
// 1. create a function that takes number as an argument. that prints the page from the start of the argument to the end of the argument.
//=====================================================================================================================================

        // creat a function that prints page start to the end
        // create two parametres must be (num)only
        //create a for loop 
        // start  with the first given page
        //ends last given page
        //print from start page to the end page


                     function print (start,end){
                        if(isNaN(start)||isNaN(end) ||start>end ||start<0||end<0){

                            console.log("error")
                         }
                        for(let i=start;i<=end;i++){
                             console.log(i)
                        }

                        }
                    print(10,30)

//=====================================================================================================================================
   //2.                          print even/odd pages
//=====================================================================================================================================

                        function print (start,end){
                            if(isNaN(start)||isNaN(end) ||start>end ||start<0||end<0){

                                console.log("error")
                            }
                            for(let i=start;i<=end;i++){
                                if(i%2==1){
                                    console.log(i)
                                }
                                }

                            }
                            print(19,30)


//=====================================================================================================================================
// 3. Create a function that takes voltage and current and returns the calculated power. https://edabit.com/challenge/wAdE9te55cowBLcPs
//=====================================================================================================================================

                        function powerCal(voltage, current) {
                            if (isNaN(voltage) || isNaN(current) || voltage < 0 || current < 0) {
                                return "Error"
                            }
                            let power = voltage * current
                            console.log(power)
                        }
                        powerCal(240,110)

//=====================================================================================================================================
// 4. Write a function that returns sum numbers from 1 to 50?
//=====================================================================================================================================

                        function sumOfFifty() {
                            sum=0
                            for (i = 1; i <= 50; i++) {
                                sum = sum + i 
                            }
                            console.log(sum)
                            }
                        sumOfFifty()

//=====================================================================================================================================
/* 5. Create a function that takes the age in years and returns the age in days. 
 Create a function that takes the age in years and returns the age in days. */
//=====================================================================================================================================

                            function yearsTodates(age) {
                                if (typeof (age) !== "number" || age < 0) {
                                    return 'Enter A valid Age'
                                }
                                let Age = age * 365
                                console.log(Age + " days")
                            }
                            yearsTodates(36)

//=====================================================================================================================================
/* 6. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise, return false.
	https://edabit.com/challenge/9MjEpkL7yAjAqiH58 */
//=====================================================================================================================================

                        function twoNumbers(x, y) {
                            if (isNaN(x) || isNaN(y)  ) {
                                return "provide only numbers"
                            } else if((x+y)<=100) {
                                  return "true"
                            } else {
                                return "false"
                            }

                        }
                        console.log(twoNumbers(10,50))

//=====================================================================================================================================
 // 7. Write a function that returns the sum of even numbers from 1 to 50.
//=====================================================================================================================================

                            let sum=0
                                for ( let i = 1; i <= 50; i++){

                                     if (i % 2 == 0) {
                                         sum = sum + i
                                         }
                                 }
                                 console.log(sum)
                             }
                             sumOfEven()


//=====================================================================================================================================
// 8. Print all the integers from 1 to 50? using while loop and for loop
//=====================================================================================================================================


                            // for Loop
                             for (i = 1; i <= 50; i++){
                                 console.log(i)
                             }

                            // while Loop

                             var i=1
                             while (i<51) {
                                 console.log(i)
                                 i++
                             }

                                    // let f = 1
                                    // while (f <= 50) {
                                    //     console.log(f)
                                    //     f=f+1
                                    // }
//=====================================================================================================================================
 // 9.Create an array with odd integers from 1 to 50.
//=====================================================================================================================================

                                    function oddIntgers() {
                                        let oddNum = []
                                        for (i = 1; i <= 50; i++){
                                            if (i % 2 !== 0) {
                                                oddNum.push(i)
                                            }
                                        }
                                            return(oddNum)
                                    }
                                    console.log(oddIntgers())

//=====================================================================================================================================
10. Set negative array values to zero.
	example [2, -3, 5, -9] ----> [2, 0 , 5, 0]
11. Given an array, print max, min, and average values.

12. Create a function that takes an array of numbers and returns both the minimum and maximum numbers, in that order.
	https://edabit.com/challenge/Q3n42rEWanZSTmsJm

13.  Write a function that prints the firstgit 10 integers on the console starting from the number 1 using the JavaScript for loop

14. Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.

//=====================================================================================================================================
>>>>>>> 2d2e42fe33d78d22329c3071ec066223924f85af

// /*************************************************************************************************** */
//
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

// */
// function printFirstTenNumbers(){
// for(let i=1;i<=10;i++){
//     console.log(i)
// }
// }
// printFirstTenNumbers()

// /************************************************************************************************* */

// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// */
// // const printNextFiveNumbers=(num)=>{
// if(typeof (num!=="number"))
// //     for(let i=num+1;i<=num+5;i++){
// //         console.log(i);
// //     }

// // }
// // printNextFiveNumbers(30)

// const printNextFiveWhileLoop = (num) => {
//   if (typeof (num !== "number")) {
//     let i = num + 1;
//     while (i <= num + 5) {
//       console.log(i);
//       i++;
//     }
//   } else {
//     console.log("please enter a number");
//   }
// };
// printNextFiveWhileLoop(10);

// /******************************************************************************************** */
// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// */
// const printSumOfTenNumbers = (num) => {
//   if (typeof num === "number") {
//     for (let i = num + 1; i <= num + 10; i++) {
//       sum += i;
//     }
//     var sum = 0;
//   } else {
//     return "please Enter a number";
//   }

//   return sum;
// };
// let result = printSumOfTenNumbers("op");
// console.log(result);

/************************************************************************************* 
Question 4
● Write a function that takes an array as an argument and prints every element of the array on the
console.
○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
1
Hello
8
44
*/

// let arr=[1, "Hello", 8, 44]

// for(let i  of arr){
//     console.log(i)
// }
// let printAllArray=(i)=>i
// printAllArray()
/******************************************************************************************* */
// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
// */

// function meti(arr) {
//   console.log(arr.length);
// }
// meti(1);

// function findLengthOfArray(myArray){
//    console.log(myArray.length);

// }
// findLengthOfArray([2,"hello","my","name is","kidus"])


//#####################################################################################################
// /*
// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// // ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// // 3 + 0

// // */

// const workye = (arr) => {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     var newArr = arr.filter((hr) => typeof hr === "number");
//     sum = sum + newArr;
//   }
//   return sum;
// };

// console.log(workye([5, 6, 99, 8, 76, 4, 68, 44, "hello"]));

// function printTheSumOfArray(arr) {
//   var sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof (arr[i] === "number")) {
//       sum += arr[i];
//     } else {
//       console.log("enter numbers in your array");
//       break;
//     }
//   }
//   console.log(sum);
// }
// printTheSumOfArray([10, 20, 30]);

// /*
//##########################################################################################################
// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// */

// let mihret = (arr) => {
//   let sumEven = 0;
//   let sumOdd = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       sumEven = sumEven + arr[i]; // another way  sumEven+=arr[i]
//     } else {
//       sumOdd = sumOdd + arr[i]; //another way sumOdd+=arr[i]
//     }
//   }
//   let difference = sumEven - sumOdd;

//   console.log(difference);
// };
// mihret([5, 6, 99, 8, 76, 4, 68, 44, 20, 55, 15]);

// function subtractTheSumOfOddNumbersFromTheSumOfEvenArray(arr){
//     let oddNumbers=0
//     let evenNumbers=0
//     let  result

//     for(let i=0 ;i<arr.length;i++){

//         if(arr[i]%2==0){
//             evenNumbers+=arr[i]

//         }
//         else{
//             oddNumbers+=arr[i]
//         }
//     }
//     result=evenNumbers-oddNumbers
//     console.log(evenNumbers + "-"+ oddNumbers +" = "+result);
//     // console.log(result);

// }
// subtractTheSumOfOddNumbersFromTheSumOfEvenArray([21,30,40,11,33,13,22])

/************************************************************************************** 
Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
should be:
5 
99 
76 
68 
○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be:
11
3
car
*/

// const bokore = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) //any conditon true
//     {
//       console.log(arr[i]);
//     }
//   }
// };
// // bokore([11, "Sam", 3, 7, "car"]);

// // another way

// const werke = (arr) => {
//   for (i = 0; i < arr.length; i = i + 2) {
//     console.log(arr[i]);
//   }
// };
// werke([11, "Sam", 3, 7, "car"]);

//(0%2==0)= T  =>  11
//(1%2==0)=F => skip
//(2 % 2 == 0)=T =>3
//(3%2==0)=F => skip
//(4%2==0)= T => car

//

// if  grade(100) return
//#############
// if else (grade >50) pass
//else fail
//#############

// if (grade 90-100)  A
//else if (grade 80-90) B
//else if (grade 70-80) c
//else F
//#############

// function bokore(arr){

// }

// function printValueOfEvenINdexesFromArray(arr){

//     for(let i=0;i<arr.length;i++){
//         if([i]%2==0){
//             console.log(arr[i])

//         }

//     }
// }
// printValueOfEvenINdexesFromArray([10,20,"kidus",52,58,77,"done"])

// const calculatPower=(voltage,current)=>{

//         if(isNaN(voltage)||voltage<0){
//             return "Enter a valid number on voltage"
//         }
//         else if(isNaN(current)||current<0){
//              return "Enter a valid number on current"
//     }else
//     return voltage*current
// }
// console.log(calculatPower(-1,10));

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

/************************************************************************************************* */
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

//let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

// const bahruah = (sampleArray) => {
//   //sampleArray.pop();
//   //console.log(sampleArray);
//   sampleArray.splice(2, 1, "shashe");
//   console.log(sampleArray);
// };
// bahruah([5, 6, 99, 8, 76, 4, 68, 44]);

// let removeLastElementOfArrayAndAddNewValue = (sampleArray, x) => {
//   for (i = 0; i < sampleArray.length; i++) {
//     if (i == sampleArray.length - 1) {
//       sampleArray.splice(i, sampleArray.length, x);
//     }

//     console.log(sampleArray[i]);
//   }
// };
// removeLastElementOfArrayAndAddNewValue([5, 6, 99, 8, 76, 4, 68, 44], 32);
/************************************************************************************************ */
// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

// function sortAnArrayAscendingOrder(sampleArray) {
//   for (i = 0; i < sampleArray.length; i++) {
//     sampleArray.sort((a, b) => a - b);
//     console.log(sampleArray[i]);
//   }
// }
// sortAnArrayAscendingOrder([5, 6, 99, 8, 76, 4, 68, 44]);

// function maxArray(sampleArray) {
//   let max = 0;

//   for (let i = 0; i < sampleArray.length; i++) {
//     if (max < sampleArray[i]) {
//       max = sampleArray[i];
//       return max;
//     }
//   }
// }
// console.log(maxArray([5, 6, 99, 8, 76, 4, 68, 44]));

// function sortGreatest(arr) {
//   // manually sort array from largest to smallest:
//   
//   for (let i = 0; i < arr.length; i++) {
//     
//     
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i]; 
//         arr[i] = arr[j]; 
//         arr[j] = temp; 
//       }
//     }
//   }
//   return arr;
// }

// console.log(sortGreatest([5, 6, 99, 8, 76, 4, 68, 44]));

// Sorting Least to Greatest
// function sortLeast(arr) {
//   // manually sort array from smallest to largest:
//  
//   for (let i = arr.length-1; i >= 0; i--) {
//    
//     for (let j = i; j >= 0; j--) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       };
//     };
//   };
//   return arr;
// };
// console.log(sortLeast([5, 6, 99, 8, 76, 4, 68, 44]));

/*
// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
*/
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
/************************************************************************************************ */
// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change
// */
// let changeLentgthOfCoursTo5Month = () => {
//   let newObject = (evangadiClass.lengthOfCourse = "5 Month");
//   console.log(newObject);
//   console.log(evangadiClass);
// };
// changeLentgthOfCoursTo5Month();
/**************************************************************************************************** */
// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
// let addBootstrapToTopicCoverd =()=>{
//     evangadiClass.topicsCovered.push("Bootstrap");
//     console.log(evangadiClass.topicsCovered);
// }
// addBootstrapToTopicCoverd()
/*********************************************************************************************************** */
// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

// const printAverageEvangadiClasAge = () => {
//   //let ave;
//   let sum = 0;
//   //   let sum = evangadiClass.students.reduce((a, b) => {
//   //     return a + b.age;

//   //   }, 0);

//   evangadiClass.students.forEach((element) => {
//     sum += element.age;
//   });
//   console.log(sum);
// };
// printAverageEvangadiClasAge();

// const pritAverageAgeFromEvangadiStundents = () => {
//   let avg;
//   let sum = 0;
//   let arrLenth = evangadiClass.students.length;
//   for (let i = 0; i < arrLenth; i++) {
//     sum += evangadiClass.students[i].age;
//     avg = sum / arrLenth;
//     console.log(sum);
//   }

//   console.log(sum);
//   console.log(avg);
// };
// pritAverageAgeFromEvangadiStundents();
//*************************************************************************************************************** */
// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console

// const printPercentageOfMaleEvangadiStudents = () => {
//   let p = 0;
//   let arryLength = evangadiClass.students.length;
//   let numberOfMaleStudent = evangadiClass.students.filter(
//     (maleStudent) => maleStudent.sex === "M"
//   );
//   totalMale = numberOfMaleStudent.length;
//   p = (totalMale / arryLength) * 100;
//   return p;
//   console.log(totalMale);
// };
// let perc = printPercentageOfMaleEvangadiStudents();
// console.log(perc + "% of Evangadi students are male");
// Puzzles
// *******
// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

// const lowAndHighNumber = (lowerNumber, higherNumber) => {
//   let container = [];
//   for (i = lowerNumber; i <= higherNumber; i++) {
//     container.push(i);
//     if (i % 3 == 0) {
//       container.push("div3");
//     }
//   }
//   return container;
// };
// let div3 = lowAndHighNumber(2, 10);
// console.log(div3);

//#############################################################################
// const lowAndHighNumber = (num1, num2) => {
//   //   let container = [];
//   if (typeof num1 !== "number" && typeof num2 !== "number") {
//     return "please provide a valid number for both arguments";
//   }
//   if (typeof num1 !== "number" && typeof num2 == "number") {
//     return "please provide a valid number for the first argument";
//   }
//   if (typeof num1 == "number" && typeof num2 !== "number") {
//     return "please provide a valid number for the second argument";
//   }
//   if (num1 < num2) {
//     for (i = num1; i <= num2; i++) {
//       console.log(i);
//       //   container.push(i);
//       if (i % 3 == 0) {
//         console.log("div3");
//         // container.push("div3");
//       }
//     }
//   } else {
//     for (i = num2; i <= num1; i++) {
//       console.log(i);
//       //   container.push(i);
//       if (i % 3 == 0) {
//         console.log("div3");
//         // container.push("div3");
//       }
//     }
//   }
//   //   return container;
// };
// let div3 = lowAndHighNumber(3, 9);
// console.log(div3);
// ###########################################################################################
// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".
// const fizzBuzz = () => {
//   let arrHolder = [];
//   for (i = 0; i <= 100; i++) {
//     //
//     if (i % 3 === 0 && i % 5 === 0) {
//       arrHolder.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arrHolder.push("Fizz");
//     } else if (i % 5 === 0) {
//       arrHolder.push("Buzz");
//     } else {
//       arrHolder.push(i);
//     }
//   }
//   return arrHolder;
// };
// let result = fizzBuzz();
// console.log(result);
//###################################################################################
// const fizzBuzz = () => {
//   for (i = 0; i <= 100; i++) {
//     //
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// let result = fizzBuzz();

//######################################################################################

// Question 17: Evens number/ even digit
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.
// const isEven = (num) => {
//   let even = 0;
//   let odd = 0;
//   let x = num.toString();

//   for (i = 0; i < x.length; i++) {
//     if (x.charAt(i) % 2 == 0) {
//       even += 1;
//     } else {
//       odd += 1;
//     }
//   }
//   if (even % 2 == 0 && odd % 2 != 0) {
//     console.log(0);
//   } else console.log(1);
// };
// isEven(2882468);

/*

advanced Algorithm
*/
// Advanced JavaScript Algorithms - practice exercise
// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// */
// /*
// //even index and even element => store them on temp array variable: this our target
// //declare a function
// //need to loop through the array
// //check the condtion if  the index and the element are even
// //create a temp variable and store the element  on it

// */
// // function evenIndexOfEvenElement(arr) {
// //   let temp = [];
// //   for (i = 0; i < arr.length; i++) {
// //     if (i % 2 == 0 && arr[i] % 2 == 0) {
// //       temp.push(arr[i]);
// //     }
// //   }
// //   return temp;
// // }
// // let result = evenIndexOfEvenElement([1, 2, 3, 6, 4, 8]);
// // console.log(result);
// //○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// //○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// // const printEvenElementOnEvenIndex = (arr) => {
// //   let evenElements = [];

// //   for (i = 0; i < arr.length; i++) {
// //     if (i % 2 == 0 && arr[i] % 2 == 0) {
// //       evenElements.push(arr[i]);
// //     }
// //   }
// //   return evenElements;
// // };
// // let result = printEvenElementOnEvenIndex([1, 2, 3, 6, 4, 8]);
// // console.log(result);

// // let evenElementOnEvenIndex = () => {
// //   const arr = [1, 2, 3, 4, 5, 6];

// //   for (num of arr) {
// //     if (num % 2 === 0) {
// //       // 0 for even numbers and 1 for odd numbers.
// //       console.log(num);
// //     }
// //   }
// // };

// // evenElementOnEvenIndex();

// //*********************************************************** */
// // const printEvenElementOnEvenIndex = (arr) => {
// //   let evenElements = [];
// //   if (Array.isArray(arr) && arr.length !== []) {
// //     for (i = 0; i < arr.length; i++) {
// //       if (i % 2 == 0) {
// //         if (arr[i] % 2 == 0) {
// //           evenElements.push(arr[i]);
// //         }
// //       }
// //     }

// //     return evenElements;
// //   } else if (evenElements.length === []) {
// //     return "no even element on even index";
// //   } else return "please provid array";
// // };
// // let result = printEvenElementOnEvenIndex([1, 3, 5, 8, 11, 88]);
// // console.log(result);

// /*
// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

// // target => if the given number is gerter than the revesed one print OK print not OK if not
// // create a function name revesed number
// // for loop to loop through the digits
// //
// */
// // function reev(n) {
// //   let rev = 0;
// //   let rem;

// //   while (n != 0) {
// //     rem = n % 10;
// //     rev = rev * 10 + rem;
// //     n = Math.floor(n / 10);
// //     console.log(rev);
// //     return n > rev ? "Okay" : "Not Okay";
// //   }
// // }

// // console.log(reev(123));

// // const reverse = (num) => parseInt(String(num).split("").reverse().join(""), 10);
// // console.log(reverse(123));

// /*
// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

// /*/

// // const printFactorial = (num) => {
// //   let result = 1;
// //   if (typeof num === "number") {
// //     for (i = 2; i <= num; i++) {
// //       result = result * i;
// //     }
// //     return result;
// //   } else return "please enter valid input";
// // };
// // console.log(printFactorial());

// // recresion

// // function factorial (num){
// //   if(num<=0){
// //     return 1}
// //   return num*factorial(num-1)
// // }
// // console.log(factorial(5));
// /*
// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

// */

// // const meeraArray = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //       if (arr[i] == 2 * arr[j]) {
// //         console.log(arr[i] == 2 * arr[j]);
// //         return "I am not meera array";
// //       }
// //     }
// //   }
// //   return "meera aray";
// // };

// // console.log(meeraArray([1, 9, 4, -3]));

// /******
//  * Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.*/

// // function isDual(arr) {
// // 	let occ;
// // 	for (let i = 0; i < arr.length; i++) {
// // 		occ = 0;
// // 		for (let j = 0; j < arr.length; j++) {
// // 			if (arr[i] == arr[j]) {
// // 				occ++;
// // 			}
// // 		}
// // 		if (occ != 2) {
// // 			console.log(`${arr[i]} is occured ${occ} times`);
// // 			return 0;
// // 		}
// // 	}
// // 	return 1;
// // }

// // console.log(isDual([2, 5, 5]));

// // const findDuplicates = (nums) => {
// //   //To store the numbers that appeared twice
// //   let result = [];

// //   //Itearte each element
// //   nums.forEach((val, ind, arr) => {
// //     //Use the value as index
// //     let temp = Math.abs(arr[ind]) - 1;

// //     //If the number is already negative
// //     //That means it has appeared once and this is its second time.
// //     //So add it in the result
// //     if (arr[temp] < 0) {
// //       result.push(temp + 1);
// //     }

// //     //Multiply the element at the given index with negative number
// //     arr[temp] *= -1;
// //   });
// //   return result.length == nums.length / 2 ? "Dual array" : "Not Dual Array";

// //   return result;
// // };
// // console.log(findDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));

// /*
// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day
//  */
// // function convertsecondsToHMS(sec) {
// //   sec = Number(sec);

// //   let day = Math.floor(sec / (3600 * 24));
// //   let hours = Math.floor((sec % (3600 * 24)) / 3600);
// //   let minutes = Math.floor((sec % 3600) / 60);
// //   let seconds = Math.floor(sec % 60);

// //   if (day > 0) {
// //     day = day + " day";
// //     if (hours > 23) {
// //       hours = hours % 24;
// //     }
// //     if (hours < 10) {
// //       hours = "0" + hours;
// //     }
// //     if (minutes < 10) {
// //       minutes = "0" + minutes;
// //     }
// //     if (seconds < 10) {
// //       seconds = "0" + seconds;
// //     }
// //     return hours + ":" + minutes + ":" + seconds;
// //   } else {
// //     return hours + ":" + minutes + ":" + seconds;
// //   }
// // }
// // console.log(convertsecondsToHMS("86000"));

// //*****************hidden word************************************************************* */

// //
// // function hiddemWord(word) {
// //   let expected = "";

// //   for (let i = 0; i < word.length; i++) {
// //     let character = word.charAt(i);
// //     if (character == character.toLowerCase(i)) {
// //       expected += character;
// //     }
// //   }
// //   return expected;
// // }
// // console.log(hiddemWord("HlHIIoYIYIHvYHEUHe''YyHOJOJFoOFJUu"));

// //**************ANOTHER WAY*************** */
// // function hiddemWord(word) {
// //   let expected = "";

// //   for (let i = 0; i < word.length; i++) {
// //     let myword = word.charCodeAt(i);
// //     //console.log(myword);
// //     if (myword >= 97 && myword <= 120) {
// //       myword = String.fromCharCode(myword);
// //       expected += myword;

// //       //console.log(expected);
// //     }
// //   }
// //   return expected;
// // }
// // console.log(hiddemWord("HbHIIeYIYIHtYHEUtHy"));

// //******************************************************************************* */

// /****************************************************************************** */

// // function equilibrium(arr) {
// //   var leftsum, rightsum;
// //   if (arr.length % 2 == 0) {
// //     return "No Equilibrium index";
// //   } else
// //   /*Check for indexes one by one until
// //          an equilibrium index is found*/
// //     for (let i = 0; i < arr.length; ++i) {
// //       /*get left sum*/
// //       leftsum = 0;
// //       for (let j = 0; j < i; j++) leftsum += arr[j];

// //       /*get right sum*/
// //       rightsum = 0;
// //       for (let j = i + 1; j < arr.length; j++) rightsum += arr[j];

// //       /*if leftsum and rightsum are same,
// //               then we are done*/
// //       if (leftsum == rightsum) return i;
// //     }

// //   /* return  no equilibrium index is found*/
// //   return "No equilibrium index found";
// // }
// // // Driver code

// // console.log(equilibrium([10, 12, 5, 8, 9, 2, 11, 12, 10]))

// const maxMin = (arr) => {
//   var min = arr[0];
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   console.log([max, min]);
// };
// maxMin([1, 5, 9, 44, 92]);

// const fact = (x) => {
//   let out = [];
//   for (let i = 1; i <= x / 2; i++) {
//     if (x % i == 0) {
//       out.push(i);
//     }
//   }
//   out.push(x);
//   console.log(out);
// };
// fact(100);

// const splitNumber = (num) => {
//   if (Number.isInteger(num)) {
//     if (num > 0 && num % 2 == 0) {
//       console.log(num / 2, num / 2);
//     } else if (num % 2 !== 0) {
//       console.log(Math.floor(num / 2), Math.ceil(num / 2));
//     }
//   } else {
//     console.log("please enter integer number");
//   }
// };

// splitNumber(9);

// function median(numbers) {
//   // const sorted = Array.from(numbers).sort((a, b) => a - b);
//   const middle = Math.floor(numbers.length / 2);

//   if (numbers.length % 2 === 0) {
//     return (numbers[middle - 1] + numbers[middle]) / 2;
//   }

//   return numbers[middle];
// }

// console.log(median([4, 5, 7, 2, 1, 33]));
// let m = "";
// for (let i = 1; i <= 5; i++) {
//   let n = "";
//   let b = "";
//   let c = "";

//   for (let j = 1; j <= 5; j++) {
//     n = n + j;
//     c = c + i;
//     b = b + "*";
//   }
//   m += n + "|" + b + "|" + c + "\n";
// }

// console.log(m);
