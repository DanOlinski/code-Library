
//---select all (select brace ctrl+shift+L), collapse all(ctrl+shift+[)

//---------------------this is an object that contains function,and variables-------------------
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

//----logging text and variable in the same string and temperature interpolate----------------
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

//--------finds common values between arrays------------
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

  
//---------accessing functions in an object (if needed after seeing previous example)----------
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

//------clear white spaces before and after a string------then replace empty spaces within the string with %20-------
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

//---------------checking parking lot for space and outputs the coordinates of free space --------------
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

// Recursions
{
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

//check for nested arrays and place pair into an object recursivly
{
  //the 1st item in the array will never be an array, so only check if the second item is an array. if the second item is in fact an array place a pair in the result object (key = 1st element, value = recursion). If it's not an array: key = 1st element, value = value.
  //the recursion returns an object where the first value will always be printed as a key and the second value will either be an object with a key that has an object with a key(and so forth as long as the second value of the nested array is an array) or it will return a key and a value(if the second object is not an array) 
  const deepArrayToObject = function(arr) {
    const result = {};

    for (const [first, second] of arr) {
      if (Array.isArray(second)) {
        result[first] = deepArrayToObject(second);
      } else {
        result[first] = second;
      }
    }

    return result;
  };
  
  console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]));
  //result: { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }
}
}
//---------exporting modules
{
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
  
  {
   //when writing code that is parsed into the browser, you don.t need to export and require js functions you have stored in another files, you can call all functions from other js files even if they are located in a diferent file, but when you call script js files then in the HTML file the file links NEED to be in the right order (called functions above function that calls the functions), so that they can run
  }
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
  //this example is a class with a constructor(a function that creates default variable(s)), and a function that adds whatever is passed into it to the variable created in the constructor
  class Pizza {//class is a type of object that sets default stated and behaviors/functions. To use these settings you have to create a variable and attribute it to the class (let variable = new Class() ). now you can use the class with the syntax of an object where the variable acts like an object and it's content is the content of the class, you can have diferent variables pointing to the same class but as you call methoods using each variable the changes will only be stored in the variable you used to called the function on
  
      
    constructor(){//this naming convention is used to define any default function in a class
      this.toppings = ['cheese']
    }
  
    addToppings(topping){
      this.toppings.push(topping)
    }
  }
  
  //a class on it's own means nothing, you have to create a variable and link it to the class, you can also create many variables that link to the same class(the class becomes a tamplate of info to start off your variable outputs)
  let pizza1 = new Pizza()
  
  console.log(pizza1.toppings) //output: ['cheese']
  pizza1.addToppings('mushrooms')
  pizza1.addToppings('peppers')
  console.log(pizza1.toppings) //output: ['cheese', 'mushrooms', 'peppers']

  //if you want to set default values in a class and use that class default patterns in other classes you use the followinf synthax: class MainClass {} then: class SecondaryClass extends MainClass {}
  //the SecondaryClass will inherit(name of this type of code) everything that is in MainClass. if you define a function or anything else inside a subClass that has the same name as a function that is inside the superClass you are then redefining that function and it will no longet inherit the parameters of that function in the superClass
  //supper: if you want to run a function from the superClass inside subClass in a diferent order than it appears in the superClass or even more than once even though it is decleared only once in the supeClass. you can call that function like this: super.functionYouWantToCall(). It sort of works like the 'this' keyword when calling something that is inside an object instead of using the object name
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

////this code searches an item in a given array using binary search
{
const binarySearch = function(array, item) {
  let min = 0
  let max = array.length - 1

  //as long as return doesn't execute causing the code to stop, this loop will continue running
  
  while (true) {
    const middleIndex = Math.floor((min + max)/2)
    const currentItemInLoop = array[middleIndex]

    if(currentItemInLoop === item) {
      //
      return middleIndex
    } else if (currentItemInLoop < item) {
      min = middleIndex -1
    } else {
      max = middleIndex -1
    }

    if (min > max) {
      return null
    }
  }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], -5))
}
//Quadratic algorithms
{
  //Some search runtime increase exponentially when the length of the searched array increases 
//this function takes a search that increases exponentially and solves it in a way that only increases linearly
//check if any two numbers in that array can be added together to equal the input number(returns true or false if two numbers in the given array summed together equal to a given number(or false))
//the way this is solved is by adding the lowest number wil the highest, then the second lowest with the second highest
function arrayContainsSum(array, sum) {
  //smallest values(assuming the array is sorted from small to large)
  let i = 0;
  //largest value
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSumBeingChecked = element1 + element2;

    if (currentSumBeingChecked === sum) {
      return true;
    } else if (currentSumBeingChecked > sum) {
      ii--;
    } else {
      i++;
    }
  }

  return false;
}
}

