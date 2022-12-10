// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
					// All Algorithm Collections
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						// Question 1
//=====================================================================================================================================
// // ● Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.
//=====================================================================================================================================

						// // ===============================
						// //         Answer
						// // ===============================

function int10() {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
}
int10();

function printFirstTenNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printFirstTenNumbers();

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						 // Question 2
//=====================================================================================================================================

// // ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// // console. Note: each output should be displayed on a new line.
// // ○ Test case: If you give 7 to the function, output should look like this:
// // 8
// // 9
// // 10
// // 11
// // 12
//=====================================================================================================================================
					// // =============================
					// //         Answer
					// // =============================

function print(x) {
  if (typeof x == "number") {
    for (i = x + 1; i <= x + 5; i++) {
      console.log(i);
    }
  } else {
    console.log("error");
  }
}
print("hi");

const printNextFiveNumbers = (num) => {
  if (typeof (num !== "number"))
    for (let i = num + 1; i <= num + 5; i++) {
      console.log(i);
    }
};
printNextFiveNumbers(30);

var printNextFiveWhileLoop = (num) => {
  if (typeof (num !== "number")) {
    let i = num + 1;
    while (i <= num + 5) {
      console.log(i);
      i++;
    }
  } else {
    console.log("please enter a number");
  }
};
printNextFiveWhileLoop(10);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							// //Question 3
//=====================================================================================================================================
// // ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// // given number.
// // ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+ 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
//=====================================================================================================================================
						// // =============================
						// //         Answer
						// // =============================

function sumNext(x) {
  let sum = 0;
  for (i = x + 1; i <= x + 10; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sumNext(7);

function sumNext5(y) {
  if (typeof y == "number") {
    let sum = 0;
    for (i = y + 1; i <= y + 10; i++) {
      sum = sum + i;
    }
    console.log(sum);
  } else {
    console.log("error");
  }
}
sumNext5(-7);
sumNext5("hi");

const printSumOfTenNumbers = (num) => {
  if (typeof num === "number") {
    for (let i = num + 1; i <= num + 10; i++) {
      sum += i;
    }
    var sum = 0;
  } else {
    return "please Enter a number";
  }

  return sum;
};
let result = printSumOfTenNumbers("op");
console.log(result);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//   Question 4
//=====================================================================================================================================

// // ● Write a function that takes an array as an argument and prints every element of the array on the console.
// // ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// // 1
// // Hello
// // 8
// // 44
//=====================================================================================================================================

						// // =============================
						// //         Answer
						// // =============================

function arryPrint(x) {
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}
arryPrint([1, "Hello", 8, 44]);

let arr = [1, "Hello", 8, 44];

for (let i of arr) {
  console.log(i);
}
let printAllArray = (i) => i;
printAllArray();

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//  Question 5
//=====================================================================================================================================

// // ● Write a function that takes an array as an argument and prints the total number of elements found in the array. 
// // Hint: use a property of the Array object to solve this question.
// // ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// // ○ Test case 2: Given the array a = ["world", 13], output should be: 2
//=====================================================================================================================================

					// // =============================
					// //         Answer
					// // =============================

// function arrylength(x) {
// 	console.log(x.length);
// }
// arrylength([1, "Hello", 8, 44]);

function findLengthOfArray(myArray) {
  console.log(myArray.length);
}
findLengthOfArray([2, "hello", "my", "name is", "kidus"]);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//   Question 6
//=====================================================================================================================================

// //     ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// //     all the numbers in the array.
// //     ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// //     should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// //     ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// //     3 + 0
//=====================================================================================================================================
					// // =============================
					// //         Answer
					// // =============================

function arrySum(y) {
  var y = [5, 6, 99, 8, 76, 4, 68, 44];
  let sum = 0;
  for (i = 0; i <= 7; i++) {
    sum = sum + y[i];
  }
  return sum;
}
// console.log(arrySum())

// *************************************************** OR *******************************************************************************

function arrySum(y) {
  let sum = 0;
  for (let i = 0; i < y.length; i++) {
    if (typeof y[i] !== "number") {
      continue;
    }
    sum = sum + y[i];
  }
  console.log(sum);
}
arrySum([5, 6, 99, 8, 76, 4, 68, 44]);
arrySum([5, 6, 99, 8, 76, 4, 68, 44, "99", 56]);
arrySum([5, 6, 99, 8, 76, 4, 68, 44, "99", 56]);

function add(new_element) {
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    arr.push(new_element);
  }

  return arr;
}

console.log(add("a"));

// *************************************************** OR *******************************************************************************

const workye = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    var newArr = arr.filter((hr) => typeof hr === "number");
    sum = sum + newArr;
  }
  return sum;
};

console.log(workye([5, 6, 99, 8, 76, 4, 68, 44, "hello"]));

// *************************************************** OR *******************************************************************************

function printTheSumOfArray(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i] === "number")) {
      sum += arr[i];
    } else {
      console.log("enter numbers in your array");
      break;
    }
  }
  console.log(sum);
}
printTheSumOfArray([10, 20, 30]);
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//    Question 7
//=====================================================================================================================================

// //     ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all  odd numbers 
// //    of the array from the total sum of all even numbers and logs the result in the console.
// // ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// //     should be: 102
// //     ■ Sum of odd numbers: 5 + 99 = 104
// //     ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// //     ■ Difference between total even and total odd numbers: 206 - 104 = 102
//=====================================================================================================================================

						// // =============================
						// //         Answer
						// // =============================

const subtracts = (array) => {
 	let sumEven = 0;
 	let sumOdd = 0;

 	for (let i = 0; i < array.length; i++) {
 		// let difference = sumEven - sumOdd;
 		if (array[i] % 2 == 0) {
 			sumEven = sumEven + array[i];
 		} else {
 			sumOdd = sumOdd + array[i];
 		}
 	}
 	let difference = sumEven - sumOdd;
 	console.log(difference);
 };
subtracts([5, 6, 99, 8, 76, 4, 68, 44]);
// *************************************************** OR *******************************************************************************

