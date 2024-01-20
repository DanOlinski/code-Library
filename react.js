//to use react in versions of node older than 17 you need to type at the top of your js file: import React from 'react'. If you are running windows you migt have to install some stuff(follow the instructions in LHL React Module 7, or follow instructions below)(also if after following the instructions below and it still doesn't start, run npm install, that might fix it)
//install npm in your machine; https://nodejs.org/en/download/
//download and install nvm in your machiene; go to: https://github.com/coreybutler/nvm-windows/releases Choose nvm-setup.exe under Assets.
//install; nvm intall v16
//set the version to be used by the PC; nvm use v16

//react-server general info
{
  /*
  you can run the app from windows terminal instead of running it from a linux(wsl) terminal, it goes WAY faster
  */

  /*
  the react template/app runs on it's own server that's why the start key set in .jason file points to a command instead of a file. react server can also auto refreshes so you don't need to use noedmon. but you need to set up a .env file
  "scripts": {
    "start": "react-scripts start"
  }

  you can add code to the start key, this is used to make react refresh automatically when executing the server from a linux terminal, however a react app runs really slow when running from a virtual machiene so use the terminal from your PC to run it; 
  start: "start": "CHOKIDAR_USEPOLLING=true react-scripts start"
  but the correct way of adding code to run at start is to create a .env file in the root directory and in it place any code you want to run at start
  
  if the above doesn't work use this instead: FAST_REFRESH=true WATCHPACK_POLLING=true
  or to have a faster server: 
  
  FAST_REFRESH=true WATCHPACK_POLLING=true react-scripts --max-old-space-size=10128 start
  or
  CHOKIDAR_USEPOLLING=true react-scripts --max-old-space-size=10128 start

  --It's important to know that depending on what abd how much is creshing in your react app the server takes really long to refresh

  */
}

{
  /*
  make sure you use a node version that works(v 16 is the oldest version that works with react).
  check installed versions; nvm ls
  install; nvm intall v16
  set the version to be used by the PC; nvm use v16
  */

  //command to create a react server; npx create-react-app <folder-where-the-app-will-be-created-in>
  //https://vitejs.dev/guide/ (here there is a discrption for setting up a react app that loads way faster when starting and refreshing the server)
  
  //after installation:
  /*
  Success! Created example-app at /home/<directory you executed the command from>/example-app

  Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

  -this goes in the main page before the app is rendered (folder; src and in the file App.js). I'm honestly not sure what this is, the app can run without this script.

import { disableReactDevTools } from '@fvilers/disable-react-devtools'
disableReactDevTools()

*/

//type npm start to run the app
//to remove all unwanted stuff from this template delete:
//delete all files named logo (public and src folders)
//empty app.css and index.css
//in manifest.json empty array named icons
//in index.html remove 2 links that have the name logo and delete content in title container
//in App.js empty the div contrainer and remove the logo import from line 1
}