//Using js to create and manage tree data structures (contains examples of recursions)
{
  //check how to work with class and object oriented programming before reviewing this. also check getters and setters

  //there we are creating a class that defines the data structure and contains functions to retrieve filtered information
  class Employee {
  //the constructor is a function that takes in 3 arguments and creates data info for an employee, each employee might or might not have employees working under him, also might or might not have a boss
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  //this function takes in a name and adds him as a subordinate under a specified employee: bossName.addSubordinate(subordinateName). it also adds into subordinateName.boss the bossName ('this' refers to the info typed before the dot: bossName.addSubordinate(subordinateName))
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  //this get function returns the amount of subordinates under a specified employee
  get numberOfSubordinates() {
    return this.subordinates.length
  }

  //this get function checks how many bosses it has above him. It uses a loop and as long as the value in this.boss is not null ('this' is the value before the dot: employeeName.numberOfPeopleToCEO), the loop will change the value of currentEmployee to the boss above the current employee and add 1 to the value of numberOfPeople.
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0
    let currentEmployee = this

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss
      numberOfPeople++
    }
    return numberOfPeople
  }

  //this function compares 2 employees and checks if they have the same boss
  hasSameBoss(employee) {
    return this.boss === employee.boss
  }

  //this is a method of looking up every single item in a tree(called depth first). this method checks from root down to most nested leaf, then goes back up and repeats.
  depthFirstTraversal() {
    const final = []
    //loops through subordinates array, triggering a recursion and console login every time

    final.push(this.name)

    for (const childNode of this.subordinates) {
      let arrayLooper = childNode.depthFirstTraversal();
      if(arrayLooper){
        final.push(this.name)
        return arrayLooper
      }
    }
    return final
  }

  nameForWhoMakesOver(amount) {
    let final = []
    
    if(this.salary > amount){
      final.push(this.name)
    }

    for (const childNode of this.subordinates) {
      //the first info placed on 'this' is set as the root of the tree to be checked. but every time the recursion runs 'this' has to be updated to the child of the root recursivly. So this variable resets the 'this value'
      const subordinatesThatMakeOver = childNode.nameForWhoMakesOver(amount)
      //this saves the previous info into final, so that it isn't lost
      final = final.concat(subordinatesThatMakeOver)
      }

    return final
  }

  findEmployee(name) {
    if(this.name === name){
      return this
    }
    
    for(let childNode of this.subordinates){
      let final = childNode.findEmployee(name)
      if (final) {
        return final
      }
    }
    
return null
  }

  get totalNumberOfEmployees() {
    let counter = 0
    
    for(let childNode of this.subordinates){
      counter += childNode.totalNumberOfEmployees +1      
    }
  
    return counter
  }

}

//creating employees
const ada = new Employee("Ada", "CEO", 3000000.00);

const craig    = new Employee("Craig", "VP Software", 3000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone    = new Employee("Simone", "Employee", 200000);
const ali       = new Employee("Ali", "Employee", 100000);
const florida   = new Employee("Florida", "Employee", 15000);
const david     = new Employee("David", "Employee", 200000);
const brian     = new Employee("Brian", "Employee", 100000);
const karla     = new Employee("Karla", "Employee", 120000);

//adding subordinates to bosses and bosses to subordinates
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);