// // // ibro7
// function EvenOdd(arr) {
// 	let evenTotal = 0;
// 	let oddTotal = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == "number") {
// 			if (arr[i] % 2 == 0) {
// 				evenTotal = evenTotal + arr[i];
// 			} else {
// 				oddTotal = oddTotal + arr[i];
// 			}
// 		} else {
// 			console.log("insertNumericvalueonly");
// 			console.log(`'${arr[i]}'isnotanumberatindex${i}`);
// 			return;
// 		}
// 	}
// 	let result = evenTotal - oddTotal;
// 	console.log(`theresultis${result}`);
// }
// EvenOdd([5, 6, "abebe", 8, 7, 4, 68, 44]);
// *************************************************** OR *******************************************************************************

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

// *************************************************** OR *******************************************************************************

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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							//   Question 8
//=====================================================================================================================================

// //     ● Write a function that takes an array as a parameter and logs in the console the elements that have
// //     even indexes only. Notice: this question is not asking you to log elements with even value, but
// //     elements that are located on even indexes)
// //     ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// //     should be:
// //     5
// //     99
// //     76
// //     68
// //     ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// //     be:
// //     11
// //     3
// //     car
//=====================================================================================================================================
						 // // =============================
						// //         Answer
						// // =============================
function evenIndex(arr) {
 	for (let i = 0; i <= arr.length; i++) {
 		if (i % 2 == 0) {
 			console.log(arr[i]);
 		}
 	}
 }
 evenIndex([11, "Sam", 3, 7, "car"]);
 evenIndex("Marew");

// const bokore = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) //any conditon true
//     {
//       console.log(arr[i]);
//     }
//   }
// };
// // bokore([11, "Sam", 3, 7, "car"]);

// *************************************************** OR *******************************************************************************

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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			// // Questions 9 and 10 are dependent on the sampleArray provided below:
//=====================================================================================================================================

// // let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// // Question 9
// // Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// // adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
//=====================================================================================================================================
						 // // =============================
						// //         Answer
						// // =============================

 let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

 function removeAdd() {
 	sampleArray.pop();
 	console.log(sampleArray);
 	sampleArray.push(32);
 	console.log(sampleArray);
 }
removeAdd();

// *************************************************** OR *******************************************************************************

// function removeAdd1() {
// 	sampleArray.splice(sampleArray.length - 1, 1, 32);
// 	console.log(sampleArray);
// }
// removeAdd1();

// *************************************************** OR *******************************************************************************

// From Ibrahim to Everyone 06:34 PM
// const arr = ['a', 'b', 'c', 'd'];

// Remove 1 element starting at index 2
// arr.splice(2, 1);

// arr; // ['a', 'b', 'd']
// const arr = ['a', 'b', 'd'];

// let start = 2;
// let deleteCount = 0;
// arr.splice(start, deleteCount, 'c');

// arr;  ['a', 'b', 'c', 'd'];

// *************************************************** OR *******************************************************************************

// const bahruah = (sampleArray) => {
//   //sampleArray.pop();
//   //console.log(sampleArray);
//   sampleArray.splice(2, 1, "shashe");
//   console.log(sampleArray);
// };
// bahruah([5, 6, 99, 8, 76, 4, 68, 44]);

// *************************************************** OR *******************************************************************************

// let removeLastElementOfArrayAndAddNewValue = (sampleArray, x) => {
//   for (i = 0; i < sampleArray.length; i++) {
//     if (i == sampleArray.length - 1) {
//       sampleArray.splice(i, sampleArray.length, x);
//     }

//     console.log(sampleArray[i]);
//   }
// };
// removeLastElementOfArrayAndAddNewValue([5, 6, 99, 8, 76, 4, 68, 44], 32);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							// //  Question 10
//=====================================================================================================================================

// //     ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array
// //      on the console Use the sort method. Make sure you understand just using the sort() method alphabetically.
// //     You should use this sorting syntax - sort(function (a, b) { return a - b });
//=====================================================================================================================================
						 // // =============================
						// //         Answer
						// // =============================

 function sortElement(sampleArray) {
 	for (let i = 0; i < sampleArray.length; i++) {

 	}
 	console.log(sampleArray.sort((a, b) => a - b));
 	};
 sortElement([5, 6, 99, 8, 76, 4, 68, 44])

// *************************************************** OR *******************************************************************************

// function sortAnArrayAscendingOrder(sampleArray) {
// 	for (i = 0; i < sampleArray.length; i++) {
// 		sampleArray.sort((a, b) => a - b);
// 		console.log(sampleArray[i]);
// 	}
// }
// sortAnArrayAscendingOrder([5, 6, 99, 8, 76, 4, 68, 44]);

// *************************************************** OR *******************************************************************************

// function maxarray(array) {
// 	let max = 0
// 	for (let i = 0; i < array.length; i++) {
// 		if (max<array[i]) {
// 			max = array[i];
// 			return max;
// 		}

// 	}
// }
// console.log(maxarray([5, 6, 99, 8, 76, 4, 68, 44]));

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						// // Questions on JavaScript objects
// // *********************************************************************************************************************************
// // The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							//   Question 11
//=====================================================================================================================================

// // ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console
// // ○ // Use the dot notation "." to call the property you want to change
//=====================================================================================================================================
// function propertyOfTheObject() {
// 	let n=evangadiClass.lengthOfCourse = "5 month";
// 	console.log(n);
// 	console.log(evangadiClass)
// }
// propertyOfTheObject()

// *************************************************** OR *******************************************************************************
// function propertyOfTheObject() {
// for (let x in evangadiClass) {
// 	if (x === "lengthOfCourse") {
// 		evangadiClass[x] = "5 month"
// 		console.log(evangadiClass)
// 	}

// }
// }
// propertyOfTheObject()

// let changeLentgthOfCoursTo5Month = () => {
//   let newObject = (evangadiClass.lengthOfCourse = "5 Month");
//   console.log(newObject);
//   console.log(evangadiClass);
// };
// changeLentgthOfCoursTo5Month();

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							//   Question 12
//=====================================================================================================================================				
// // ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console
// // ○ // Use an array method
//=====================================================================================================================================

 let addBootstrapToTopicCoverd =()=>{
     evangadiClass.topicsCovered.push("Bootstrap");
     console.log(evangadiClass.topicsCovered);
 }
 addBootstrapToTopicCoverd()

// *************************************************** OR *******************************************************************************

// for (let x in evangadiClass){
//     if (x=== "topicCovered"){
//         evangadiClass[x][4]= "Bootstrap"
//     }
// }
// console.log(evangadiClass.topicsCovered)

// *************************************************** OR *******************************************************************************

