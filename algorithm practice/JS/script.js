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
