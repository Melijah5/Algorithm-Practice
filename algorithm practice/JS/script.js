

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

13.  Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop

14. Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.

//=====================================================================================================================================