// let addBootstrapToTopicCoverd =()=>{
//     evangadiClass.topicsCovered.push("Bootstrap");
//     console.log(evangadiClass.topicsCovered);
// }
// addBootstrapToTopicCoverd()

// ********************************************** print Average class Age ***************************************************************
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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							//  Question 13
//=====================================================================================================================================
// // ● Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. 
// //  Print the result on the console
//=====================================================================================================================================
 const pritAverageAgeFromEvangadiStundents = () => {
   let avg;
   let sum = 0;
   let arrLenth = evangadiClass.students.length;
   for (let i = 0; i < arrLenth; i++) {
     sum += evangadiClass.students[i].age;
     avg = sum / arrLenth;
     console.log(sum);
   }

   console.log(sum);
   console.log(avg);
 };
 pritAverageAgeFromEvangadiStundents();

// function ageAvg() {
//   let totalAge = 0
//   let arrlength = evangadiClass.students.length
//   for (i = 0; i < arrlength; i++){
//     totalAge = totalAge + evangadiClass.students[i].age;
//   }
// 	let AVG = totalAge / arrlength;
// 	 AVG = math.round(AVG)
//   console.log(AVG)
// }
// ageAvg(evangadiClass)

// function averageAge() {
// 	let sum = 0
// 	let arrlength = evangadiClass.students.length
// 	for (let i = 0; i < arrlength; i++)	{
// 		sum = sum + evangadiClass.students[i].age
// 	}
// 	let ave = sum / arrlength
// 	console.log(ave);
// }
// averageAge()

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							//  Question 14
//=====================================================================================================================================
// // ● Write a function that takes the "evangadiClass" object as an argument and calculates the percentage of male students in the class. 
// //Print the result on the console
//=====================================================================================================================================
 function persentafeOfmale() {
 	let male = 0;
 	let totalStudents = evangadiClass.students.length
 	for (let i = 0; i < totalStudents; i++) {
 		if (evangadiClass.students[i].sex == "M") {
 			male++;
 		}

 	}
 	let percentage = (male / totalStudents)*100
 	console.log(percentage);
 }
 persentafeOfmale();

// *************************************************** OR *******************************************************************************

// function persentafeOfmale() {
// 	let male = 0;
// 	let totalStudents = evangadiClass.students.length;
// 	for (let i = 0; i < totalStudents; i++) {
// 		if (evangadiClass.students[i].sex === "M") {
// 			male++;
// 		}
// 	}
// 	let percentage = (male / totalStudents) * 100;
// 	console.log(percentage);
// }
// persentafeOfmale();

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//  Question 15: Test the divisors of three
//=====================================================================================================================================
// //     ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// //     numbers (on the console) between low and high, and for each of these numbers print
// //     whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.
//=====================================================================================================================================

 function lowHigh(low, high) {
   for (let i = low; i < high; i++) {
     if (i%3==0) {
       console.log(i, "is div by 3")
     } else {
       console.log(i)
     }

   }
 }
 lowHigh(1, 20)

// *************************************************** OR *******************************************************************************
// function test_divisors(low, high) {
// 	var output = [];
// 	for (var i = low; i <= high; i++) {
// 		if (i % 3 === 0) {
// 			output.push(`${i}  div3`);
// 		} else {
// 			output.push(i);
// 		}
// 	}
// 	return output;
// }
// console.log(test_divisors(2, 10));

// *************************************************** OR *******************************************************************************

// const lowAndHighNumber = (num1, num2) => {
//   if (typeof num1 !== "number" && typeof num2 !== "number") {
//     //check if num1 and num2 are numbers or not
//     console.log("please provide a valid number for both arguments");
//     return;
//   } else if (typeof num1 !== "number" ||typeof num1=== "any" &&
//     typeof num2 == "number"
//   ) {
//     //check the first argument is number
//     console.log("please provide a valid number for the first argument");
//     return;
//   } else if (typeof num1 == "number" && typeof num2 !== "number") {
//     //check the second argument is a number
//     console.log("please provide a valid number for the second argument");
//     return;
//   } else {
//     if (num1 < num2) {
//       //check if the num1 is greter than num2 then navigate to the loop
//       for (i = num1; i <= num2; i++) {
//         if (i % 3 === 0) {
//           //if the number is divisible by 3
//           console.log(i, "is divisible by 3");
//         } else {
//           console.log(i);
//         }
//       }
//     }
//   }
// };
// let div3 = lowAndHighNumber(2, 9);


// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
					//  Question 16: The famous coding interview question (FizzBuzz)
//=====================================================================================================================================

//  ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number
// // and for the multiples of five print “Buzz” and fo numbers which are multiples of both three and five print "FizzBuzz".
//=====================================================================================================================================
// function print100(x) {
//   for (let i = 1; i < 100; i++) {
//         if (i % 3 == 0 && i%5 == 0) {
// 					console.log("FizzBuzz");
// 				}else if (i%3==0) {
//       console.log("Fizz");
//     }else if (i % 5 == 0) {
// 			console.log("Buzz");
//     } else {
//       console.log(i)
//     }

//   }
// }
// print100()

// *************************************************** OR *******************************************************************************

// function FizzBuzz() {
// 	for (let i = 0; i <= 100; i++)
// 		console.log(
// 			i % 3 == 0 ? (i % 5 == 0 ? "FizzBuzz" : "Buzz") : i % 5 == 0 ? "Fizz" : i
// 		);
// }
// FizzBuzz();

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//  Question 19: Evens number
//=====================================================================================================================================
// //     ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// //     number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// //     integer argument is an Evens number. The function prints 0 otherwise.
//=====================================================================================================================================
// function isEven(x) {
// 	let oddCounter = 0;
// 	let myNumber = x.toString();
// 	const number = myNumber.split(""); // ['1','2','3','4']
// 	for (let i of number) {
// 		if (((i % 10) + 48 <= 57 && (i % 10) + 48 >= 48) || i[0] == 45) {
// 			// number.charCodeAt(i) >= 48 && charCodeAt(i) <= 57 || charCodeAt(0) == 45
// 			// for (let x of number) {
// 			if (i % 2 !== 0) {
// 				oddCounter++;
// 			} else {
// 				i++;
// 			}
// 			if (oddCounter == 0) {
// 				console.log("1");
// 			} else {
// 				console.log("0");
// 			}
// 		} else {
// 			console.log("the value entered not a number");
// 		}
// 	}
// }

