
//---select all (select brace ctrl+shift+L), collapse all(ctrl+shift+[)

//---------------------mainfFunc-------------------
{

  let objectLiteral = {

    stringVar1: '', //to store info: stringVar1 += 'info'
    varMulti1: 0,
    arr1: [], // to store info: arr1.push('info')
    
       mainFunc: function (userInput){//when outside of an object: let mainFunc = ...
       let localScopeVar = 0
       let booleanSwitch = true //if (boolean === true){final = 'defaultValue'} 
       let final
  
      //  for (let i = 0; i < objectLiteral.arr1.length; i++) {//store collected info to localScope. if using this function outside of the object change adress to localScopeVar.length
      //    if(objectLiteral.arr1[i] === 'random'){//store collected info to final and set booleanSwitch = false instead of using else(you can have 1 else inside a function)
      //  } 
      //}
   
        if (booleanSwitch === true){final = 'defaultValue'} //use this instead of else, make booleanSwitch = false inside a previous if statement in case that if attributes a value to final
  
        return userInput //here you can have it set to final
     }
     //console.log(mainFunc('tt'))//this if for coppying only the mainScope function
   
   }
   
   console.log(objectLiteral.mainFunc('userInput'))
   //troubleshoot: 1=test scope, 2=else and else if can be glitchy when you have nested if or if inside of a loop
   
}

//----loging text and variable in the same string and temperature interpolate----------------
{
const kelvin = 293
let celcius = kelvin - 273
let fahrenheit = Math.floor(celcius * (9/5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Farenheight.`)// in order for an interpolate to work the sentence has to be between `` and not '' or ""

//here is a more complete engine:

let tempFunc = function(tempt, unit){
  let print =''
  
  let CtoF = Math.floor(tempt * (9/5) + 32)
  let CtoK = Math.floor(tempt +273)
  let FtoC = Math.floor((tempt -32) * 5/9)
  let FtoK = Math.floor((tempt -32) * 5/9 + 273.15)
  let KtoC = Math.floor(tempt -273.15)
  let KtoF = Math.floor((tempt -273.15) * 9/5 + 32)
  
  
  if (unit === 'C'){
    print = 'temperature is ' + tempt 
    + 'C, ' + CtoF + 'F' + ', ' + CtoK + 'K'
  
  } else if (unit === 'F'){
    print = 'temperature is ' + tempt 
    + 'F, ' + FtoC + 'C' + ', ' + FtoK + 'K'
  
  } else if (unit === 'K'){
    print = 'temperature is ' + tempt 
    + 'K, ' + KtoC + 'C' + ', ' + KtoF + 'K'
  
  } else {print = 'unit of measure doesn\'t exist'}
  
  return print
  }
  
  
  
  console.log(tempFunc(4, 'K'))
}

//---simple if else-----------------------
{
let mood = 'sleepy'
let tirednessLevel = 6
if(mood === 'sleepy' && tirednessLevel > 8){console.log('time to sleep')}  
}

  //---------Switch loop. randomly goes through diferent frases every time the code runs-----------
{
let userName =''
userName ? `Hello ${userName}!` : 'Hello!' //diferent tipe of if

let userQuestion = 'What is my fortune'

console.log(userQuestion)

let randomNumber = Math.floor(Math.random()*8)

let eightBall

switch(randomNumber){

case randomNumber = 0 : eightBall = 'It is certain' ; 
break; 

case randomNumber = 1 : eightBall = 'It is decidedly so' ; 
break; 

case randomNumber = 2 : eightBall = 'Reply hazy try again' ; 
break; 

case randomNumber = 3 : eightBall = 'Cannot predict now' ; 
break; 

case randomNumber = 4 : eightBall = 'Do not count on it' ; 
break; 

case randomNumber = 5 : eightBall = 'My sources say no' ; 
break; 

case randomNumber = 6 : eightBall ='Outlook not so good' ; 
break; 

case randomNumber = 7 : eightBall ='Signs point to yes' ; 
break; 

default: eightBall ='Try Again'; 
break;

} 

console.log(eightBall)
}

//------catagorizing and assigning numbers to racers-------------
{
  const racerId = function (name, age, hourOfRegistry){
    let racerNumber = Math.floor(Math.random()*1000)
    let raceTime = (hourOfRegistry+1) + ':00 race'
  
  if(age<18){
  raceTime = '12:30 race'
  }
  
    return name + ' racer ' + racerNumber + ' will participate on the ' + raceTime
  }
  
  console.log(racerId('Dan', 17, 11))
}

//-----based on any set of moves it tells you in a x and y coordinates where the mover ended up at-------
{

  const moves = ['north', 'north', 'west', 'west', 'north', 'east','south'];

const finalPosition = function (moves) {
  //----variables----
  let coordinates = []
  let y = null
  let x = null
  let xMovesArr = []
  let yMovesArr = []

  //----for loop
  for (const i of moves) {
    if (i === 'north') {
      yMovesArr.push(y += 1)
    } else if (i === 'south') {
      yMovesArr.push(y -= 1)
      
    }
    if (i === 'west') {
      xMovesArr.push(x -= 1)
    } else if (i === 'east') {
      xMovesArr.push(x += 1)
    }
  }

  //----variables
  let xMovesArrLastData = xMovesArr.length - 1
  let xMoves = xMovesArr[xMovesArrLastData]
  let yMovesArrLastData = yMovesArr.length - 1
  let yMoves = yMovesArr[yMovesArrLastData]

  //----final executions
  coordinates.push(xMoves, yMoves)
  return coordinates
  //console.log(xMovesArr)
}
//----End of main function
console.log(finalPosition(moves))
  
 
}

//--------diferent ways of writing functions--------
{
  let squareFunc = (x) => //same as function(x){...} if you want to write a even shorter function: x => x * 2 (same as function(x){return (x * 2)}) (but this only works when passed as an argument of a function, it won't work as a function on it's own, for it to work on it's own you'd have to set it as a variable first: let func = x => x * 2)
  {
    let mainNum = x
    let calc = x*x
    return calc
  }
  
  function logCalc(numberInput){
  console.log(`Square root of ${numberInput} is ${squareFunc(numberInput)}`)
  }
  
  logCalc(5)
}

//-------------calling specific items in nested arrays----------

{
const nestedArray = [[1,2],['a','b'],[true,false]] 

console.log(nestedArray[1][0])
}

//---------counts from 0% to 100%-------------
{
for(let counter = 0; counter<101; counter++)
{
  console.log(`% ${counter}`)
}
}

//---------logs all values in an array------------
{
const animals = ['Grizzly Bears', 'Sloths', 'Sea Lions'];
for (let i = 0; i < animals.length; i++){
  console.log(`I love ${animals[i]}`);
}
}

//--------finds comon values between arrays------------
{
let arr1 = [1,2,3,4,5]
let arr2 = [4,5,6,7,8]

for (i=0;i<arr1.length;i++){
  for (j=0;j<arr2.length;j++){
    if(arr1[i] === arr2[j])
  {
    console.log('comon value(s)'+arr2[j])
  }
}

}
}

//------while loop--------------
{
let numSeq = 1
while (numSeq < 6)
{
  console.log(numSeq)
  numSeq++
}
}

//-----do while loop------
{
let cupsOfSugarNeeded = 8
let cupsAdded = 0

do
{
cupsAdded++
}
while (cupsAdded<cupsOfSugarNeeded)
}

//------reverse loop----------------
{
function reverseString(reverseMe){
  var reversed = ""
  for (var i = reverseMe.length -1; i >= 0; i--){
    reversed += reverseMe[i]
  }
  return reversed;
}

console.log(reverseString("Dan"))
}

//-------repeat an action based on the number input in the console log-------------
{
  function laugh(num){
    let ha = ''
  
    for (i=0; i< num; i++){
  ha = ha + 'ha' //same as ha += 'ha'
    }
    
  ha += '!'
  return ha
  }
  
  console.log(laugh(3))
}

//---------making a triangle with a loop----------------
{
  let mainFunc = function (size){
    var line = '' //this needs to be at mainFunc scope because makeTriangle and makeLine are accessing this
    
  function makeLine(length){
    
    for (i = 0; i < length; i++){
      line += '* '
    }
    return line + '\n'
  }
  
  function makeTriangle(size){
  var row= ''
    for (j = 0; j <size; j++){
    row += makeLine(size-(size-1))
  }
  return row
  }
  return makeTriangle(size)
  }
  
  console.log(mainFunc(10))

  //this makes a triangle but it doesn`t print a empty space at the end

  let mainFunc2 = function (size){
    var line = '' //this needs to be at mainFunc scope because makeTriangle and makeLine are accessing this
    let aLoopAmount = 0
    let sizeToScope = size //this is to access the size value placed in the final console.log from within makeLine
  
  function makeLine(length){//the challenge of this function is to not print a space('\n') in the last line
    
    for (a = 0; a < (length); a++){//this parent loop adds an astrix to each line printed to the console then checks how many lines have been printed and stores that value to aLoopAmmount then checks when it looped the same ammount as size-1 in order to not exicute the space('\n')
  
      for (i = 0; i < (length); i++){
        line += '* ' //adding 1 * in every time the a loop runns
      }
        
      if(aLoopAmount === (sizeToScope - 1)){//when it reaches the last loop instead of returning line + '\n' it only returns line
      return line
    }
    aLoopAmount += 1 //here it encreases the value stored into aLoopAmmount till it matches the value of size
    }
  
    return line + '\n'
  }
  
  
  
  function makeTriangle(size){
  var row= ''
    for (j = 0; j <size; j++){
    row += makeLine(size-(size-1))//at every loop it encreases 1 *
  }
  
  
  return row
  }
  return makeTriangle(size)
  //console.log(nBoolean)
  }
  
  console.log(mainFunc2(10))
}

//----------simple function
{
function messageFunc(/*whatever you type here is the same as declearing a variable: let t = 5 you can call uppon it later but with the advantage of being a placeholder of a value that can be changed inside concole.log(messageFunc(t)meaning it is a variable that the user can interact with. you can have ,ultiple arguments seperated by coma*/){ 

  let message = "Hi i`m a simple function" 
  
  return message 
  
  } 
  
  console.log(messageFunc()) 
}

//------------------selecting info inside a data table
{
  const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  
  const chooseStations = function (stations) {
    const goodStations = []
    for (const i of stations) {
      const capacity = i[1]
      if (capacity >= 20) {
        const type = i[2]
        if (type === 'school' || type === 'community centre') {
          goodStations.push(i[0])
        }
      }
    }
    return goodStations
  }
  
  console.log(chooseStations(stations))

}
 
//-------------filtering numbers from an array
{
let numbers = [1,2,3,4,5,6,7,8,9,10]

//automated methood
function evenNumbers (number){
  return number % 2 === 0
}
let filtered = [numbers.filter(evenNumbers)]

console.log(filtered)

//this is a more manual methood
function evenNumbersManual (numbers){
  let evenNumArr = []

  for(i=0; i<numbers.length; i++){
if (i % 2 === 0){
evenNumArr.push(i)
}
}
  return evenNumArr
}
console.log(evenNumbersManual(numbers))
}

//------accessing and changing arrays
{
let pets = ['cat', 'dog', 'rat']

for (let i = 0; i < pets.length; i++){
  pets[i] = pets[i]+ 's'
}

console.log(pets)
}

//--------forEach methood
{
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139]
//if divisible by 3 add 100
test.forEach(function (item, index) {
  if (item % 3 === 0) {
    test[index] = test[index] + 100
    
  }
}
)
console.log(test)
}
//--------------looping through every item in a nested array DOUBLE LOOP
{
  var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];
  
  for (let r = 0; r < donutBox.length; r++) {
    for (let d = 0; d < donutBox[r].length; d++) {
      console.log(donutBox[r][d])
    }
  }
  }
