// /******************************************************* Q1 **********************************************/
// function greet(){
//     alert("Hi Welcome to Assignment#4")
// }
// greet()

// /******************************************************* Q2 **********************************************/
// function tellDateTime(){
//     var now=new Date();
//     let text="";
//     switch (now.getMonth()) {
//         case 0:
//             text="Jan"
//             break;
//         case 1:
//             text="Feb"
//             break;
//         case 2:
//             text="March"
//             break;
//         case 3:
//             text="April"
//             break;
//         case 4:
//             text="May"
//             break;
//         case 5:
//             text="June"
//             break;
//         case 6:
//             text="July"
//             break;
//         case 7:
//             text="JAug"
//             break;
//         case 8:
//             text="Sep"
//             break;
//         case 9:
//             text="Oct"
//             break;
//         case 10:
//             text="Nov"
//             break;
//         case 11:
//             text="Dec"
//             break;
//         default:
//             break;
//     }
//     alert("Today is "+now.getDate()+" "+text+" & Time is "+now.getHours()+":"+now.getMinutes())
// }
// tellDateTime()

// /************************************************* Q3 *****************************************************************/
// function greet(fname,lname){
//     alert("Welcome to our website : "+fname+" "+lname)
// }
// var fname=prompt("Enter your Firstname")
// var lname=prompt("Enter your Lastname")

// greet(fname,lname)

// /************************************************** Q4 *************************************************************/
// function add(x , y){
//     return x+y
// }

// var x=+prompt("Enter number 1")
// var y=+prompt("Enter number 1")
// alert("Ading both numbers "+add(x,y))

// /************************************************** Q5 ***********************************************************/
// function calculator(no1,operator,no2){
//     let value;
//     switch (operator) {
//         case "+":
//             value=no1+no2
//             break;
//         case "-":
//             value=no1-no2
//             break;
//         case "*":
//             value=no1*no2
//             break;
//         case "/":
//             value=no1/no2
//             break;
//         default:
//             break;
//     }
//     return value;
// }
// var no1=+prompt("Enter first number")
// var no2=+prompt("Enter second number")
// var operator=prompt("Enter opertor ")
// alert(no1+" "+operator+" "+no2+" ="+calculator(no1,operator,no2));

// /************************************************ Q6 *********************************************/
// function square(x){
//     return x*x
// }
// var x =+prompt("Enter number to be squared")
// alert("Square of "+x+" is "+square(x))

// /********************************************* Q7 *********************************************/
// function factorial(no){
//     let value=1 ;
//     for (let i=no; i>=1 ; --i){
//         value*=i;
//     }
//     return value;
// }
// var no=+prompt("Enter no to get factorial :")
// alert("Factorial of "+no+" is "+factorial(no));

// /****************************************** Q8 ************************************************/
// function displayingNo(startNo,endNo){
//     for (let i=startNo; i<=endNo; i++){
//         document.write(i+"<br>");
//     }
// }

// let startNo=+prompt("Enter first number")
// let endNo=+prompt("Enter second number")
// displayingNo(startNo,endNo)

// /**************************************************** Q9 *******************************************/
// function calculateHypotenuse(base,perpendicular){
//     function calculateSquare(x){
//         return x*x;
//     }
//     return Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular))
// }
// let base=+prompt("Enter value of base")
// let perpendicular=+prompt("Enter value of perpendicular")
// alert("Hypotenous of given vaues is : "+calculateHypotenuse(base,perpendicular))

// /***************************************************** Q10 ***************************************************/
// function varLength(variable){
//     return variable.length
// }
// var variable=prompt("Enter an string to calculate it length")
// alert("Legth of "+variable+ " is "+ varLength(variable))


// /***************************************************** Q11 ***************************************************/
// function findlargetNo(lengthOfNo){
//     let noArr=[]
//     for(let i=0;i<lengthOfNo;i++){
//         var no=+prompt("Enter Number")
//         noArr.push(no)
//     }
//     return noArr.reduce(function(x,y){return x>y ? x:y})
// }
// var lengthOfNo=+prompt("How many times you want to enter No")
// alert("The max no is : "+findlargetNo(lengthOfNo))
// /************************************************* Q12 *******************************************************/
// function areaOfRectangle(width,height){
//     let area=width*height
//     return area;
// }

// alert("Area of rectangle as values is "+areaOfRectangle(8,9))

// var width=prompt("Enter width")
// var height=prompt("Enter height")
// alert("Area of rectangle as variables is "+areaOfRectangle(width,height))

// /************************************************* Q13  ***********************************************************/
// function sortedNumberArray(arr){
//     return arr.sort(function(a,b){return a-b});
// }
// var list=[5,9,2,55,47,201]
// alert ("Sorted Number Array : "+sortedNumberArray(list))

// /********************** For Strings ********************/
// function sortedStringArray(arr){
//     return arr.sort();
// }
// var list=['Cat','Banana','Dog','Apple']
// alert ("Sorted String Array : "+sortedStringArray(list))

// /*********************************************** Q14 *************************************************************/
// function sumArray(arr){
//     let value=0;
//     for(i=0; i<arr.length; i++ ){
//         value+=arr[i];
//     }
//     return value;
// }
// var list=[5,9,2,55,47,201]
// alert("Sum of an Array "+ list+" is "+sumArray(list))

/*********************************************** Q15 *************************************************************/
// var param=function inner(x){            //Function name is param
//     return typeof inner;
// }
// alert(param())

// /*********************************************** Q16 *************************************************************/
// function powerOfNumber(no,power){
//     let value=1;
//     for(i=0; i<power; i++){
//         value=value*no
//     }
//     return value;
// }
// alert("Power of number : "+powerOfNumber(2,4))