// isEven();

// *************************************************** OR *******************************************************************************

// function getResult(n) {
// 	var st = n.toString();
// 	var even_count = 0;
// 	var odd_count = 0;
// 	for (var i = 0; i < st.length; i++) {
// 		if (st.charAt(i) % 2 == 0) even_count += 1;
// 		else odd_count += 1;
// 	}
// 	if (odd_count>=1) return "0";
// 	else return "1";
// }
// console.log(getResult(32244));
// console.log(getResult(24266575849));

// *************************************************** OR *******************************************************************************

// function isEvens(x) {
//   if (typeof (x) !== "number") {
//     return "error"
//   }
//   else {
//     for (let i = 0; i < x.length; i++) {
//       if (x(i) % 10== 0 && x(i)%2==0) {
//         console.log(1)
//       }
//       else {
//         console.log(0)
//       }
//     }
//   }
// }
// console.log(isEvens(3224));

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
					// Advanced JavaScript Algorithms - practice exercise
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						// Question 1
//=====================================================================================================================================

//Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
//=====================================================================================================================================

// Answer

// 1. create a function that takes one parameter
// 2. base case ... check the array is empty or not // and number // array
// 3. create an empty variable array to store the result
// 4. using for loop iterate all the element
// 5. condition - if the element is even and even index
// 6. push the value in to the variable
// 7. return the result array

function getEvenValue(arr) {
  let result = [];
  if (!Array.isArray(arr) || arr.length == 0) {
    return "please enter the valid array";
  } else {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] % 2 == 0 && index % 2 == 0) {
        result.push(arr[index]);
      }
    }
  }
  if (result.length == 0) {
    return "there is no number in the even index";
  }
  return result;
}

console.log(getEvenValue([0, 1, 2, 3, 4]));

// function cb(el){
//     return el% 2 == 0
// }
// let newArr = num.filter(cb)

// time complexity - O(n)

function evenElementOnEvenIndex(arr) {
  let evens = arr.filter((number) => number % 2 == 0 && arr[number] % 2 == 0);
  console.log(evens);
}

evenElementOnEvenIndex([0, 1, 2, 3, 4]);

//1. function evenIndexElement(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i] % 2 == 0) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// let first = evenIndexElement([1, 2, 3, 6, 4, 8])
// console.log(first)

// *************************************************** OR *******************************************************************************

// function evenIndexElement(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         if (i % 2 == 0 && arr[i] % 2 == 0) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// let first = evenIndexElement([1, 2, 3, 6, 4, 8])
// console.log(first)

// *************************************************** OR *******************************************************************************

// function evenIndexElement(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i= i+2){
//         if ( arr[i] % 2 == 0) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// let second = evenIndexElement([10, 2, 3, 6, 4, 8])
// console.log(second)

// *************************************************** OR *******************************************************************************

// function evenIndexElement(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         (i % 2 == 0 && arr[i] % 2 == 0) ?
//             result.push(arr[i]):null // return no even elements

//     }
//     if (result.length == 0 || result == []) {
//         return " no value to show"
//     }
//     return result
// }
// let first = evenIndexElement([1, 2, 3, 6, 4, 8])
// console.log(first)
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							// Question 2
//=====================================================================================================================================
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
//=====================================================================================================================================

function checkReversedValue(num) {
  let num1 = Math.round(num);
  if (num < 10) {
    return "single element" + " " + num1;
  }
  let reversed = 0;
  if (typeof num1 == "number") {
    let reminders = num1 % 10;

    while (num1 !== 0 && num1 > 9) {
      reversed = reversed * 10 + reminders;
      num1 = Math.floor(num / 10);

      return num1 > reversed ? "okay" : "not okay";
    }
    console.log(reversed);
  }
}

// console.log(checkReversedValue(2.2))

// *************************************************** OR *******************************************************************************

// 2. function reev(n) {
//     let rev = 0
//     let rem

//     while (n != 0) {
//         rem = n % 10
//         rev = rev * 10 + rem
//         n = Math.floor(n / 10)
//         return n > rev ? "ok" : "not ok"
//     }

// }
// console.log(alert('hello'));

// *************************************************** OR *******************************************************************************

// function reev(n) {
//     let reverse = 0
//     let reminder
//     while (n !== 0) {
//         reminder = n % 10
//         reverse = (reverse * 10) + reminder
//         n = Math.floor(n / 10)
//         return n > reverse ? "Ok": "Not Ok"

//     }
// }
// console.log(reev(72));

// *************************************************** OR *******************************************************************************

// function checkReverse(num) {
//   if (typeof num == "number") {
//     let num1 = Math.round(num);
//     if (num < 10) {
//       return num1 + " is not double digit";
//     }
//     let reversed = 0;
//     let reminder = num1 % 10;

//     while (num1 !== 0) {
//       reversed = reversed * 10 + reminder;
//       num1 = Math.floor(num1 / 10);
//       return num1 > reversed ? "okay" : "not okay";
//     }
//   }
// }
// console.log(checkReverse(7.2));

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						// Question 3
//=====================================================================================================================================
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1
//=====================================================================================================================================

					// **************************************************
					// Answer
					// **************************************************
function factorial(num) {
  if (Number.isInteger(num) && num >= 0) {
    let result = 1;
    for (let i = 1; i <= num; i++) result = result * i;
    console.log(result);
  }
}
// factorial(5);
// factorial(6);
// factorial(0);

////////********************* */
// recursion

function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(14));

//=====================================================================================================================================

function factorial(n) {
  var result = n;
  if (n < 0) {
    return null;
  }
  if (n === 1 || n === 0) {
    return 1;
  } else {
    while (n >= 2) {
      result = result * (n - 1);
      n--;
    }
    return result;
  }
}

// console.log(factorial(5));

//=====================================================================================================================================

function factorial(n) {
  let output = 1;
  for (let i = 2; i <= n; i++) {
    output = i * output;
  }
  return output;
}
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(0));

// other way

// function factorial(x) {
//     if (x > 0 && x <= 1) {
//         return 1
//     } else
//         return x * factorial(x - 1)
// }

// console.log(factorial(5))

// other way

// function factorial(z) {
//     let output = 1
//     if (z < 0) {
//         return "only postive numbers"
//     }
//     for (i = z; i >= 2; i--){
//         output = output * i
//          }
//     return output
// }