//-------------Simple Object and nested object and accessing------
{

  let object = {
    'key 1': '' , //if key has a space in the name it has to be written between quotes
    varMulti1: 0, 
    arr1: [1,2,3,4,5,6,7,8,],
    func1: function(tt){
      return tt
    }
  }
  
  console.log(object.arr1[4-1] + '\n' + object['arr1'][4-1])//these are 2 ways of accessing info in an object the second one is better because the first one doesnt work when there are special characters involved like spaces. see how arr1 is between quotes even though it`s a variable, this is how the synthax works for accessing variables inside objects

//this is an object nested in a variable
let varForObject = [  

  {
  'key 1': '' , //if key has a space in the name it has to be written between quotes
  varMulti1: 0, 
  arr1: [1,2,3,4,5,6,7,8,],
  
  func1: function(tt){
    return tt
  }
  }

]

console.log(varForObject[0].func1(68))//this is how to access info in this type of nested object but there is another way that is more correct, check console.log above for more info

//loop through objects
for (let i = 0; i < varForObject.length; i++) {
  console.log(varForObject[i])
}

//loop through nested objects
for (let i = 0; i < varForObject.length; i++) {
  console.log(varForObject[i].arr1)
}

}
//-----------------for Each() loop-- priting every item in an object, this is a fery good way of storing and reteving data-----
{
  var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
  ]
  
  
  donuts.forEach(function(item){
  console.log(item.type + ' ' + item.cost)
  })
  
  //here is the same but using a basic loop
  for (let i = 0; i < donuts.length; i++) {
    console.log(donuts[i])
  }
  
  for (let i = 0; i < donuts.length; i++) {
    console.log(donuts[i]['type'])//best methood of accessing info from an object
  }

  }
  
//---------accessing functions in an object (if needed after seing preious example)----------
{
let facebookProfile = {
  //inner object scope variables
    userName: 'UserName',
    friends: 6,//this info is logged
    message: ['Hello'],
  
  //functions within the scope of the object
  //not logged used for program back end processing
    deleteMessage: function (index) {
      return facebookProfile.message.splice(index, 1)
    },//this removes an item from the array message
  
    addFriend: function () {
      facebookProfile.friends += 1
    },
  
    removeFriend: function () {
      facebookProfile.friends -= 1
    },
   
  
  }
  
  //below are objects being called in order to manipulate information inside the object before it is printed. if I delete these 4 lines the infor defaults back the the input inside the object
  facebookProfile.deleteMessage(0)//this removes an item from the array message if you input the array mosition of the message you want to delete
  facebookProfile.addFriend(6)
  facebookProfile.removeFriend()
  
  console.log(facebookProfile.message)
  console.log(facebookProfile.userName + '\n' + 'you have ')
  console.log(facebookProfile.friends + ' FB friends')
}

//-----------reordering a nested object then outputting the highest value using sort methood---you can also use: array.sort()-that's all you need------
{
  const judgeVegetable = function (arr, itemAnalized) {
    //sort methood 
      arr.sort(function(a, b){ // a is the lowest value and b is the highest value
      return b[itemAnalized] - a[itemAnalized] //this reorders from largest to smallest b-a(re order from b to a) bellow is a way better example
     })
    
    final = arr[0].submitter //I'm selectineringg the first value of the nested object because the methood above reordered the items to keep the highest value at index 0, then navigating to the submitter value so that the name can be logged even though the item analized is redness or plumpness
    
      return final
    }
    
    
    const vegetables = [
      {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
      },
      {
        submitter: 'Sally Tomato-Grower',
        redness: 20,
        plumpness: 8
      },
      {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
      }
    ];
    
    console.log(judgeVegetable(vegetables, 'redness'))//here 'redness is not a string to outbut, this is a refference to the item that is being analized(redness or plumpness), the reason why its between quotes is because of the way an item is referenced inside a nested object(check simple objects)

    //-----------here is how to sort a simpler object
    const judgeVegetable2 = function (arr) { 
      arr.sort(function(a, b){
      return a - b //this type of nested function needs 2 returns one here and one below. a represents the smallest number and be represents the largest. in this example the arr is sorted from smallest to largest
     })
    
    final = arr
      return final
    }
    
    console.log(judgeVegetable2([5,6,1]))
      
}
//-----------this code reproduces an action every 3000 miliseconds(it's like a loop)
{
  
  const sayHello = function(){
    //console.log('Hello');//remove coment out to run this code
  }
  
  const timer = setInterval(sayHello, 1);
  
  clearInterval(timer); //this prevents the code from running infinetaly, you can lso use setTimeout to make the setInterval stop after it executed a certain mmount of times
  }
//----------setTimeout module
{
  //----this code runs after 3000 miliseconds
const sayHello = function(){
  console.log('Hello');
}

setTimeout(sayHello, 3000);

//loops through array in order from smallest to largest
{
  const numbers = [900, 500, 52, 603, 59, 81, 1, 50]

for (let element of numbers){
  setTimeout(()=>console.log(element), element)//this logs each number in order because it sets the time equal to the value of each number in the array, so the higher numbers will execute after the smaller numbers (this doesn'e work for negative numbers)
}
}

//this types a string slowly, the delay time encreases at each loop otherwise all the letters would be executed at the same time and it would't tipe the string slowly one letter at a time
{
  let delayInMs = 1000
const stringExample = 'Hello World'

const slowtiper = (string) => {
  for (const letter of string){
    setTimeout(()=>process.stdout.write(letter), delayInMs)
    delayInMs += 200
  }
}
slowtiper(stringExample)
}

}