//jsx
{
  //jsx is a language that integrates html, react and javascript, without jsx you would have to write out react using javascript vanilla plus additional react code, jsx makes it possible to use react without all of that: 
  //const element = <h2 className="name">Name</h2>

  //if you don't use jsx you would have to write in the following syntax(object notation): 
  //const element = React.createElement("h2", {className: "name"}, "Name")

  //when defining a class in jxs instead of: class="name" you use className: "name"

  //a component is created with the first letter capitalized to recognize we are creating an HTML element: const tweet = <Tweet />

  //paths need to be set as if the code where inside the html page that is being served to the browser at the time the element is being added the DOM

  //event handler:
  /*
  the event handler callback takes in an object (normally called event), that objects contains a lot of information from the browser that you can use

  here are some events used in jsx(use camelCase): onClick, onChange(works well for text typed into a form), onSubmit

  function Button() {
    return (
      <button 
        onSubmit={(event) => {
          console.log("Button Clicked");
          event.preventDefault();
      }}>
        Click me!
      </button>
    );
  }

  you can also pass in a function instead of the callback, however when calling a function in JSX you don't use: myFunction()
  if you want to pass in arguments to the function then you have to use the notation above and call the function inside a callback(check example "Calling a function with arguments" below)
  !this syntax of calling functions is ONLY for inside a click event, everywhere else in JSX you need to call a function like you would anywhere else

  function Button() {
    return (
      <button 
        onSubmit={myFunction}>
        Click me!
      </button>
    );
  }

  Calling a function with arguments:
  function Button() {
    return (
      <button 
        onSubmit={( ) => {
          myFunction(agr1, arg2)
      }}>
        Click me!
      </button>
    );
  }
  */

  /*
  passing in information to an element, there are 2 ways. The 2 examples below show how to pass in data when the function is called(normally in the App.js file, check example in tourney-matches project):
  
  <Profile name="Bro", age="20"/> 
  
  <Profile {user} /> //where user is a variable, kind of like ${} notation, but you can pass in a function here as well, same notation, no ()
  
  Above is what you place when that function is called upon (normally in the App.js file). In the file where the function is created you have to add an argument called props. that argument will automatically become an object with all of the info passed in when the function is called in the App.js file
  Note that when passing in information that is not a string or a number(ex; variable), always tipe it in between {}, as such: object={obj}

  //practical example:
  const data = {
    firstName: "Daria ",
    lastName: "Stark"
  }

  call the component in appending function(aka: App.js):
  <PlayerList playerData={parsedPlayerData}/>

  use the information in the function that creates the HTML element:
  function Player(props) {
return(
  <article className="Player">
      <h1>
      {props.firstName} {props.lastName}
      </h1>
    </article>

  the following example showcases "props.children" this variable holds the info that is passed in the body of the browser:
  call the component in appending function(aka: App.js):
  <Button>
  This Info is passed as prop.child because this text is the child of the button element
  </Button>

  use the information in the function that creates the HTML element:
  function Button(props) {
return(
  <button>
    {props.children}
  </button>
  );

  */

  //conditional rendering
  /*
  it's important to point out that conditional rendering doesn't dinamically update. If there is a condition react will only consider that condition when the page loads, if that condition changes the rendered component won't change to adapt to the change unless you refresh the page. However if you use a javascript if statement in a function that returns a rendered HTML, then the component will change dynamically.

  react conditional rendering is used for situations when you want to use the same component (like a button) to appear completely different depending on the props you send down to it. Like using the same button to render a save button or a cancel button etc

  this is like using an if statement, in fact you can create a function that processes info through an if statement but this built in conditional methood is way faster to code

  conditionals here are written in between {} so that the code is scoped and anything that comes before or after the {} can run without interference

  the example below check if there is a value for props.yourName, if true then run the rest of the following code, if not stop the code at the "?" sign and continue running the code at the ":" sign:
  {props.yourName ? <h1>Hello, {props.yourName}. </h1> : <h1>Sorry, you don't seem to have a name.</h1>}

  The code below is similar to the above but the code stops running at the "&&" sign if the statement is false:
  {props.yourName && <h1>Hello {props.yourName}</h1>}

  When an array is referenced in jsx the values are automatically looped. So if you want to display one HTML element for each object inside an array of unknown length(the example below will create an array with an HTML componentr for each item in dataArrayExisting, then react will loop through each one and render it, you have to always add a key={i.iNumber} to create a unique key for each component created where iNumber is a unique value like an id or something):
  function example(props){
  const dataArray = dataArrayExisting.map((i) => {
    <Component key={i.iNumber} name={i.name}, email={i.email} />
  })
return (
  {dataArray}
)
}
  */
}

//export and import (react has it's own way of importing and exporting modules)
{
//export: export default '<whatever file path you need>'
//import: import <moduleName> from '<whatever file path you need>'
}