// console.log(factorial(5))

// other way

// function factorial(n) {

// 	    if (n > 0 && n<=1) {
// 	       return 1
// 	    }else{
//  return n *factorial(n - 1)
//    }
//

// 	}

// 	console.log(factorial(5))

// other way
// function factor(n) {
//     let value = n
//     if (n < 0) {
//         return "null"
//     } if (n === 1 || n === 0) {
//         return 1
//     }
//     if (n >= 2) {
//         return n *factor(n - 1)
//     }
// }
// console.log(factor(6))
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						// Question 4 (Meera array)
//=====================================================================================================================================
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
//=====================================================================================================================================

					// *********************************************
					// Answer
					// *********************************************

// 1.create a function
// 2. create a for loop
// 3. the loop must check each element in the array
// 4.

const meeraArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == 2 * arr[j]) {
        return "I am not meera array";
      }
    }
  }
  return "meera array";
};

// console.log(meeraArray([10, 4, 0, 5]))

// ************************************************************************************************************************************

function MeeraArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] * 2) {
        return "not meera array";
      }
    }
  }
  return "meera Array";
}

// console.log(MeeraArr([10, 4, 0, 5]))

// ************************************************************************************************************************************

function isMarra(arr) {
  if (!Array.isArray(arr)) {
    return "invalid input";
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      return "all input must be a number";
    }
    let check = arr.includes(2 * arr[i]);
    if (check) {
      return "im not Merra arr";
    }
  }
  return "im Merra arr";
}

// console.log(isMerra([10, 4, 0, 5]))

// ***********************************************************************************************************************************

// function meeraArray(arr) {
//     if (arr.length === 0) {
//         return "insert a number value in the array";
//     }
//     let product = 0;
//     for (let value of arr) {
//         if (isNaN(value)) {
//             return "insert only numbers";
//         }
//         product = value * 2;
//         if (product === value) {
//             return "i am not meera array";
//         }
//     }
//     return "i am meera array";
// }
// function meeraArray(x) {
//     for (i = 0; i < x.length; i++){
//         for (k = i; k < x.length; k++){
//             if (x[i] == (2 * x[k])) {
//                 return "I am NOT a Meera array"
//             }
//         }
//     }
//     return "I am a Meera array"
// }

// console.log(meeraArray([7, 4, 9]))
// console.log(meeraArray([1, -6, 4, -3]))

//another way

// function meeraArray(arr) {
//   if (arr.length === 0) {
//     return "insert a number value in the array";
//   }
//   let product = 0;
//   for (let value of arr) {
//     if (isNaN(value)) {
//       return "insert only numbers";
//     }
//     product = value * 2;
//     if (product === value) {
//       return "i am not meera array";
//     }
//   }
//   return "i am meera array";
// }

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						// Question 5 (Dual array)
//=====================================================================================================================================

// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
//=====================================================================================================================================

					// *********************************************
					// Answer
					// *********************************************

function checkDualArr(arr) {
  if (arr.length % 2 == 1) {
    console.log(
      "the array looks like not dual arr because of the length of the array"
    );
  } else {
    for (i = 0; i < arr.length; i++) {
      sortArr = arr.sort();
      // return sortArr
      for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] == sortArr[i + 1] && sortArr[i] !== sortArr[i + 2]) {
          return "the are is Dual Arr";
        } else {
          return "the array is a Dual array";
        }
      }
    }
    return;
  }
}
//*************************************************************************************************************************************

function dual(arr) {
  for (let k = 0; k < arr.length; k++) {
    let occ = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[k] == arr[i]) {
        occ++;
      }
    }
    if (occ != 2) {
      return "not dual";
    }
  }
  return "dual arr";
}
// ************************************************************************************************************************************

function dualArray(arr) {
  let container = [];
  let count = 1;
  if (!Array.isArray(arr) && arr.length == 0) {
    return "Please enter only an array";
  } else if (arr.length % 2 !== 0) {
    return "length has to be even";
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        } else {
          container.push(count);
        }
      }
    }
    for (let i = 0; i < container.length; i++) {
      if (container[i] == 2) {
        return "Dual";
      } else if (container[i] > 2 || container[i] < 2) {
        return "Not Dual";
      }
    }
  }
}

console.log(dualArray([1, 1, 2, 2, 2, 3]));

// To check the performance of the algorithm

// let t0 = performance.now();

// //Calculating performance after the loop is executed
// let t1 = performance.now();

// console.log("call to the above function took"
//     + (t1 - t0) + "milliseconds");

// function Dual(c) {
//   if (c.length % 2 == 1) {
//     return " the array length must be even";
//   } else {
//     for (let i = 0; i < c.length; i++) {
//       c = c.sort();
//     }

//     if (c[i] == c[i + 1] && c[i] !== c[i + 2]) {
//       return "1 its dual";
//     } else {
//       return " 0 not dual ";
//     }
//   }
// }
// console.log(Dual([1,1,2,2,3,4]))

// function dualArray(arr) {
//   for (let k = 0; k < arr.length; k++) {
//     let occ = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[k] == arr[i]) {
//         occ++;
//       }
//     }
//     if (occ != 2) {
//       return "not dual";
//     }
//     }
//     return "dual array"
// }

// dualArray([1, 8, 2, 2, 3, 4]);

// function dual(arr) {
//     for (i = 0; i < arr.length; i++){
//         let filtered = arr.filter(function (element) { return arr[i] == element })

//         if (filtered.length != 2) {
//             return 0;
//         }
//     }
//     return 1;
// }
// console.log(dual([1, 8, 2, 2, 3, 4]))
// another way

// const dual = (nums) => {
//   let container = [];

//   nums.forEach((val, ind, arr) => {
//     let temp = (arr[ind]) -1

//     if (arr[temp] < 0) {
//       container.push(temp + 1);
//     }
//   arr[temp] *= -1;
//   });
//   console.log(container);
//  if(container.length == nums.length / 2 ){
//     console.log('"dual Array"');
// };
// }
// console.log(dual([1, 1, 2, 2, 3, 3, 4, 4]));

//other way not finished yet