//------clear whitespaces before and after a string------then replace empty spaces within the string with %20-------
{
  const urlEncode = function (text) {
    // variables
    let firstTrimStore = ''//trins initial empty space
    let secondTrimStore = ''//trims empty space at end
    let secondTrimInversed = ''//this stores the inversed text because the only way of trimming the end emptyspace is by inverting the text
    let firstTrimBoolean = false
    let secondTrimBoolean = false
    let finishedTrimStore = ''
    let final = ''
  
    //trimming whitespace from start
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        firstTrimBoolean = true //when firstTrimBoolean = true it means the loop passed the empty spaces and it starts adding the text inside. the action of storing is triggered in the if below
      }
      if (firstTrimBoolean = true) {
        firstTrimStore += text[i] //this is how you .push an item when it's not an array
      }
    }

    //trimming whitespace from end
    for (let j = firstTrimStore.length - 1; j >= 0; j--) {//inverting text so that empty space is in the beginning of the text
      if (firstTrimStore[j] !== ' ') {
        secondTrimBoolean = true
      }
      if (secondTrimBoolean = true) {
        secondTrimInversed += firstTrimStore[j] //placing info from firstTrimStore (wich is now inverted be cause its still within the loop that inverted it) store it into secondTrimInversed, and it does this after ignoring any empty space that was in the end of the original text
      }
  
    }
    
    for (let k = 0; k < secondTrimInversed.length; k++) {
      finishedTrimStore += firstTrimStore[k]
    }//here I could have created a loop that inverts the secondTrimInversed and stores it in finishedTrimStore, but another way is by using the k loop to go over the text in the first trim but stop looping before any empty space because it loops using the length of the seconfTrimInversed
  
    //replacing empty spaces with %20
    for (let h = 0; h < finishedTrimStore.length; h++) {
      if (finishedTrimStore[h] === ' ') {
        final = final + '%20'
      } else {
        final = final + finishedTrimStore[h]
      }
    }
    return final
  }
  
  console.log(urlEncode("   Lighthouse Labs  "));
  console.log(urlEncode("Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));
}  

//---------------checking parking lot for space and outputing the coordinates of free space --------------
{
  

const whereCanIPark = function (spots, vehicle) {
  let noSpaceAvailable = 'No Space Available' //default
  let boolean = false //default switch
  let final
 
  //double loops analizing parking spaces in nested array. if: checks type of vehiecles and if there is an empty spot for that type of vehiecle
    for (let i = 0; i < spots.length; i++){
      for (let j = 0; j < spots[i].length; j++){
        if (vehicle === 'regular' && (spots[i][j] === 'R')){
          final = [j, i]
          boolean = true
        } 
      }
    }

    for (let i = 0; i < spots.length; i++){
      for (let j = 0; j < spots[i].length; j++){
        if (vehicle === 'small' && (spots[i][j] === 'R' || spots[i][j] === 'S')){
          final = [j, i]
          boolean = true
        } 
      }
    }

    for (let i = 0; i < spots.length; i++){
      for (let j = 0; j < spots[i].length; j++){
        if (vehicle === 'motorcycle' && (spots[i][j] === 'R' || spots[i][j] === 'S'|| spots[i][j] === 'M')){
          final = [j, i]
          boolean = true
        } 
      }
    }

    if (boolean === false){
      final = noSpaceAvailable
    } 
  return final
};

//low caps means smace is taken
console.log(whereCanIPark(
  [
    ['s', 's', 's', 'S', 'R', 'M'],
    ['s', 'M', 's', 'S', 'r', 'M'], 
    ['s', 'M', 's', 'S', 'r', 'm'], 
    ['S', 'r', 's', 'm', 'r', 'M'], 
    ['S', 'r', 's', 'm', 'r', 'M'], 
    ['S', 'r', 'S', 'M', 'M', 'S']
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
}
  //--------------js interacting with HTML----------
{
  /* this wont work using the terminal, only on jsfiddle.net or running your HTML file in a browser to sets your code
  
  //----logging to the brouser
  document.write('hello')
  
  //----logging to the DOM(a apce between visible browser and back end code)
alert('text')

  //------get a value from HTML and log it to the DOM
  let elm = document.getElementById('connectToJs').innerHTML
  alert(elm) 
  //you'll hacve to have an item in the HTML set to for example <p id=connectToJs>message</p>
  
  //------get a class, create an array, loop over all values logging it in browser
  //------get a class, create an array, loop over all values logging it
var textFromHTML = document.querySelectorAll('p');
for(let i = 0; i < textFromHTML.length; i++) {
  document.write(textFromHTML[i].innerHTML);
}
  
  //-------changing an element
  var elm = document.querySelector('#info');
  elm.innerHTML = 'JavaScript Rocks!'
  alert(elm.innerHTML)
  
  //----changing an attribute(width) value and adding an attribute(hight) and giving a value of 20 to the new atribute
  <img id='lhl-logo' src='https://cl.ly/2O3Y2w1R2j0v/Image%202016-07-20%20at%201.16.13%20PM.png' width='400' />
  <script>
  let imageRecise1 = document.querySelector('#lhl-logo').width = 500
  let imageRecise2 = document.querySelector('#lhl-logo').setAttribute('height', '20')
  </script>
  
  //---when a button is clicked a message is sent to the DOM-----
  
  <button id='my-button' onclick="buttonClicked('this is printed to DOM')"<!---the HTML comand: onclick is calling the function in javascript file just like one would call a function inside a js file--->
  >
    Click Me!
  </button>

  <script>
  function buttonClicked(messageToDOM){
    alert(messageToDOM);//here messageToDOM is a place holder for the HTML code: onclick="buttonClicked('this is printed to DOM')". in the HTML I am calling a function just like I would do in a js file
  </script>


  */
  }

  //------------log from a given nested array repeated times. first value should be logged the second value should be the ammount of times the first value will be logged. The values have to be logged in groups and if there are multiple nested arrays the grouped numbers have to be seperated by a coma
  {
    let repeatNumbers = function (mainArr){
  
      let storeDataOnString = ''; 
      let doubleData = []
      let deleteLastComa = ''
      
      
       for (let i = 0; i < mainArr.length; i++) {
        doubleData.push(mainArr[i][1])//this is pushing 1 item of each nested array, so that I can add a coma after the end of every nested array. the item pushed has to be the value for the ammount of times the first number will be logged. so this will store 2 pieces of information: 1)ammount of nested arrays. 2)how many times will the item mainArr[0] be printed
       
    
        for (let j = 0; j < mainArr[i][1]; j++){//this will repeatedly add to a string the value from mainArr[0] and it will repeat this action for the ammount of times determined by mainArr[1]
          storeDataOnString += mainArr[i][0]
        }
    
        for (k=0; k < doubleData.length; k++){//this loop will be triggered the same value as the ammount of nested arrays, by using the ammount of data points inside doubleData
          if(doubleData[k] === mainArr[i][1]){//when the i loop runns(logs mainArr[i][0] into storeOnString) the ammount of times equals to mainArr[i][1](the data stored into doubleData) it will add a coma. but it will also add a coma to the end of the printed string
    
            storeDataOnString += ', ' //in order not to place a coma in a random location inside the storedDataString, I only want to trigger this loop event when it loopes the same ammount as the valuea stored in doubleData
          }
        }
     };
     
    for(l = 0; l<(storeDataOnString.length - 2); l++){//we know for sure that the last 2 data points of the logged string will be ' ,' so I place into deleteLastComa the same value from storeDataOnString but I stop 2 data points before the total length of the variable excluding the coma and space from the end
      deleteLastComa += storeDataOnString[l]
    }
    
     
    
    return deleteLastComa;
    
    };
    
    console.log(repeatNumbers([[1, 10]]));
    console.log(repeatNumbers([[1, 2], [2, 3]]));
    console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
        
  }

  //------------Command Line Arguments (CLA)------------
  {
    //CLA is text that shows in the terminal when a program runs or is being installed. there are many functions for this but one important is for debugging code
    
    for (let i = 0; i < process.argv.length; i++) {
      console.log(i + '->' + (process.argv[i])); //precess.argv is an array containing the process run after node command
    };

  //type into the console.. node <file name.js> <type whatever you want>
  //what this script does it loops over all of the comands that are running then it displays them to in order and displaying the number followed by ->
  //this allows you to see everything the PC is doing and you can find at what process the error is

  const sumCalculator = function() {
    const args = process.argv;
    let slice = args.slice(2)//slice(starting index,ending index); For removing the last character from the string we can use the starting index as "0" and the ending index as "sring. length - 1" or "-1"
    let intConverter = []
    let final = 0
  
    for (let i = 0; i < slice.length; i++) {
      intConverter.push(1*slice[i]) //whatever is written in the terminal becomes a string so I have to convert the numnbers to integers so that they can be calculated. another way to convert it is by using in the final loop: final += Number(slice[i]) or final += (1*slice[i]) (this discarts the need for the first loop(the i loop))
      //this is how you actually write this code: let var = process.argv.slice(2) (when you push to a variable you use var2.push(var).join(', '))
    };
  
    for (let j = 0; j < intConverter.length; j++) {
      final += intConverter[j]
    };
  
    return final
  };
  
  
  console.log(sumCalculator());

  //this can be used as a calculater where the user inputs into the terminal after node <fileName> to numbers seperated by a blank space and the console will return the result
  }

  //----------.assert methood---------------
  {
    //this methood works like an if statment but it outputs an error if the condition doesn't pass. this is used to check code for bugs
    let message = 'number above is not even'

for (let i = 0; i < 5; i++) {
  console.log(i)
console.assert(i % 2 === 0, '%o', {i, message})
}

//here is the most simple version
console.assert (1 === 1)//nothing happens because it's true
console.assert (1 === 3)// error

//testing a code
let wrongSum = function(a, b) {//this function is supposed to sum the numbers instead of multiplying them
  return a * b
}

console.assert(wrongSum(1, 3) === 4)// this is checking if I'll get the expected result of the sum of a and b

//this is a similar idea but it uses raw code to create a function that asserts another function you want to check
let assertEqual = function(actual, expected) {
  let final;
 
  if (actual === expected) {
    final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
  } else {
    final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
  }
 
  console.log(final);
};

const head = function(item1) {
  //console.log(item1[0])
  return item1[0];
};

assertEqual(head([]), 8);
assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  }

  //----------manipulating objects (best refference for dealing with objects)this function uses 2 entries(1 array and 1 object) it looks into the object to determain what items it will look for in the array then it detarmines how many times each item(the ones determined in the object) repeats in the array and outputs the result-----------
{

{//I love this methood, it's a nested loop that compares an aray with an object
  let obj = {
    key1: 'entry1',
    key2: 'entry2',
    key3: 'entry3',
    key4: 'entry4'
  };
  
  const array = ['egg', 'apple', 'key3', 'cat'];
  
  for (let i of array) {
    for (let [key, entry] of Object.entries(obj)) {// the Object.entries function converts the object to an array containing a pay so [key, entry], reflects the position of where the kay and the entry inside the array(1st value in the array is the key and the secons value is the entry)
      if (i === key) {
        console.log("comon key value: " + key);
        console.log("entry of the comon key value: " + entry)
      }
    }
    
  }
  }

{ // this is the hard way of doing it but it shows diferent ways of accessing data in objects
    const countOnly = function(allItems, itemsToCount){
      const results = {}
      
      console.log(Object.keys(itemsToCount)) //this logs all keys and entries from the object
      console.log(Object.entries(itemsToCount)[0])//this logs the 1st key followed by the entries contained in it
      console.log(Object.entries(itemsToCount)[0][1])//this logs the 1st entry in the first key (even though the second index is [1]), if I had placed [0][0] it woul log only the key
      console.log(itemsToCount['Fang']) //this methood you'll see what is stored in the 'Fang key', but this way you can't print out the kay only the content within that key, if the content of that key is an array then you add [0] to access what's inside that array
      
      for(let j = 0; j < Object.keys(itemsToCount).length; j++){//loops through the object
        
        if(Object.entries(itemsToCount)[j][1] === true){//the items to be used to check for them inside the array have to have a true for the entry of the key
        results[Object.entries(itemsToCount)[j][0]] = 0 //this places info inside an object: results[key] = entry
        } 
      }
      
      for (let i = 0; i < allItems.length; i++){//loops through array
        for (let k = 0; k < Object.keys(itemsToCount).length; k++){//loop through object
          if(Object.entries(itemsToCount)[k][0] === allItems[i]){//checking if object values are inside the array then adds a number to the entry of the key corresponding to the equal values between the array and the object
          results[Object.entries(itemsToCount)[k][0]] += 1
          }
        }
      
      }
        
      return results
      }
      
      const firstNames = ['Karl', 'Salima', 'Aghouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']
      const objects = {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}
      
      console.log(countOnly(firstNames, objects))
    }



    {//this is way better this program also doesn't print any element that is = to zero (Kerima is in the object but it's not in the array, instead of outputing Karima = 0 it simply disconsiders her)

    const countOnly2 = function(allItems, itemsToCount) {
      let results = {};
    
      for (let i of allItems) {

        if (itemsToCount[i]) {//if a key equals true check if results has that element in it if not then add that element into results as a key and atribute the key's entry to 1. when the loop runs again it will check if results has something in it if that is true then it will go the key that was added and add 1 to the entry
          if (results[i]) {
            results[i] += 1;
          } else {
            results[i] = 1;
          }
        }
      }

      //same loop as above but using for loop instead of for of loop (my absolute preffered way of writing this code)
      /*
      for (let i = 0; i < allItems.length; i++) {

      if (itemsToCount[`${allItems[i]}`]) {
        if (results[`${allItems[i]}`]) {
          results[allItems[i]] += 1;
        } else {
          results[allItems[i]] = 1
        }
      */
    
      return results;
    };
    const firstNames = ['Karl', 'Salima', 'Aghouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']
    const objects = {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}
    
    console.log(countOnly2(firstNames, objects))
  }

{//this is the same as above but I am using a for loop instead of a for of loop and also added an extra step that brakes down a little bit better what is going on, howerver it added more coading and makes this not the best option for real world but great for explaining

  const countOnly2 = function(allItems, itemsToCount) {
    let results = {};
    let keyStore = [];
   
    for (let i = 0; i < Object.keys(itemsToCount).length; i++) {//I grabbed the keys and placed it into an array because I wasn't able to acces the keys info in the i loop, because i loop is longer than the length of the itemsToCount object and when I use the notation bellow in a loop like that is crashes
      keyStore.push(Object.entries(itemsToCount)[i][0]);
    }
  
    for (let i = 0; i < allItems.length; i++) {//loop through array
  
      for (let b = 0; b < allItems[i].length; b++) {//to compare 2 arrays you need a nested loop, so I use this to compare allItems w keys of itemsToCount
  
        if (allItems[i] === keyStore[b] && itemsToCount[`${allItems[i]}`] === true) {
          //first is identifies what items are equal between the array(allItems) and the keys in the object(itemsToCount)
          //secondly if there is an item in the array allItems, that is equal to a key name in itemsToCount object and that key has a entry equal to true, then pass
          //this can be simplified as in example above, the example above also has an example using a for loop instead of a for of loop
  
          if (results[`${allItems[i]}`]) {
            results[allItems[i]] += 1;//when adding a key and entry pair to an object the key name doesn't have to be between brackets, but when accessing a key it definetly does have to be between brackets(accessing key verses creating key)
          } else {
            results[allItems[i]] = 1;
  
          }
        }
      }
    }
  
    return results;
  };
  
  
  
  const firstNames = ['Karl', 'Salima', 'Aghouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
  const objects = {'Jason': true, 'Karima': true, 'Fang': true, 'Aghouhanna': false};
  
  console.log(countOnly2(firstNames, objects));
}

{//here are detailed examples of diferent loops and how they can be used in arrays and objects

  const looper = function(){
    const arr = ['key1', 1,2,3,4,5]
    const obj = {key1: 'entry1 of Key1', key2: 'entry1 of Key2', key3: 'entry1 of Key3'}

    for(a=0; a < arr.length; a++){//raw form of a loop
      console.log('Index: ' + a)// logs index
      console.log('array item forLoop: ' + arr[a])// logs item
    }
    console.log('----^forLoopArray^------' + '\n')


    for(b=0; b < Object.entries(obj).length; b++){//raw form of looping through object, the Object module/property of javascript is very buggy, it crashes when you're in a loop that is longer than the length of the object or if the object is empty, in those cases you can either create a loop to store object info in an array or acsess info from an object using: obj['keyname'] or obj[`${arr[i]}`]

      console.log('actual way of referencing: ', obj['key3'])
      console.log('referencing entry, if key value of object is equal to a value within a seperate array: ', obj[`${arr[0]}`])
      console.log('Object Index forLoop: ' + Object.entries(obj+0)[b][0])// console log the index of an object the sectret here is to add a +0 after the object name
      console.log(Object.entries(obj)[b]) //loops through object but it outputs the pair(key, entry) all within an array
      console.log('Object Keys forLoop: ' + Object.entries(obj)[b][0])//loops through all keys
      console.log('Object entries forLoop: ' + Object.entries(obj)[b][1])//loops through all entries
      }
    console.log('----^forLoopObject^------' + '\n')
    

    for(const i of arr){//used to loop through arrays
      //you can't log the index value from this loop because i reffers to the value of what's in the array so the. i(in a for of loop) = arr[i](in a for loop)
      console.log('array item forOfLoop: ' + i)//i is not reffering to an index it reffers to an item
    }
    console.log('----^forOfLoop^------' + '\n')

    for(const j in obj){//used to loop through objects
       console.log('obj key: ' + j)
       console.log('key entry: ' + obj[j])
    }
    console.log('----^forInLoop^------' + '\n')
  }

  looper()  

}

}
///----------------comparing values of 2 objects with or withour nested arrays but doesnt work for nested objects, this code also contains 2 other functions(1st one is just checking if values are as expected, the second functions is used to be called inside the main function to compare 2 arrays)-----using for in loop------
{

  
  let assertEqual = function(actual, expected) {//this is simply used to check if the output of eqObjects is equal to an expected value(you place what you expect the output to be as the second argument of assertEqual function)
    let final;
   
    if (actual === expected) {
      final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
    } else {
      final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
    }
   
    console.log(final);
  };
  
  const eqArrays = function(arr1, arr2) {//this function is used to compare arrays if the object has arrays inside. this function is called inside eqObjects
    let valuesCheck = 0;
    let final;
  
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          valuesCheck += 1;
        }
      }
  
    } else {
      final = false;
    }
  
    if (valuesCheck === arr1.length) {
      final = true;
    } else {
      final = false;
    }
  
    return final;
  };
  
  const eqObjects = function(obj1, obj2) {
    //checking if both objects have the same ammount of keys
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      } else {
    
        for (let i in obj1) {
          //if a key has an array use eqArray to compair arrays inside obj1 and obj2
          if (Array.isArray(obj1[i])) {
            if (!eqArrays(obj1[i], obj2[i])) {
              return false;
            }
          } else {
            //if key value is not an array compair the the values of each key within both objects
            if (obj1[i] !== obj2[i]) {
              return false;
            }
          }
        }
      }
      return true;
    };
  
  {//code for testing eqObjects

    let assertEqual = function(actual, expected) {//this is simply used to check if the output of eqObjects is equal to an expected value(you place what you expect the output to be as the second argument of assertEqual function)
      let final;
     
      if (actual === expected) {
        final = `😎😎😎Assertion Passed: ${actual} === ${expected}`;
      } else {
        final = `😣😣😣Assertion Failed: ${actual} !== ${expected}`;
      }
     
      console.log(final);
    };

    const shirtObject = {color: 'red', size: 'medium'};
  const anotherShirtObject = {size: 'medium', color: 'red'};
  const longSleeveShirtObject = {size: 'medium', color: 'red', sleeveLength: 'long'};
  const multiColorShirtObject = {colors: ['red', 'blue'], size: 'medium'};
  const anotherMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue']};
  const longSleeveMultiColorShirtObject = {size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long'};
  
  assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
  assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)
}
}
//-----------adding key/entry pair into an object of function
{
  const myFunc = function(){
    console.log('I\'m a function')
  }
  
  function runner(f){
    f()
  }
  
  let obj = {}
  
  myFunc.someAttribute = 42//notation style 1
  myFunc['new attribute'] = 43//notation style 2
  obj.newEntry = 44 //you see how you can add stuff in functions just like you would do in objects
  
  console.log(Object.entries(obj))
  console.log(myFunc.someAttribute)
  runner(myFunc)
}
//------callback fuinction with 2 logging examples(one calls the callback function as a variable that was previously created the other way is by declairing a function without a variable inside the argument of the main function(last line))
{
  const findWaldo = function(names, found) {
    let index = 0;
  
    names.forEach(function(element) {
      if (element === 'Waldo') {
        found(element, (index));
      } else {
        index += 1;
      }
    });
  };
  
  const actionWhenFound = function(searchedName, index) {
    console.log(`Found ${searchedName} at index ${index}!`);
  };
  
  
  findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);
  findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], function(element, index) {
    console.log(element, ' is at ', 'index ', index);
  });  

  //--here is another example for using  callback with multiple aarguments
  {
    const func = function(string, callback){
      console.log(string)//this doesn't serve a porpuse
    
      //this activtes the if statement
      let arg1 = true
      let arg2 = true
    
    //here we are assigning a value to the 1st argument but we need to have null there because if there are 2 arguments, every time we cll the callback we have to state all of the arguments
     if(arg1){
      let arg1 = '1'
      callback(arg1, null)
     } 
     //same as above
     if(arg2) {
      let arg2 = '2'
      callback(null, arg2)
    }
    }
    
    func('whatever', (arg1, arg2) =>{
      
      if (arg1){
        console.log(arg1)
      } else if(arg2){
        console.log(arg2)
      }
    })
  }

}
//filter methood (loops through arrays nicely)
{
  const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(function(numbersElement){
  return numbersElement % 2 === 0 
})
//filtertakes in a function with an attribute, that attribute represents each individual item in the array it's looping through. the statement after return is like an if statement
console.log(evenNumbers)
}
//-------.map methood------------
{
  var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'},
  ]
  
  const names = animals.map(function(animalsElements){
    return animalsElements.name + ' is a '+ animalsElements.species
  })
  
  const namesSort = animals.map(animalsElements => animalsElements.name)
  
  
  console.log(names)
  console.log(namesSort)
  
}
// Recursions
{
  //this function is inside it's self so it repeats as long as it passes the if condition
  function countEvenNumbers (number) {
    if(number <= 12) {//this sets the stopper
      console.log(number)
      countEvenNumbers(number+2)//this sets the repetition
    }
    //in many cases the rest of the recursion should be places here
  }
  countEvenNumbers(0)
//another examnple
let summDownTill1 = function(n){
  if(n === 1){
     return 1
  }
  return n + summDownTill1(n - 1)
  }
  console.log(summDownTill1(4))
//loop through infinite nested arrays
let printItems = function(arr){
  for(let i of arr){
    if (Array.isArray(i)){
      printItems(i)
    } else {console.log(i)}
  }
}
const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);
}
//---------exporting modules
{
  //export{} = For a function to be accessed it has to be exported first from the original file. 
  //Synthax: module.exports = functionOrObject //export after/below the function
  
  //require = this imports a function from another file (when requiring a module you need te be in the same directory, otherwise you'll have to type out the entire address). 
  //Synthax: const sayHello = require('./fileNameThatHasTheFunctionToBeImported.js').functionToBeImported (if you place ../ you go back one folder from where the requiring file is located)
  
  /*you can also require all files within a folder: 
  by creating an index file that requires all files in that folder:
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
}
  
in any other file you can require the index file and have access to all functions the index file is requiring: const allFunctions = require(./index)
allFunctions.functionIWant()
*/

  //it seems that when you require a file if you have a console.log in it it will show when you run the requiring file
}
//--------------.json
{
//every js project packaje comes with a .json file, it contains cutial information about the project. Following is an example:
/*
{
  "name": "project-name",
  "version": "1.0.0", //project version
  "description": "Short project summary", 
  "main": "index.js", 
  "scripts": {
    "myscript": "ENV=development node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT", 
  "dependencies": { //this lists all of the node packajes that need to be installed for the program to work 
    "express": "^4.13.4" //package name is express and the numbers are the version of that package
  }
}
*/

//to create a .json file tipe into terminal: npm init (you can simply hit enter to have the default values entered then edit the file in vsCode. However a lot of info here is written automatically, for example if we install a package in the folder where the .json file is in the dependencies section will be updated automatically) npm init -y(this command lets you create the file without having to press enter a bunch of times)

//pakage-lock.json: this file is created automatically when you create your .json and install a package, this file also contains your github login and more info regarding your project, you should not edit this file unless you really know what you're doing

}
//-----------mocha and chai--------
{
//moca and chai are node packages that work together(they were designed seperetaly but they are now used together) to test code
//these packages have to be installed in the directory you have your files in
//before installing these packages you need to create a .json file

//run: npm init (this creates .json file)(npm init -y creates a default .json file without prompting you with info to be added)
//npm install mocha@9.2.2 chai --save-dev (this installs mocha package with developer dependencies(--save-dev))
//open your .json and in the 'test' key replace the entry with "./node_modules/mocha/bin/mocha" (there might be 2 'test' fields, the one you want to edit is under the Debug section)
//inside your project folder create 2 folders: test and javascript (these folders hold the test files and the javascript files as comon practice)

//inside test folder create a file for testing a function. inside the test file add the following code:
/*
const chai = require('chai') //you can compine this line and the line below with: const assert = require('chai).assert
const expect = chai.expect //this line can also be written with chai.assert
const validator = require('../javascript/fileToBeTested.js')
describe("The function functionToBeTested()", () => {
it("should return true if there are between 2 and 5 group members", () => {
    const array = ["a", "b", "c"]
    assert(validator.functionToBeTested(array)).to.be.true
  })
  // another way:
  // it("should return true if there are between 2 and 5 group members", (done) => {
  //   const array = ["a", "b", "c"]
  //   const testedFunction = functionToBeTested(array)
  //   assert.isTrue(testedFunction(array))
  //done()(use this only if you are testing async functions, done is also above as a argument of it callback)
  })
})
*/ 

//run: npm test or npx mocha(to execute mocha and test function)(you can also specify to test a single file: npm test test/test.js)

/* the test above is testing the following function:
exports.functionToBeTested = function(array) {
  if (array.length >= 6) {
    return false
  } else if (array.length <= 1) {
    return false
  } else {
    return true
  }
}
*/

//----chai---expect, assert, should
//const chai = require('chai') //always do this first
//const assert = chai.expect // you can use .expect or .arrest or .should
//dependiong on what you chose your sinthax will have to change the content inside 'it' function(for assert: assert.isTrue(function()), for expect: assert(function()).to.be.true)
//chose one of the three for your go to 
// here is how to use each type: https://www.chaijs.com/
}