//States/hooks
{
  /*
  a state lets users change info and the program remembers and stores those changes

  Before using hooks you need to import it. it's imported on in the file that creates the component that uses this function:
  import React, {useState} from 'react';
  
  Then in a function you use a listener along with a state, you'll have to set a variable with an array of 2 values (1st value is the original value, the second value is the changed value):
  This example counts how many times a button is clicked:
  
  function Application(props) {
  const [count, setCount] = useState(0);//useState(0) can also be set as props if this info comes from a parent, however count and setCount need to be between {}
  //also, you can't use (count +1) because you might end up changing the value of count and you should't do that, instead set an argument of previous and that will automatically be equal to count, then you can use it

  const handelEvent = ((prev) => setCount(prev + 1))
  return (
    <main>
      <Button onClick={handelEvent}>Increment</Button>
      <h1>Button was clicked {count} times.</h1>
    </main>
  );

  the value passed into useState() defines the variable count, if you pass nothing count will be undefined. count is a variable containing the argument of useState and setCount is a function that can change the value of count(the value is passed in as an argument into setCount)

  the assignment; const [student, setStudent] = useState("")
  can be set to a more dynamic composition. let's say that we want the default state to be a prop value(a value coming from somewhere else), this value can in some cases end up not existing causing props.whatever to be null. To solve this we can ser useState default value to be props.whatever but if props.whatever is null we can assign a different default value: useState(props.whatever || "")

  */

  /*
  CONTROLLED COMPONENT
  this code tracks typed in values in a form:
  
  function DisplayWord(props) {
  const [word, setWord] = useState("");

  return (
    <main>
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Please enter a word"
      />
      <h1>Your word is: {word}.</h1>
    </main>
  );
}
  */

  //combined states
  /*
  if you are controlling multiple states you'll end up with a ton of diffetent states:
  const [state1, setState1] = useState1(1);
  const [state2, setState2] = useState2(2);
  etc...
  in order to avoid this you can have a master state containing an object with all states you want to control, then you'll have functions that change the state of each component inside the useState object:

  const [state, setState] = useState({
    state1: "whatever",
    state2: "",
    state3: ""
  });

  //create the function(changes the state of a object in main state to whatever you pass in). Note that <...prev> means you are placing everything from the state object into the new object but you are changing the value of one key
  const setState1 = (info) => {
    setState((prev) => return({ ...prev, state1: info }))
  };

  //call the function
  setState1('info')
  */

  /*
  Custom Hook
  you can create a function that is triggered when there is a change
  normally we would have:
  const [value, setValue] = useState(initial);
  onClick(() => setValue('whatever'))
  but with a custom hook you can have the functionality in a function then call it when you want to render a repetative hook in many HTML elements


  function useControlledInput(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: (event) => setValue(event.target.value)
  }
}

bellow there is a complete function from the scheduler app (lighthouse labs course), this function handles a state and it keeps track of previous states:

//custom hook that keep track of previous state, so that you can go back one step
export function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);
  
  
  //transition to the next state
  function transition(newMode, replace = false){

    if (replace) {
      setHistory((prev) => [...prev])
      setMode(newMode)
    } else {
      //add the newest state to history(this method of storing data is called stack data structure. Where you store info in an array and to go back one step you use history.pop() to delete the last value(which would be the current), the access the last data value of the array)
      setHistory((prev) => [...prev, newMode])
      setMode(newMode)
    }
  }
  
  //store previous state
  function back(){
    //This checks if the history has at least more than one item, otherwise the code that comes next would delete the last remaining item from the array then try to access a a null array
    if(history.length > 1){
      //we are going to use .pop() method, this will mutate the array, so we need to make a copy of the original array beforehand
      let historyCopy = [...history]
      historyCopy.pop()
      setHistory(historyCopy)
      setMode(historyCopy[historyCopy.length-1])
    }
  }

  return {mode, transition, back}
}
  */
}

//fragments
{
  /*
  in react you can't render 2 root containers/elements you always have to wrap all your elements inside a single parent element. However you can use a special code that allows you to render many root elements inside an element called fragment that will be ignored after it renders to the dom:
 
  return (
  <React.Fragment>
    <h1>A heading</h1>
    <p>A paragraph</p>
  </React.Fragment>
)

if you import fragment(import React, { Fragment } from 'react';) you can simply use <> </> instead
  */
}

//Default element that changed based on props input at the App.js level
{
/*
This example shows a dynamic element that works as a default and changes depending on how you call it by passing different props to it

this function creates the element:
//create a default button element that dynamically changes style and name based on props passed in
export default function Button(props) {
   
   //button is the default class
   let buttonClass = "button";

   //the if statements below change the buttonClass value this variable determines what the class will be depending on what props are passed in when this function is called in the Application.js file
   if (props.confirm) {
      //if this is true the class will be: button button--confirm
      buttonClass += " button--confirm";
   }
   if (props.danger) {
      buttonClass += " button--danger";
    }

   return (
      <button 
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
 }

 here we call the element inside Apps.js:
 -the props passed don't have the syntax: prop="value" because they are used as truthy or false values.
 -note that the comments below need to be remover in order to run this code in JSX/react
  //default button, no props passed in
  <Button>Base</Button>
  //the confirm prop is detected to be present and a new style is added to the button
  <Button confirm>Confirm</Button>
  //same as above
  <Button danger>Cancel</Button>
  //when on click is detected it runs any function passed in as a value
  <Button onClick={functionHandlingTheClickEvent}>Clickable</Button>
  ));

  //instead of using the if statements there is a js module that handels this much better:
  //classnames is a js module it takes in 2 parameters, a string and an object, the string will always return but the object will return the key(s) only if the value of that key equals to truthy. This module is better than using if statements
   let buttonClass = classNames(
      //button will always return as a classname since it's the default class
      'button', 
      {  
         //this will only return if "confirm" is passed as a prop, same for the pairs below
         "button--confirm": props.confirm,
         "button--danger": props.danger
      }
*/
}

//React Dev Tools is a chrome extenssion, it shows you more detaild info in the inspect too of chrome. Very useful for debuggin. The way of using this is to go to inspect and find the Components section, then in your code you can conso0le log anything and you will be able to see it in the DOM