// function dualArray(arr) {
//     let container = []
//     let count = 0
//     if (!(Array.isArray(arr)) && arr.length == 0) {
//         return "Please enter only an array"
//     } else if (arr.length % 2 !== 0) {
//         return "length has to be even"
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length; j++) {
//                 if (arr[i] == arr[j]) {
//                     count++
//                 } else {
//                     container.push(count)
//                 }
//             }
//         } for (let i = 0; i < container.length; i++) {
//             if (container[i] == 2) {
//                 return "Dual"
//             } else if (container[i] > 2 || container[i] < 2) {
//                 return "Not Dual"
//             }
//         }
//     }
// }

// console.log(dualArray([1, 1, 2, 2, 2, 3]));
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
							// Question 6
//=====================================================================================================================================
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
//=====================================================================================================================================

					// ***************************************************
					// Answer
					// ***************************************************
function second(sec) {
  var sec_num = parseInt(sec);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
}

console.log(second(5624));

// ************************************************************************************************************************************

// var sec_num = parseInt(sec);
// var hours = Math.floor(sec_num / 3600);
// var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
// var seconds = sec_num - (hours * 3600) - (minutes * 60);

// function convertsecondsToDHMS(sec) {
//     sec = Number(sec);

//     let day = Math.floor(sec / (3600 * 24));
//     let hours = Math.floor((sec % (3600 * 24)) / 3600);
//     let minutes = Math.floor((sec % 3600) / 60);
//     let seconds = Math.floor(sec % 60);

//     if (day > 0) {
//         day = day + " day";

//         if (hours < 10) {
//             hours = "0" + hours;
//         }
//         if (minutes < 10) {
//             minutes = "0" + minutes;
//         }
//         if (seconds < 10) {
//             seconds = "0" + seconds;
//         }
//         return day + ":" + hours + ":" + minutes + ":" + seconds;
//     } else {
//         return hours + ":" + minutes + ":" + seconds;
//     }
// }
// console.log(convertsecondsToDHMS("87000"));

// const ConvertToHMS = (seconds) => {
//     var date = new Date(null);
//     date.setSeconds(seconds);
//     return date.toISOString().substr(11, 8);
// }
// console.log(ConvertToHMS(87000));

// const convert = (se) => {
//     var tm = new Date(se * 1000).toISOString().substr(11, 8);
//     console.log(tm);
// }
// convert(5025)

// function digital(sec) {
//     let hrs = parseInt(sec / 3600)
//     let min = parseInt(sec - (hrs * 3600) / 60)
//     let sec =parseInt(sec -  )
// }
// digital(200)

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
					// Aditional Questions on Algorithm
//=====================================================================================================================================
//  	   Find the Smallest and Biggest Numbers
//         Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

//=====================================================================================================================================

//     Examples
// minMax([1, 2, 3, 4, 5]) ➞[1, 5]

// minMax([2334454, 5]) ➞[5, 2334454]

// minMax([1]) ➞[1, 1]

function findNumber(arr) {
  if (!Array.isArray(arr)) {
    return "please put an array";
  } else {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log([min, max]);
  }
}

findNumber([1, 2, 3, 4, 5]);

// Time complexity - O(n)


// ************************************************************************************************************************************

function findNumber1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = 0;
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    return arr;
  }

  let min = arr[0];
  let max = arr[arr.length - 1];
  console.log(min, max);
}

findNumber([1, 2, 7, 4, 3]);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
						//  Factorize a Number
//=====================================================================================================================================
// Create a function that takes a number as its argument and returns an array of all its factors.

// factorize(12) ➞[1, 2, 3, 4, 6, 12]

// factorize(4) ➞[1, 2, 4]

// factorize(17) ➞[1, 17]

// Notes
// ➞The input integer will be positive.
// ➞A factor is a number that evenly divides into another
// number without leaving a remainder.
// The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.
//=====================================================================================================================================

function factorize(num) {
  let newNum = Math.abs(num);
  let num2 = newNum / 2;
  let arr = [];
  for (let i = 1; i <= num2; i++) {
    if (num2 % i == 0) {
      arr.push(i);
    }
  }
  arr.push(newNum);
  return arr;
}
console.log(factorize(-12));

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

							//  Number Split
//=====================================================================================================================================

//Given a number, return an array containing the two halves of the number.
// If the number is odd, make the rightmost number higher.

//     Examples
// numberSplit(4) ➞[2, 2]

// numberSplit(10) ➞[5, 5]

// numberSplit(11) ➞[5, 6]

// numberSplit(-9) ➞[-5, -4]

// Notes
// ➞All numbers will be integers.
// ➞You can expect negative numbers too.
//=====================================================================================================================================

function splitNumber(num) {
  if (Number.isInteger(num)) {
    if (num > 0 && num % 2 == 0) {
      console.log(num / 2, num / 2);
    } else if (num % 2 !== 0) {
      console.log(Math.floor(num / 2), Math.ceil(num / 2));
    }
  } else {
    console.log("please enter integer number");
  }
}

splitNumber(-9);

// Find the median of an unsorted array ?
//     Given array[2, 8, 4, 1]
// Output. [6]

function median(m) {
  let a = m.sort((a, b) => a - b);
  let z = Math.floor(a.length / 2);
  if (a.length % 2 == 0) {
    return (a[z - 1] + a[z]) / 2;
  }
  return a[z];
}
// console.log(median([8, 3, 11, 4, 1]))
// console.log(median([2, 8, 4, 1]))

// let n = 5; // row or column count
// defining an empty string
let string = "";

for (let i = 1; i < 5; i++) {
  // external loop
  for (let j = 1; j < 5; j++) {
    // internal loop
    string += "*";
    {
      string += i;
      {
        string += j;
      }
    }
  } //
  //

  string += "\n";
}

console.log(string);

// let n = "";
// let b = "";
// let c = "";
// let m = []

// for (let i = 1; i <= 5; i++) {
//     // printing spaces
//     for (let j = 1; j <= 5; j++) {
//         n += "*";
//         b += j;
//         c += i;
//     }

//     n += "|" + b + "|" + c + "\n";
//     break;
// }
// m = n + "|" + b + "|" + c;
// console.log(m);

let n = "";
let k = "";
let r = "";
let n2 = [];
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 1; j++) {
    n += "*";
    k += j;
    r += i;
  }
}
n2.push(n);
// n = "";
n2.push(k);
n2.push(r);
let m = `${n} | ${k} | ${r}`;
for (let i = 0; i < 5; i++) {
  console.log(`${i}          ${m}`);
}

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	// 1. Given an array that contains exactly 1 duplicate number.find that duplicate.

	//     given: -[5, 1, 4, 3, 1, 2]
	//     output: -[1]