// writing code as objects example
{
  function schedule(title, description) {//This function has an object that will take in a single task, add a task and mark it as complete, with the array in the bottom is adds all tasks into an array so that I can have multiple tasks
    const task = {
      title: title,
      description: description,
      completed: false,
    
      logCompletedOrNot: function(){
        console.log(`${task.title} has${task.complete ? ' ' : ' not '} been completed`)//there is an if statement checking if task is complete print nothing between 'has' and 'been', if not print 'not'
      },
  
      markTaskAsCompleted: function(){
        this.complete = true
      }
    }
  
    return task
  }
  
  const task1 = schedule('Buy Food', 'Buy Food on Saturday at Safeway')
  const task2 = schedule('Do Laundry', 'Wash Clothes on Friday after work')
  const tasks = [task1, task2]
  
  task1.logCompletedOrNot()//this synthax calls the variable that added a task above, then runs one of the functions from the main function(the main function is being pointed to when the variable is determined)
  //so the variable runs the main function, then you can use the variable to run the nested functions
  
  task1.markTaskAsCompleted()
  task1.logCompletedOrNot()
}

// coading with classes instead of prototipes(this is when you create an object/variable without a class). in object oriented languages that are simpler, you can only have a function or object or variable if you created a class for it to be called uppon. js is both object oriented and function oriented, unlike many languages out there.
{
  class Pizza {//class is a type of object that sets default stated and behaviors/functions. To use these settings you have to create a variable and attribute it to the class (let variable = new Class() ). now you can use the class with the syntax of an object where the variable acts like an object and it's content is the content of the class, you can have diferent variables pointing to the same class but as you call methoods using each variable the changes will only be stored in the variable you used to called the function on
  
    constructor(){//this naming convention is used to define any default function in a class
      this.toppings = ['cheese']
    }
  
    addToppings(topping){
      this.toppings.push(topping)
    }
  }
  
  let pizza1 = new Pizza()
  let pizza2 = new Pizza()
  
  console.log(pizza1.toppings)
  pizza1.addToppings('mushrooms')
  pizza1.addToppings('peppers')
  console.log(pizza1.toppings)

  //if you want to set default values in a class and use that class default patterns in other classes you use the followinf synthax: class MainClass {} then: class SecondaryClass extends MainClass {}
  //the SecondaryClass will inherit(name of this type of code) everything that is in MainClass. if you define a function or anything else inside a subClass that has the same name as a function that is inside the superClass you are then redefining that function and it will no longet inherit the parameters of that function in the superClass
  //supper: if you want to run a function from the superClass inside subClass in a diferent order than it appears in the superClass or even more than once even though it is decleared only once in the supeClass. you can call that function like this: super.functionYouWantToCall(). It sort of works like the 'this' keyword when calling something that is inside an object instead of using the object name
}
//find value that repeats the most ammount of times in an array
{
  const mode = function(arr) {
    let obj = {}//this object stores each value of array where key=array value and entry=ammount of times it repeats
    
    arr.map(
        function(x) {
          obj[x] = obj[x] + 1 || 1
        }
      )
  
  let value = Object.values(obj)
  let key = Object.keys(obj)
  let max = Math.max(...value)//finds the highest entry value(ammount of time aan item repeats)
  
  let i = value.findIndex( (x) => {return max===x} )//finds the index for the key that corresponds to the highest ently number. because we want to inform the kay that has the highest entry number and to find that key knowing only the entry we need to use findIndex
  
    return key[i]
  };
  
  console.log(mode([1,1, 2,2,2, 3,3, 4]))
}
//-------Multitsking or asynchronous
{
  //Call stack (locally processed code)
  //Web API (code processed by another code provider)
  //Call back Queue (after the API process is complete the return is stored here)
  //Event Loop (this runs the returns from the Callback loop)(ahything scheduled to run in the future like seTimeout methood will be stored in the Event Loop)(the event loop can only start after the entire code in the js file(called main thread) has finished running).

  //if you have an asyncronus function inside another function the parent function HAS to take in a function as an argument, a return statment will execute before the async function executes and it will always return undefined, check the following example:
  const fs = require('fs');


const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./${breed}.txt`, 'utf8', (error, data) => {//for this to work there has got to be  file named 'Bombay'(first argument of the function determines the name of the file it's goint to read then output in the terminl)
    
    if (!error){
      return callback(data)
    } 
  });

};

const printBreed = (breed) => console.log(breed)

breedDetailsFromFile('Bombay', printBreed)

}
//------geters and seter
{
  class Pizza {
    //you can run these functions without the keywords 'get' and 'set', the diference is when you call these functions insted of placing the argument between brackets(example: pizza.setSize('s')) you use variable notation as if you were re assigning a value to setSike (example: pizza.setSize = 's')
    //there are 2 ways of creating getter and setter functions, either as functions or with the key words get and set
    
    set setSize(size) {//this sets a size but it doesn't return anything
        this.size = size;
      }
    get getSize() {//this returns the size but this function doesn't tke in a parameter, so you have to run set size before running this. all this does is seperte into two tasks in case tht's what you need
        return this.size;
      }
    }
    
    
    let pizza = new Pizza();
    pizza.setSize = 's';
    pizza.getSize; // m
    
    console.log(pizza.getSize)
}
//------Dependency injection
{
  //this is when you pass info into an object, this is a bank account app example
 { class Withdrawal {
    constructor(amount, account) {
      this.amount = amount;
      this.account = account;
    }
  
    commit() {
      this.account.balance -= this.amount;
    }
  
  }
  
  class Deposit {
  
    constructor(amount, account) {
      this.amount = amount;
      this.account = account;
    }
  
    commit() {
      this.account.balance += this.amount;
    }
  
  }
  
  class Account {
  
    constructor(username) {
      this.username = username;
      this.balance = 0;
    }
  
  }
  
  
  const myAccount = new Account('snow-patrol')
  
  t1 = new Deposit(120.00, myAccount);//when you pass an object as an argument everything in that argument can be accessed from within the function or object or class that point to that argument. 
  t1.commit();
  console.log('Transaction 1:', t1);
  
  t2 = new Withdrawal(50.25, myAccount);
  t2.commit();
  console.log('Transaction 2:', t2);// bacause a class was passed as an rgument it will log all data stored in Withdrawal class including the class name
}

  //----------here is the complete program
 { 
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get accountBalance(){
    let totalBalance = 0
    for(let i of this.transactions){
      totalBalance += i
    }
    return totalBalance
  }
  
  addTransaction(transaction){
    this.transactions.push(transaction)
  } 
  
 //balance = this.accountBalance

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date()
    
    if(this.isAllowed() === true){
      this.account.addTransaction(this.value)
    } else {console.log('Insufficient balance')}
   
  }
}

class Withdrawal extends Transaction{
  get value(){
    return -1*(this.amount)
  }

  isAllowed(){
    if(this.account.accountBalance <= 0 || this.amount > this.account.accountBalance){
  return false
    } else {return true}
  }
  
}

class Deposit extends Transaction{

  get value(){
    return this.amount
  }  

  isAllowed(){
    return true
  }
}

let myAccount = new Account('snow-patrol')

t1 = new Deposit(120.00, myAccount);
t1.commit()
console.log('Transaction 1:', t1);

t2 = new Withdrawal(500.25, myAccount);
t2.commit()
console.log('Transaction 2:', t2);

console.log(myAccount.accountBalance)
}

  
}

//----fs module. reads(can also write) info from a file
{
  /* (this code assumes that some .txt files have a single number in it and it adds the number from data1.txt with the number in file data2.txt)(te execute this code)
const fs = require('fs')

let totalSum = 0

fs.readFile('./data1.txt', 'utf8', (error, data)=>{//utf8 is a text reader package, error means it will output an error if it can't read the file, data represents the data in the file it's reading
  if(error){
  console.log(error)
  return
  }
  totalSum += Number(data) //converts string to number
  //console.log(data)

  fs.readFile('./data2.txt', 'utf8', (error, data)=>{
    if(error){
    console.log(error)
    return
    }
    totalSum += Number(data) //converts string to number
    console.log(totalSum)//this adds the numnbers of all files
  })
}) 
*/

/* creating a file with text from terminal
const fs = require("fs")
const data = process.argv

fs.writeFile("./test_async.txt", data[2], (error) => {
  if (error) {
    console.log("Failed to write to file")
    return
  }
  
  console.log("Successfully wrote to file")
})

console.log('code above is asyncronous')
*/
}

//-----creating an npm package
{
  //by creating an npm package your code can be used publically

  //you'l need to create an account first: https://www.npmjs.com/signup
  
  //log into npm from your terminal: npm login
  
  //add a README.md file and edit your package.json file (check example in lighthouseLabs/lotide folder)(also your package should have an index.js file that requires all functions inside your package, then in .jason file set 'main': 'index.js')
  
  //npm publish --access public (after you are loged in and in your folder run this command to publish your package)
  
  //To see your public package page, visit https://npmjs.com/package/\*package-name\*, replacing *package-name* with the name of your package (the name is set in the .json file)
  
  //to download an npm package: 
  //npm init -y (you have to have a .json file otherwise the package won't download)
  //npm install packageName or packageName@1.2.3(desired versaion)
  //installing npm packages can be really buggy, below is how to debug:
  //try installing with sudo, if sudo doesn't work type sudo su(this will enter sudo mode and give you full permissions, to exit sudo su: ctrl+d))
  //install nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  //the link above might be outdated if this doesn't work find an up to date link
  //nvm is a npm manager, it installs all versions of npm then lets you select the npm version you preffer
  //at this moment I know that npm version 15 works so to change to version 15 type: nvm install 15
  //close and reopen terminal after messing with the npm versions

  //after downloading the package you can require all functions: const _ = require('<packageName>')
  //to call any function from that package: _.functionYouWant(arghuments)
}
//--------comanl line user intput, alarm(depending on the number(represents seconds)the alarm will ring at the given time)
{
  



//to run type on terminal: node timer1.js 10 3 5 15 9 -4 tt
// ignopre if empty dont run
// ignore negative numbers
// ignore NaN


const timer1 = function() {
  let arr = process.argv;
  let intConverter =[]
  
  for (let i = 2; i < arr.length; i++) {
      
    intConverter.push(1*arr[i])
      //console.log(intConverter)
  }
      for (let j = 0; j < intConverter.length; j++) {
        //console.log(intConverter[j])

      if (isNaN(intConverter[j]) || intConverter[j] <= 0) {
      } else {
        setTimeout(()=>process.stdout.write('\x07'), intConverter[j] * 1000);
        //console.log(intConverter[j])
      }
    }
  
  
};

timer1();



}
//--------type in the terminal but info is not saved
{
  /*

  process.stdin.on('data', (key) => {//when you run this code you can type in the terminal
    process.stdout.write('.')
  })
  console.log('code above is asyncronous')

  //this will hide everything you type on the terminal
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }//this recognizes ctrl+c(to exit the typing mode, without this you have to shut down your terminal to exit)
});

*/
}
//--------prompt the user with a question then store the answer
{
  /*
  const readline = require('readline');//require readline

  const rl = readline.createInterface({//create a place to store input and output. this creates an object FULL of info to process input and output
    input: process.stdin,
    output: process.stdout
  });
  
  const questions = {
    q1:'What\'s your name? Nicknames are also acceptable :) ',
    q2:'What\'s an activity you like doing? ',
    q3:'What do you listen to while doing that? ',
    q4:'Which meal is your favourite (eg: dinner, brunch, etc.) ',
    q5:'What\'s your favourite thing to eat for that meal? ',
    q6:'Which sport is your absolute favourite? ',
    q7:'What is your superpower? In a few words, tell us what you are amazing at! ',
  };
  const answers = {};
  
  rl.question(questions.q1, (answer) => {
    answers.a1 = answer;
    rl.question(questions.q2, (answer) => {
      answers.a2 = answer;
      rl.question(questions.q3, (answer) => {
        answers.a3 = answer;
        rl.question(questions.q4, (answer) => {
          answers.a4 = answer;
          rl.question(questions.q5, (answer) => {
            answers.a5 = answer;
            rl.question(questions.q6, (answer) => {
              answers.a6 = answer;
              rl.question(questions.q7, (answer) => {
                answers.a7 = answer;
                console.log('\n' + `Your Profile has been created: `);
                console.log('Name:', answers.a1);
                console.log('Preffered activity:', answers.a2);
                console.log('Audio preference:', answers.a3);
                console.log('Preffered meal:', answers.a4);
                console.log('Preffered food:', answers.a5);
                console.log('Absolute favorite sport:', answers.a6);
                console.log('Superpower:', answers.a7);
                rl.close();
              });
            });
          });
        });
      });
    });
    
  });
  */
}
//-------intake a matrix(2D array) and transpose(invert rows into columns and columns into rows)
{
  //this function takes in a matrix (2D array) and transforms columns into rows and rows into columns
const transpose = function (matrix) {
  const rows = matrix.length; //determine ammount or rows
  const cols = matrix[0].length; //determine ammount of columns
  const outputMatrix = []; //declare the output array

//you cant use push here because you are creating a nested array, the push notation won't work, you need to create the nested arrays then set values with '=' noptation. the loop bellow runns the same ammount of times as cols is set to. outputMatrix receives a certain ammount of arrays (j = cols).   
  for (let i = 0; i < cols; i++) {
    //j will be a rown set to have the length of matrix columns(this will invert columns into rows and rows into columns)
    //j is set to be an empty array that holds an ammount of values
    //Array creates an empty array with ammounts of values set to equal value of rows
    outputMatrix[i] = Array(rows);
  }

//now that we have an empty matrix(2D array) we can assign a value for the empty slots in outputMatrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      //this notation works as opposed to .push()
      //[j][i] = [i][j] this inverts rows to cols
      outputMatrix[j][i] = matrix[i][j];
    }
  }
  
  return outputMatrix;
};

//this function takes in a matrix and prints is without showing the square brackets it will also ser each nested array into a new line

const printMatrix = function(matrix) {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));
}
//--------basuc promise
{
  //promisses
const flipCoin = () => {//declare a simple function returning a Promise
  return new Promise((heads, tails) => {//the promise takes in 2 functions(fulfilment of the promise or a rejection of the promise)
    if(Math.random() > 0.5) {//this creates a random number between 0 and 1(50% chance of success and failure)
      return heads() 
    }
    return tails()
  }) 
}

flipCoin()
  .then(()=> console.log("heads"))//this is what will happen if heads is triggered
  .catch(()=> console.log("tails"))//this represents tails

}
//-------basic network connection syncronous
{
//to test this code create 2 js files (clien.js and server.js). then run the server file in one terminal and the client file in another terminal
  
/*server
const net = require("net");



const server = net.createServer();

//this function opens a channel to be connected to. another device can only connect while this app is running in the terminal, as soon as the app is terminated the connection ends
server.listen(3000, () => {
  //this logs a message in the server terminal
  console.log("Server listening on port 3000!");
});

//this function logs messages to confirm that the connection was established. the .on module is also called data hangeling
server.on("connection", (client) => {
  //the console log, logs a message in the server terminal
  console.log("New client connected!");
  //this logs a message in the clients terminal. however for the client to receive this message he needs to have a function for data handeling (check client file for conn.on function)
  client.write("Hello there!");

  //since everyone is listening in the network the message is encoded for protection
  client.setEncoding("utf8");

  //this get's anny log that the client sends to the server and logs it in the clients terminal
  client.on("data", (data) => {
  console.log("Message from client: ", data);
});

});

*/

/*client
const net = require("net");

//this function connects to a computer through an IP address and specified port
const conn = net.createConnection({
  // the keyword local host only works if you are connecting with yout own computer as a test. to connect to another computer you need to replace the keyword with the IP you want to connect to
  host: 'localhost', 
  port: 3000
});

//this get's anny log that the server sends to client and logs it in the clients terminal. the module .on is also called data handeling
conn.on("data", (data) => {
  console.log("Server says: ", data);
});

//this sends a message back to the server. but the server needs a function to receive this message(check server for more info on this)
conn.on("connect", ()=>{
  conn.write('thanks, client connected');
});

//this is a trnslator to convert key codes to the actual valeue of the typed key
conn.setEncoding("utf8");
*/
}
//----animation spinning line and dots
{
  //spinning lines
  const print = function(number) {//number is the amount of revolutions
    const sentence = '|/-\\';
    let timer = 300;
    for (let i of sentence) {
      setTimeout(()=> process.stdout.write('\r' + i + '   '), timer);
      timer += 300;
    }
    if (number > 1) {
      setTimeout(()=> print(number - 1), timer - 300);
    } else {
      setTimeout(()=> console.log(''), timer);
    }
  };
  print(2);

//dots

{
const connectingAnimation = function(number) {
  const sentence = ['connected .  ', 'connected .. ', 'connected ...', 'connected    '];
  let timer = 300;

  for (let i of sentence) {
    setTimeout(()=> process.stdout.write('\r'+i+'  '), timer);
    timer += 300;
  }
  if (number < 1) {
    setTimeout(()=> connectingAnimation(number-1), timer - 300);
  } else {
    setTimeout(()=> console.log(''), timer);
  }
};
connectingAnimation(3);
}

  
}
//----async https request using request module 
{//for this code to run you need to: npm init -y(crete a .json) then npm install request (inside the directory you have the file). this folder also has to be a git repo before you can install git init
  /*
  const request = require('request');
request('http://www.google.com', (error, response, body) => {
  console.log('error:', error.message); // Print the error if one occurred. if you place .message after error the terminal won't crash your app, it will only print the message log
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received(statusCode tells you if there is an error or not, and what error that is)
  console.log('body:', body); // Print the HTML for the Google homepage.
  //if you remove the response parameter the body info will change into a really big object. you'll have to find the key in that object that holds the body of the page, ex: instead of body, now you have to type body.body
});
//here is a great template:
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    /the if statment handles unexisting url passed in
    if(error) {
      return callback(error.message, null)
    }
    //the if statment handles error from the API or a partially incorrect url. (code 200 means successful result)
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }
      const data = JSON.parse(body).ip;
      return callback(null, data);
    
  });
};


fetchMyIP((error, ip) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  return console.log('It worked! Returned IP:' , ip);
});

*/
} 
//-------JSON modules
{
//-------JSON modules (used for dada interchange format)(this converts data into a format that can be used, before JSON you had to use XML to convert that data and it was way more complicated)
 //if you chnge a page url from www to graph you will see the JSON file/object of tht page, the data should be well oginized with key and value pairs 
//this is one form of API, where data is stored as JSON object and info can be easily gathered (find the url with the JSON object you want the use the reques module to request it, then you can use the fs module to store the gathered info)
//converting data: when you request data from an API you should check the type of data: console.log(typeof body). typeof should be object (if typeof is a string you'll need to destarilize it: const data = JSON.parse(body) )
const jsonString = '{"a":1, "b":2, "foo":"bar", "tt":"dd"}'; // string version of a JS Object
jsonString // a string, of course :)

const parse = JSON.parse(jsonString)//parsing or destarilization means removing quotes (this is used to convert data coming from an API)
const starialize = JSON.stringify(parse)//starilize is to add quotes to all vlues in an object
delete parse.foo//this is how you delete  key from an object
console.log(jsonString)
console.log(parse)
console.log(starialize)


}
//----chaining or cascade or waterfall
{
  //this is when you place one function inside another in order to access the return value from the outer function.
  //the example below is a combination of three functions that fetch data from an API then return some info. each function uses info from the outer function in order to run
  
  {//here is the full app
    //the request functions below have some if statements aimed to handle error events (wrong url or wrong data passed in) without crashing the app but still outputting a helpful message regarding the error. These events are controlled by the callback arguments (check index.js on how these events are hangled within the commented out testing code)
const request = require('request');

//The functiopn informs the IP adress or the oc running this app via API request
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    
    //the if statment handles unexisting url passed in
    if (error) {return callback(error.message, null)};
    
    //the if statment handles error from the API or a partially incorrect url. (code 200 means successful result)
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }

    const ip = JSON.parse(body).ip;
    return callback(null, ip);
  });
};

//The function takes in an IP adress and returns the coordinates of the given IP adress via API request
const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipwho.is/${ip}`, (error, response, body) => {
    //the if statment handles unexisting url passed in
    if (error) {return callback(error.message, null)};
    
    //the if statment handles error from the API or a partially incorrect url. (code 200 means successful result)
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }

    const data = JSON.parse(body);
    const coordinates = {latitude: data.latitude, longitude: data.longitude};

    //The if statment handles an error where an incorrect ip adress is passed in
    if (!data.success) {
      const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(message, null);
      return;
    } else {
      return callback(null, coordinates);
    }
    
  });
};