//axios
{
  //axios is a library from .ajax that works well in React, it fetches API data, normally used to fetch database server data. There is an API Fetcher module called fetch, the only difference of axios is that when using fetch you need to also use .jason() module to parse the incoming data, axios already does that for you.

  //you'll need to install it, make sure the installed version is compatible with your project: npm install axios or npm i axios@0.2.0
  //const axios = require('axios');

  //when calling an API in REACT you always do it from within a function called useEffect it's described below. Usually developers use axios to make these API requests including to the database server

  //these are the actions supported by axios:
  /*
  axios.get(url[, config])
  axios.post(url[, config])
  axios.put(url[, config])
  axios.delete(url[, config])
  
  //get info
  axios.get("APIurl")
    .catch((e)=>e)
    .then((response) => {
    console.log(response);
  });

  //send info
  axios
  .put(`/api/appointments/2`, {
    id: 2,
    time: "1pm",
    interview: {
      student: "Archie Cohen",
      interviewer: 9,
    },
  })
  .then((response) => {
    console.log(response);
  });

  for requesting an AIP that requires authentication, check the documentation for how the request should be made, there is an example in the javaScriptModules-library.js file, under fetch module

  */

}

//useEffect
{
  //useEffect(), is a react module, it takes in a callback and an optional array(called dependencies), the callback will run every time the page loads and whenever a dependency changes(no dependencies useEffect won't keep triggering), this is used to fetch an API or other situations you want to fire a functionwhen a variable changes.
  //Don't run useEffect with a side effects(when you set react to do something onChange() and that something changes what is in the tracked part of the browser, then you enter an infinite loop, where useEffect will be triggered, changing the something that is tracked and so on(use effect will run every time a dependency changes(usually a state value))).
  
//to use this you neet to import it, the following code imports React, useEffect and useState: import React, {useState, useEffect} from 'react';

  //there are some rules to hooks that you cannot do: 
  //a hook is a js function that uses useState and/or useEffect and returns an object with a state
  /*
  -don't call hooks in loops, conditionals(but a conditional can go inside the effect method), or nested functions
  -only call hooks from iunside react components (you can call it in the function that renders the component, no need to call it in the part where content is rendered to the page)
  -The effect method that we pass to useEffect must either return undefined or a function.
  -hook functions must start with "use" followed by a capital letter
  -export/declare ony one hook per file
  

  The example below uses setTimeout() function to count down from 10 and stops counting at zero, with one second interval. the return in the end makes it possible to close the page and interrupt the count, otherwise the server would continue running the code even with the browser open. 
  On load sueEffect starts the countdown, the countdown changes the value of likes, that change causes useEffect to run again and so forth on a loop. to prevent this from happening you can set the dependency top an empty array

  const [likes, setLikes] = useState(10);
  useEffect(() => {
  if (likes > 0) {
    const timeout = setTimeout(() => setLikes(prev => prev - 1), 1000);
    return () => clearTimeout(timeout); // clears the timer set above
  }
  },[likes])


  here is what you write(in a react component function) to visualize what your custom hook is returning:
  visitedStores if the state variable and useVisitedStores() is the custom hook function
  const { visitedStores } = useVisitedStores(userId)
  useEffect(() => {
    console.log(visitedStores)
  },[visitedStores]);

  */
}

//propTypes
{
  //This module dissalows a prop to be passed in if it is not the correct type(ex: array or string).
  //install the module:  npm install --save-dev prop-types
  //import: import PropTypes from 'prop-types';
  //in the file that creates the HTML element, after the function has been decleared, you add the following code:

  //using propTypes to limit the interviewers prop to be an array
  /*
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}

export default InterviewerList;
*/

//here is the documentation showing how to add diferent restrictions: https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes
}

//template objects
{
  /*
  mui.com
  https://mui.com/material-ui/react-card/
  this is an amazing site with code to copy and paste into a react server for pre made components
  you do have to check the install page and to a couple of npm installs. it's super quick
  */
}

//Global states
{
  /*
   *This allows you to access any state from any file within a react project
   you can find the documentation(very straight forward) in here; https://docs.pmnd.rs/zustand/getting-started/introduction (managing global states) 

   *1st you need to install it; npm install zustand
  import { create } from 'zustand'

  //for this to work you have to run a custom Hook (for example: useManageApp) 
//the hook will then download info from the db, save that info in the global states.
//You can also use this object to make any set of info to ba accessible globally
const useGlobalStates = create((set) => ({
  //here the defaultCategory is set to an empty array, since in this app all data coming from db is an array, if the data type is set to something different the app breaks. 

  categories: [],
  setCategories: (newData) => {
    //set is a function that returns an object. insert a a single key&value pair, where the value is an array(incoming from db), the key name HAS to be the same as the state(in this case: categories)
    set(
      () => ( { categories: newData } )
    )
  },
  
}))

export default useGlobalStates

here is how you import a state into another file;
const { categories } = useGlobalStates()

   */
}