//********************************************** Using two pointers****************************************************************** */


function findDup(arr) {
  output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        output.push(arr[i]);
      }
    }
  }
  console.log(output);
}

// findDup([5, 1, 4, 3, 1, 2, 3])

// Time complexity - O(n2)
//Space Complexity - O(1)

//********************************************** sort ****************************************************************************** */

// first sort the Array
// then compare with the adjacent element

function findDup1(arr) {
  let sortArr = arr.sort();
  let dup = [];
  for (let i = 0; i < sortArr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      dup.push(arr[i]);
    }
  }
  console.log(dup);
}
// findDup1([5, 1, 4, 3, 1, 2, 3])

// Time complexity - O(nlogn)
//Space Complexity - O(n)

//********************************************** Hash ****************************************************************************** */

// key value
// 5   1
// 1   1   --1
// 4   1
// 3   1   --1
// 2   1

function findDup2(arr) {
  let Hashmap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!Hashmap.has(i)) {
      Hashmap.set(i, 1);
    } else {
      Hashmap.set(i, Hashmap.get(i) + 1);
    }
  }
  for (let i = 0; i < Hashmap.has(); i++) {
    if (Hashmap.get(i > 1)) {
      console.log(i);
    }
  }
}
console.log(findDup2([5, 1, 4, 3, 1, 2, 3]));

//********************************************************************************************************************************* */

// arr = [5, 1, 4, 3, 1, 2, 3]

// result= []
// i=0
// value = Abs(5) = 5
// index = 5 - 1 = 4
// arr[4] <0 ? No
// arr[4] *= -1

// function findDup3(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let value = Math.abs(arr[i]);
//         let index = value - 1
//         if (arr[index] < 0) {
//             result.push(value)
//         } else {
//             arr[index] *= -1
//         }

//     }
//     return result

// }

// console.log(findDup3([5, 1, 4, 3, 1, 2, 3]))

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 2. reverse the whole string ?
//     I / p = "I love icecream"

//     O / p = "maerceci evol I"

//********************************************** for loop **************************************************************************** */
function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  console.log(reverse);
}

reverseString("I love icecream");

// Time complexity - O(n)
//Space Complexity - O(1)

//**********************************************  recursion  ************************************************************************* */
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

//********************************************** built in method ********************************************************************** */

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 3. Search an element in an array where the difference between adjacent elements is 1.
// For example: arr[] = { 8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3}  Search for 3 and Output:
// Found at index 7
//=====================================================================================================================================



// Answer not found




// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
				// 4. sort an array of 0's,1's, and 2's in ascending order.
//=====================================================================================================================================

// I / p= [2, 1, 2, 1, 0, 1, 0, 0, 2]
// O / p= [0, 0, 0, 1, 1, 1, 2, 2, 2]
function SortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = 0;
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(SortArr([2, 1, 2, 1, 0, 1, 0, 0, 2]));
// Time Complexity - O(n2)

//********************************************** Using three pointers **************************************************************** */
  
function sortAsc(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  temp = 0;

  while (mid <= high) {
    if (arr[mid] == 0) {
      temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;

      mid++, low++;
    } else if (arr[mid] == 2) {
      temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    } else if (arr[mid] == 1) {
      mid++;
    }
  }
  return arr;
}

console.log(sortAsc([2, 1, 2, 1, 0, 1, 0, 0, 2]));

// time complexity - O(n)

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 5.  Given an array and a number k where k is smaller than the size of the array,
//     we need to find the k’th smallest element in the given array.
//     It is given that all array elements are distinct.

//     Input: arr[] = [ 7, 10, 4, 3, 20, 15]
//          k = 3
//     Output: 7
//=====================================================================================================================================

function KSmallerNumber(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = 0;
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    if ((i = k - 1)) return arr[i];
  }
}

console.log(KSmallerNumber([7, 10, 4, 3, 20, 15], 3));

// Time complexity - O(nlogn)

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//    			                          Advanced Algorithm Collection
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	// 1. find the hidden word in the crowd.
	// hide words - small letter

	// given: -    [HDKLhJLaDGbHGFHsUOOhKJHHaBM]

	//     Output: - habsha

//=====================================================================================================================================

// Define a Function that take a parameter
// create an empty variable

// create a for loop
// Use the charCodeAt() method to get the character code
// loop through into the string
// create if clause to check small letter or not
// concatenate into the variable

function checkHideWord(x) {
  let hide = "";
  for (let i = 0; i < x.length; i++) {
    let getAscii = x.charCodeAt(i);
    if (getAscii >= 97 && getAscii <= 122) {
      hide += x[i];
    }
  }
  console.log(hide);
}

// checkHideWord("HDKLhJLaDGbHGFHsUOOhKJHHaBM")

//********************************************************** OR ******************************************************************** */

// function checkHideWord(x) {
//     let hide = ""

//     for (let i = 0; i < x.length; i++) {
//         let singleLetter = x.charAt(i)
//         if (singleLetter == singleLetter.toLowerCase()) {
//             hide += singleLetter
//         }
//     }
//     console.log(hide)
//     return hide
// }

// checkHideWord("HDKLhJLaDGbHGFHsUOOhKJHHaBM")

//********************************************************** OR ******************************************************************** */

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

//********************************************************** OR ******************************************************************** */

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

// //
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 2. Create a function that returns true if the first array can be nested inside the second.
//     Given: -[1, 2, 3, 4], [0, 6] - true
//     [9, 9, 8], [8, 9] - False

// arr1 can be nested inside arr2 if
// - arr1 min > arr2 min
//     - arr max is < arr2 max

// Define a Function that take two parameter
// sort the arr
// compare the arrays

function canNest(arr1, arr2) {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) {
    return " not an array";
  }
  let arr1Sorted = arr1.sort();
  let arr2Sorted = arr2.sort();
  let arr1min = arr1Sorted[0];
  let arr2min = arr2Sorted[0];
  let arr1max = arr1Sorted[arr1.length - 1];
  let arr2max = arr2Sorted[arr2.length - 1];

  if (arr1min <= arr2min || arr1max >= arr2max) {
    return false;
  } else {
    return true;
  }
}
// console.log(canNest([1, 2, 3, 4], [0, 6]))