// /*********************************************** Q17 *************************************************************/
// function randomDice(){
//     return Math.floor((Math.random()*6)+1)
// }
// alert("Random Dice Value : "+randomDice())
// /*********************************************** Q18 *************************************************************/
// function reverseNumber(no){
//     let makingArr=no.split("");                 //split merthod is only for string for no convert it toSting()
//     let reversingArr=makingArr.reverse();
//     let joiningArr=reversingArr.join("");
//     return joiningArr;
// }
// var no=+prompt("Enter no to be reverse ")
// no =no.toString()
// alert("Reverse of given no "+no+" is "+ +reverseNumber(no))

// /*********************************************** Q19 *************************************************************/
// function checkingPalindrome(str){
//     let text="";
//     if (str===str.split('').reverse().join('')) {
//         text=" is Palindrome"
//     }else{text=" is not Palindrome"}
//     return text;
// }
// var str=prompt("Enter string to check wether it is Palindrome or not")
// alert(str + checkingPalindrome(str))

// /*********************************************** Q20 *************************************************************/
// function firstLetterUppercase(str){
//     splitingChar= str.split(' ');
//     upperCaseArray=[]
//     for (let char of  splitingChar){
//         upperCaseArray.push(char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
//     }
//        return upperCaseArray.join(' ');
// }
// var str=prompt("Enter string to for Changing first letter in UpperCase")
// alert("UpperCase First Leter : "+firstLetterUppercase(str))

// /*********************************************** Q21 *************************************************************/
// var str="Web Development Tutorial"
// arr=str.split(' ')
// function longestWordInString(a,b){
//     let word;
//     if(a.length>b.length){
//         word=a;
//     }else{word=b}
//     return word;
// }
// var longestWord= arr.reduce(longestWordInString);      //using reduce function
// alert("Longest word in : "+str+" is "+longestWord)

// /************************ Using ternary operator **************/
// var str="Web Development Tutorial"
// var longestWord=str.split(' ').reduce(function(a,b){return a.length>b.length ? a : b})
// alert("Longest word in : "+str+" is "+longestWord)


// /*********************************************** Q22 *************************************************************/
// function vowelsInStr(str){
//     let vowels=['a','e','i','o','u']
//     str=str.toLowerCase().split("")
//     let count=0;
//     for (let strchar of str){
//         for (let vowelchar of vowels){
//             if(strchar===vowelchar){
//                 count+=1;
//             }
//         }
//     }
//     return count;
// }
// var str="The quick brown fox"
// alert("Vowels in given string are : "+vowelsInStr(str))

// /*********************************************** Q23 *************************************************************/
// function detectType(value){
//     return typeof(value)
// }
// console.log(detectType(325));
// console.log(detectType('Taha'));
// console.log(detectType(false));


// /*********************************************** Q24 *************************************************************/
// function removingSpecificChar(str,remchar){
//     for (let char of str){
//         if(char===remchar){
//             str=str.replace(char,'')
//         }
//     }
//     return str;
// }
// var str="thequickbrownfoxjumpsoverthelazydog"
// console.log(removingSpecificChar(str,'o'));

// /*********************************************** Q25 *************************************************************/
// function charAccurance(str,accurChar){
//     let count=0;
//     for (let char of str){
//         if(char===accurChar){
//             count+=1;
//         }
//     }
//     return count
// }
// var str="JSResourceS.com"
// console.log(charAccurance(str,'o'));


// /*********************************************** Q26 *************************************************************/
// function calculateAge(birthYear,currentYear){
//     currentYear=new Date().getFullYear();
//     let age1=currentYear-birthYear;
//     let age2=(currentYear-birthYear)+1
//     let text="They are either "+age1+" or "+age2+" years old";
//     alert(text)
//     document.getElementById('age').innerHTML=text
//     document.getElementById('currentYear').innerHTML="Current Year : "+currentYear
//     document.getElementById('birthYear').innerHTML="Birth Year : "+birthYear

// }
// calculateAge(1996)

// /*********************************************** Q27 *************************************************************/
// function calculateSupply(age,amountPerDay){
//     let restLife=85-age;
//     let amountNeedRestOfLife=restLife*amountPerDay;
//     let text="You will need "+amountNeedRestOfLife+" Oreo Biscuits to last you until the ripe old age of 85"
//     document.getElementById('snacks').innerHTML="Favourite Snacks Oreo";
//     document.getElementById('age2').innerHTML="Current Age : "+age
//     document.getElementById('maxAge').innerHTML="Estimated Max Age : 85"
//     document.getElementById('amountPerDay').innerHTML="Amount of Snacks per Day"+amountPerDay
//     document.getElementById('text').innerHTML=text
//     alert(text)
// }
// calculateSupply(15,6)
// calculateSupply(25,3)
// calculateSupply(18,4)

// /*********************************************** Q28 *************************************************************/
// function calcCircumference(radius){ 
//     var circumfarence=(2*3.14)*radius;
//     let text="The circumference is "+circumfarence;
//     return text
// }

// function calcArea(radius){
//     var areaOfCircle=3.14*(radius*radius);
//     let text="The Area of a circle is "+areaOfCircle;
//     return text
// }

// console.log(calcCircumference(25))
// console.log(calcArea(2))
/*********************************************** Q29 *************************************************************/
// function celsiusToFahrenheit(){
//     var celcius=32;
//     let farenhite=(celcius*(9/5))+32
//     return farenhite;
// }
// function fahrenheitToCelsius(){
//     var farenhite=100
//     let celcius=(farenhite-32)*5/9
//     return celcius;
// }

// alert("Celcius to Fahrenhite : "+celsiusToFahrenheit())
// alert(" Fahrenhite to Celcius : "+fahrenheitToCelsius().toFixed(2))