//The function takes in coordinates and returns the time th ISS will fly over those coordinates via API request
const fetchISSFlyOverTimes = function(coordinates, callback) {

  request(`https://iss-flyover.herokuapp.com/json/?lat=${coordinates.latitude}&lon=${coordinates.longitude}`, (error, response, body) => {
    
    if (error) {
      return callback(error.message, null);
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(msg, null);
      return;
    }

    const nextPasses = JSON.parse(body).response;
    return callback(null, nextPasses);
  });
};

//The function runs all API requests above
const nextISSTimesForMyLocation = function(callback){
  //fetchMyIP will either return an error or an IP address.
  fetchMyIP((error, ip) => {
    //If an error is returned it will trigger the return event, meaning that all code after the return will not run
    if(error){
      return callback(error, null)
    }

    //if the IP is returned, and the error not triggered, the function below will run. However sinse the function below is inside fetchMyIP the arument 'ip' will receive the ip value (note that this argument's name has to be exactly the same as the argument in fetchMyIP, because stored in the fetchMyIP(ip) is the IP adress
    fetchCoordsByIP(ip, (error, coordinates) => {
      if(error){
        return callback(error, null)
      }

      //here the same happens as above; coordinates is storing a value returned from fetchCoordsByIP. it can only be accessed this way because the function below is inside fetchCoordsByIP.
      fetchISSFlyOverTimes(coordinates, (error, nextPasses) => {
        if(error){
          return callback(error, null)
        }

        callback(null, nextPasses)
      })
    })
  })
}

module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};
  }

  /*
  {//here each function is tested individually
    
    fetchMyIP((error, ip) => {
      if (error) {
        return console.log("It didn't work!", error);
      }
        //return ip
      return console.log('It worked! Returned IP:' , ip); //75.159.93.227
    });
    
    fetchCoordsByIP('75.159.93.227', (error, coordinates) => {
      if (error) {
        return console.log("It didn't work!", error);
      }
    
      return console.log('It worked! Returned:' , coordinates); // latitude: 51.0486151, longitude: -114.0708459
    });
    
    const coords =  {latitude: 51.0486151, longitude: -114.0708459};
    fetchISSFlyOverTimes(coords, (error, nextPasses) => {
      
      if (error) {
        return console.log("It didn't work!", error);
      }
      
      return console.log('It worked! Returned:' , nextPasses);
    });
  }
  */
}