// (arr1min <= arr2min || arr1max >= arr2max)
//  arr1 min > arr2 min
//     - arr max is < arr2 max

// function nestOrNot(arr1, arr2) {
//     let min = 'arr1' //arr2 arr2[i]
//     let max = 'arr1' //arr2
//     for (let j = 0; j <= arr2.length; j++) {
//         for (let i = 0; i <= arr1.length; i++) {
//             if (arr1[i] >= arr2[j]) {
//                 if (min !== 'arr2') {
//                     min = "arr2"
//                 }
//             } else if (arr1[i] <= arr2[j]) {
//                 if (max !== 'arr2') {
//                     max = "arr2"
//                 }

//             }

//         }
//     }

//     console.log(min)
//     console.log(max)
//     if (min == 'arr2' && max == 'arr2') {
//         console.log(`${arr1} and ${arr2} will be nested ${[...arr1, ...arr2]} `)
//     } else {
//         console.log(`${[...arr1]} and ${[...arr2]} are not be nested `)
//     }
// }

// nestOrNot([9, 9, 8], [8, 9])
// nestOrNot([1, 2, 3, 4], [0, 6])

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 4. sort

const sorting = (arr) => {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        a = arr[j];
        arr[j] = arr[i];
        arr[i] = a;
      }
    }
  }
  return arr;
};

// console.log(sorting([5, 6, 99, 8, 76, 4, 68, 44]))

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 5.    Find the Equilibrium index
	[-7, 1, 5, 2, -4, 2, 0, 1];
//=====================================================================================================================================

function equilibriumIndex(arr) {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (leftSum == sum) console.log(i);

    leftSum += arr[i];
  }

  console.log("no equlibrum");
}

equilibriumIndex([-7, 1, 5, 2, -4, 2, 0, 1]);

// time complexity = O(n)
//space complexity = o(1)

//********************************************************** OR ******************************************************************** */

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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

					// // 6.  find the min , Max ?
//=====================================================================================================================================


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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

					// // 7.  find the factotial ?
//=====================================================================================================================================

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
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

					// // 8.  split Number ?
//=====================================================================================================================================
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

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

					// // 6.  find the Median ?
//=====================================================================================================================================

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


// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 1. create a function that takes number as an argument. that prints the page from the start of the argument to the end of the argument.
//=====================================================================================================================================

// creat a function that prints page start to the end
// create two parametres must be (num)only
//create a for loop
// start  with the first given page
//ends last given page
//print from start page to the end page

function print(start, end) {
  if (isNaN(start) || isNaN(end) || start > end || start < 0 || end < 0) {
    console.log("error");
  }
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
print(10, 30);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//2.                          print even/odd pages
//=====================================================================================================================================

function print(start, end) {
  if (isNaN(start) || isNaN(end) || start > end || start < 0 || end < 0) {
    console.log("error");
  }
  for (let i = start; i <= end; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
print(19, 30);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 3. Create a function that takes voltage and current and returns the calculated power. https://edabit.com/challenge/wAdE9te55cowBLcPs
//=====================================================================================================================================

function powerCal(voltage, current) {
  if (isNaN(voltage) || isNaN(current) || voltage < 0 || current < 0) {
    return "Error";
  }
  let power = voltage * current;
  console.log(power);
}
powerCal(240, 110);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 4. Write a function that returns sum numbers from 1 to 50?
//=====================================================================================================================================

function sumOfFifty() {
  let sum = 0;
  for (i = 1; i <= 50; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sumOfFifty();

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/* 5. Create a function that takes the age in years and returns the age in days. 
 Create a function that takes the age in years and returns the age in days. */
//=====================================================================================================================================

function yearsTodates(age) {
  if (typeof age !== "number" || age < 0) {
    return "Enter A valid Age";
  }
  let Age = age * 365;
  console.log(Age + " days");
}
yearsTodates(36);

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/* 6. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise, return false.
	https://edabit.com/challenge/9MjEpkL7yAjAqiH58 */
//=====================================================================================================================================

function twoNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return "provide only numbers";
  } else if (x + y <= 100) {
    return "true";
  } else {
    return "false";
  }
}
console.log(twoNumbers(10, 50));

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 7. Write a function that returns the sum of even numbers from 1 to 50.
//=====================================================================================================================================

let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }

  console.log(sum);
}

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 8. Print all the integers from 1 to 50? using while loop and for loop
//=====================================================================================================================================

// for Loop
for (i = 1; i <= 50; i++) {
  console.log(i);
}

// while Loop

var i = 1;
while (i < 51) {
  console.log(i);
  i++;
}

// let f = 1
// while (f <= 50) {
//     console.log(f)
//     f=f+1
// }
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 9.Create an array with odd integers from 1 to 50.
//=====================================================================================================================================

function oddIntgers() {
  let oddNum = [];
  for (i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      oddNum.push(i);
    }
  }
  return oddNum;
}
console.log(oddIntgers());

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 10. Set negative array values to zero.
// 	example [2, -3, 5, -9] ----> [2, 0 , 5, 0]
// 11. Given an array, print max, min, and average values.

// 12. Create a function that takes an array of numbers and returns both the minimum and maximum numbers, in that order.
// 	https://edabit.com/challenge/Q3n42rEWanZSTmsJm

// 13.  Write a function that prints the firstgit 10 integers on the console starting from the number 1 using the JavaScript for loop

// 14. Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.

// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			Interview
// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
			
			find remove the duplicate value ... two diminstional array

const arr = [
   [1,2,3,4,5],
   [3,4,6,7,8,2],
   [7,2,4,9,11,15],
   [10,12,3,7,11]
];
const removeDuplicates = arr => {
   let map = {};
   let res = [];
   res = arr.map(el => {
      return el.filter(val => {
         if(map[val]){
            return false;
         };
         map[val] = 1;
         return true;
      });
   });
   return res;
};
console.log(removeDuplicates(arr));



// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Big O Notation:
The Big O notation defines an upper bound for an algorithm by bounding a function from above. Consider the situation of insertion sort: 
in the best case scenario, it takes linear time, and in the worst case, it takes quadratic time. Insertion sort has a time complexity O(n^2). 
It is useful when we just have an upper constraint on an algorithm's time complexity.