//these logs display the info
// console.log(craig.boss)
// console.log(craig.numberOfSubordinates)
// console.log(craig.numberOfPeopleToCEO)
// console.log(craig.hasSameBoss(florida))
//console.log(ada.depthFirstTraversal())
//console.log(ada.nameForWhoMakesOver(100000))
//console.log(ada.totalNumberOfEmployees)
//console.log(ada.findEmployee('Simone'))
console.log(ada.totalNumberOfEmployees)
}

//check object with bame results, output an array with names of players (don't repeat player's names)
{
  const allPlayerNames = function(outcomes) {
    //even though I want to output an array the final result should be an object, becausde an object won't allow to have 2 keys of the same name. If I try to have final = [], when I push in the names the names will duplicate
    let final = {};
    for (let i of outcomes) {
      //here I'm creating a pair value where only the key is useful to me, the entry is not going to be used so I set it to 'null' (it's in between brackets so that it doesn't break functionality since null is a specific data type that can trigger unexpected result)
      final[i.winner] = 'null';
      final[i.loser] = 'null';
    }

    //in order for the final result to be an array I am using Object module (this module turns an obkect into an array)
    return Object.keys(final);
  };
  
  console.log(allPlayerNames([
    { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
    { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
    { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
    { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
    { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
    { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
    { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
  ]))
}

//have an argument pass in info into a callback
{
  const doShortly = function(callback, delay, data) {
    //this will execute a function after a set ammount of time
    setTimeout(
      //my instinct would be to: callback(data). but this doesn't work. instead I need to have a function to wrap up the statement
      function(){callback(data)}, 
      delay);
  };
  
  doShortly( (print)=>console.log(print), 1000, 'Print This In The Callback');
}

//Navigate through folders
{
  /*

  ./<file Or folder Within The Same Directory You Are In>
  
  ./<folder  Within The Same Directory You Are In>/<file Or folder Within a nested Directory You Are In>

  ../<file or folder located directly outside of the folder you are in>

  ../../<file or folder located 2 folders outside of the folder you are in>
  */
}

//Spread
{
  //if you want to manipolate an object or array but don't want to change/mutate the content of the origional you need to make a coppy. there are 2 ways you can do that, one is to use .push(for array) or newObj.key = origObj.key. But there is a better way called spread
  const origionalObj = {sub:{}, key1, key2}
  const origionalArray = [] 

  const newObj = { ...origionalObj}
  const newArray = [ ...origionalArray]
  
  //the above will only coppy one level deep, if you want to coppy a level deeper, use the following; where sub is the key in the object that contains a nested object
  const newDeepObj = { ...origionalObj, sub: { ...origionalObj.sub}}
  
  //if you want to maintain the value of some but change the value for one of the keys, do the following:
  const newChangedObj = { ...origionalArray, key2: 'whatever'}

}

{
  //How to deal with and compate dates
//there are many formats of dates, if you want to compare 2 dates(past date is smaller than future date) you 1st need to convert both dates to the same format. The preffered format is ISO because ISO disconsideres time zone, when converting to ISO format you convert the time zone to a centrlized time(like converting any time zone to greenwitch). Secondly you need to convert the ISO to parsed form (this form is an encoded number where a past time will be a smaller number when compared to a future time)
let dateNow = new Date() //creates a new date at now in ISO 
let pastDateNotIso = '2023-07-22 17:43:21.5650'//past date and time not ISO

let convertPastDateNotIsoToIso = new Date(pastDateNotIso).toISOString()
let parseDateNow = Date.parse(dateNow)
let parsePastDate = Date.parse(convertPastDateNotIsoToIso)

let compareDates = parseDateNow > parsePastDate //'date now is larger than past date(both parsed), should return true'
}