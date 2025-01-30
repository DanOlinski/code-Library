//--------------js interacting with HTML using js vanilla ice cream----------
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

//-------basic network connection (syncronous) using net methood
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
//-----basic network connections using http methood (async code)
{
    /*
    const http = require("http");
    const PORT = 8080;
    
    // a function which handles requests and sends response
    const requestHandler = function (request, response) {
    
      //--this string is a response sent to the client
      const responseText = `Requested Path: ${request.url}\nRequest Method: ${request.method}`;
      response.end(responseText);
    };
    
    //----variable for server using function above
    const server = http.createServer(requestHandler);
    
    //---this function calls the variable above that calls the function wich activates the server to listening mode
    server.listen(PORT, () => {
      
      //this string is loges on the server terminal
      console.log(`Server listening on: http://localhost:${PORT}`);
    });
  
    to connect with the created folder there are 2 way:
    terminal: curl http://localhost:8080/path
    browser: http://localhost:8080/path
    */
}

//----basic server using express (this is the methood used in the industry for creating a server)
{
    /*
  //npm init -y
  //npm install ejs (this is to render and link HTML code with file extension .ejs)
  //npm install express --save (it's a node package)
  
  const express  = require("express"); // Import the express library
  const app = express(); // Define app as an instance of express
  const port = 3000; // Define base URL as http:\\localhost:3000
  
  //res sends a response to the client and req requests something the client placed in the DOM from a form
  //below is how to send a response to the client rendering at the home page url a file called index.ejs inside a folder called views(there has to be a folder called views)
  
  // app.get("/", function(req,res){
  //   const test = {}
  //   res.render("index.ejs", test);
  // });
  
  //in order to render an html file you need to use: 
  app.use(express.static("views")) //where views is a folder and in that folder there needs to be a file called index.html
  
  
  
  //this functions is what creates the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Tell yourself the port number to prevent mistakes in the future.
  });
  
  //to run the folder you can either:
  //type into terminal: node server.js
  //use browser: http:\\localhost:3000

  //most apps run some routs in other files, in order to do that you need to have all of the .use functions in the server file, then you can ser router files(check midterm app for more info on this)
  */
  //.get is used to request data from the server
  //.post send data to the server to be processed
  //.put is used to over write/replace/add new data in the db server
  //.delete is used to delete data
  // put and delete are more complicated because they need HTTP Method Override technique, if you don't know how to use that you can complete the same tasks using .get method (this is for a scenario where you are sending data from an html form, for a database server that has no front end check description below)
  //(when running a database server with no front end html form)put, post and delete routs can't be simply be accessed by going to the browser and typing a url, because the way the request works is that it expects to receive an object, when you go to the browser you can only request with a url and when an object is not received the rout crashes. The way of debugging such a rout is by using a software called postman. Download postman from https://www.postman.com/. make requests from postman and you can use console log in your local file to view the log in your server terminal
  //to handel .put .delete or .post requests coming from a remote server into your database server(for example), express has to be able to handel incoming json formats, to make this possible add the following code to the express server setup file: app.use(express.json())

  //Check Tiny app for more info on express and interaction between express and ejs with HTML
  
  /*
  This is an express server with a pool (check database application for more info)(remember to install pg package for pool module to work)
  
  const express  = require("express"); // Import the express library
  const app = express(); // Define app as an instance of express
  const port = 3000; // Define base URL as http:\\localhost:3000
  
  //the code below is typically placed in another file called pool.js to make the code more modular
  const { Pool } = require('pg');
  const pool = new Pool({
    user: 'labber', //ussername set in the terminal before the @ symbol
    password: 'labber', //same as machine password
    host: 'localhost', //this connects to the server that contains the database
    database: 'bootcampx' //name of the database
  });
  
  app.use(express.static("views")) // views is a folder and in that folder there needs to be a file called index.html
  app.use(express.urlencoded({extended: true})) //this makes it possible to handel info coming from a form from the browser
  
  //below is a rount being rendered to the browser
  //you can also use router.get()
  app.get("/hello", (req, req) => {
  
  //whatever you place in values you have to use it in the query otherwise the entire program won't work
  const values = [`%${injection_from_user_1}%`, `%${injection_from_user_2}%`]
  const queryString = `
  SELECT id, name, cohort_id
  FROM students
  WHERE name = $2
  LIMIT $1;
  `
  return pool.query(queryString, values)
  .then(res => {
    //this actually returns an array of objects
    return res.rows;
  })
  //another way of doing this is by wrapping the pool module inside a function. That way you can run the function as a promise: .then(function) => {res.send({ function })} .catch((error) => {res.send(error)})
  //if you do it like it's described above don'e have the .catch() in the pool function
  .catch(err => {
    return err
  });
  
  })
  
  //this functions is what creates the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Tell yourself the port number to prevent mistakes in the future.
  });
  
  */
}

//----async https request using request module (this is a type of server, bbut express is what's mostly used)
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

//-----review on manpulating objects using CRUD(create, review, update, delete)
{
  const users = {}

  //C
  users["5315"] = {first_name: "John", last_name: "Smith"}
  //R
  console.log(users["5315"])
  //U
  users["5315"].first_name = "Jane"
  //D
  delete users["5315"]
  console.log(users)
}

//Cookes how to handle cookies
{
  /*
//This module handles information saved as cookies. It has the added benefit of encrypting the cookies.
//npm i cookie-session
let cookieSession = require('cookie-session');
//app.use allows express to use required packages
app.use(cookieSession({
  name: 'session',
  keys: ['abcd'],
}));
//to check the data/cookies saved: use the inspect tool in chrome /Application/Cookies in the browser
//In a real world scenario you'll have 1 file for the server and other files to handel routs, in this case the app.use needs to be placed in the server file, even when using cookie-session in another rout handeler file(check lighthouselabs midterm project for a practical example of this)
//below under password hashing there is an example of cooki-session being used
*/
}
//password hashing (hashing is a encryption that in theorey cannot be decrypted)
{
//the standard used as of 2023 is bcryptjs
//install it as a package: npm install bcryptjs
//however, servers are hackable and if someone can change the code in a jsfile that handels passwords they can change the code and store the passwords into a database file
//check tiny app for more info on this
/*
this is how to use bcrypt
const bcrypt = require("bcryptjs");
const password = "password input from user"
const hashedPassword = bcrypt.hashSync(password, 10);
*/

/*
here is a practicle example of a rout handeling a user registration

//the following rout saves user information into users object and saves a user ID number as a cookie file, this ID number is used to identify the logged user in the users object and retrieve data related to the logged user to display users email on the header. this rout redirects the user to /urls page
app.post("/register", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  //this statement handles errors (user already registered)
  if (userLookup(email)) {
    return res.status(400).send("Error 400: user already registered");
  }
  
  //this statement handles errors (empty fields)
  if (!email || !password) {
    return res.status(400).send("Error 400: empty field(s)");
  } else {
    //this function generates a random string ans stores that string as a unique ID for the user
    let id = generateRandomString();
    users[id] = { 'id': id, 'email': email, 'password': hashedPassword};
    res.cookie('user_id', id);
    return res.redirect('/urls');
  }
});
*/

/*
here is the login after a user is saved to the server.
the main functions regarding bcrypt are 
bcrypt.compareSync(passwordInput, hashPasswordSavedinDatabase)

//The rout below logs the user(retrieving info from user_id cookie object).
//to check the data/cookies saved: use the inspect tool in chrome /Application/Cookies in the browser
app.post("/login", (req, res) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;
  
  //this statement handles errors (empty fields)
  if (!emailInput || !passwordInput) {
    return res.status(400).send("Error 400: Empty field(s)");
  }
 
  const userId = userLookup(emailInput)
  //this statement handles errors (user not registered)
  if (userId === null) {
    return res.status(403).send("Error 403: User not registered");
  }

  //this statement handles errors (incorrect password)
  if (bcrypt.compareSync(passwordInput, userId['password'])) {
    res.cookie('user_id', userId.id);
    return res.redirect('/urls');
  } else {
    return res.status(403).send("Error 403: Incorrect password");
  }
});
*/
}

//event listeners and jQuery listener, for more examples check tweeter app from lighthouse labs course 
{
  
/* this html runs with the javascript vanilla
<html>
  <head>
    <title>My Page</title>
  </head>
  <body style="background-color: #000000; color: aliceblue; display: flex; flex-direction: column; margin-top: 100px; justify-content: center; align-items: center;">
    <div id="div-one">Click me!</div>
    <div id="div-two" style="margin-top: 20px;">Double Click Me!</div>

    <form id='form' style="margin-top: 20px;">
      Add text
      <input type="text" >
    </form>
    <output name="counter" class="counter" for="tweet-text">140</output>
  </body>
  <script src="jsTinkering.js"></script>
</html>
*/

/*
//listen for double click event anywhere in the page (using javascript vanilla)
document.addEventListener("dblclick", () => {
  alert("You just clicked somewhere on this page.");
});

// specify the element's ID in the HTML file using document.getElementById method and put that reference in a variable
const div1 = document.getElementById("div-one");

//this checks that the div was loaded before running the listener
addEventListener("DOMContentLoaded", (event) => {

  // when div1 is double clicked, run the function
  div1.addEventListener("dblclick", () => {
  alert("You clicked on div 1.");

})

  //the 1st listener is set to identify a click anywhere in the page, but I don't want it triggered when I click the text within div-one, so the code below prevents the 1st listener from bubbling up when this listener is triggered
  event.stopPropagation()
});

//listen for a single click on div-two to alert the coordinates of that click. This shows that the event is actually an object that stores a lot of information regarding the event
document.getElementById("div-two").addEventListener("click", (event) => {
  alert(event.x + ' ' + event.y);
});
*/

//here are more events you can use: https://developer.mozilla.org/en-US/docs/Web/Events

/*
//jQuery: this library uses a cleaner synthax and does some background processing so that your code works in any browser. It has it's own synthax
//file structure is manditory: you'll need a folder called "public" in it you'll need another 2 folders: "vendor" and "scripts". in vendor you'll have a file called jquery-3.0.0.js (this file contains the code for jquery module), in scripts you'll have js files containing jquery functions(one file for each rout), and helpers.js for helper functions
//You will need to import some stuff in the html file: 
//<script src="/vendor/jquery-3.0.0.js"></script>(this is a file that has to be located in the referenced folder), you can also incert jQuery functionality through a link;
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//<script defer src="helper-functions-that-are-called-where-jQuery-code-is-written.js"></script>
//<script defer src="file-where-jQuery-code-is-written.js"></script>
// module.exports doesn't work with jquery or ajax so you need to import those files in the html code if you are using helper functions

//in the file where the rout is running you have to have:
router.post('/rout', (req, res) => {
  console.log("api rout", req.body)//this is for debugging
  res.json(req.body)//this is used by jquery to use the information
})

//bellow is how you start up jquery
//this prevents server from accessing information that hasn't been loaded yet, since that would cause an error
$(document).ready(function() {
//shorthand version of the above: $(()=>{})

//this is a listener, it is waiting for a button(has a submit action) to be clicked. The button is in a form that form has: action="/rout" method="post"
//the #search_form is referencing the id of the form
$('#search_form').submit((event) => {
  //when the button is clicked the code below prevents the page from refreshing into "/rout" url
  event.preventDefault()

  //any console.log will only appear in the console of the inspect tool in chrome
  //#title is an id of a text field inside the form, the command below accesses the text typed by the user
  console.log( $('#title').val() )

  //here is a very simple jquery function to test if things are working. click the "test text" and a message box should pop up
  <div id="t">test</div>

  //ajax is used to append info into html code
  //the data object sends info to req.body at the rout handler
  $.ajax({
      method: 'post', 
      url: '/rout',
      data: $('#title').val()
    })
      .then((response) => {
        //response is an object coming from res.json at the router witch receives the submit values.
        console.log(response)

        //in order to append something into the html file you usually empty out the container first:
        $('#div').empty();
        //this appends 140 into a container that has an id of div
        $('#div').append($(`<div>140</div>`));
      })
    })
});

$(document).ready(function() {
  $( "#t" ).on( "click", function() {
    alert( "Handler for `click` called." );
  } );
});


//to work with listening events on items that are dynamically appended you will have to add the logic in the function that renders the html to the dom(check midterm app for an example), place the following code at the very end of the function: $('.idSelectorFromItemCreatedInJavaScript', idSelectorFromContainerInActualHtmlFile).click((event) => {console.log('idSelector')})
*/
}

//AJAX
{
  //AJAX is a library that allows a web page to make requests to the server without reloading the page. The server response can be used to modify the page content or trigger a desired behaviour. AJAX library doesn't need to be installed or even imported in the HTML code, however jQuery works well with AJAX that's why AJAX is used with jQuery library. When using AJAX without jQuery you need to u seJSON() methood to convert the received data into a usable format, if you are using jQuery you don't have to convert the incoming data since jQuery automatically converts data for you.
  //inside the jQuery section you'll find some starting code for ajax 
}

//xss injecting js into a text form (check tweeter project in the client-helpers.js file for more information)
{
  /*
  //*XSS is when you inject a script directly into a text input. If the text in a form is saved then parsed to the browser, when the page is loaded the script will execute every time you refresh, potentially braking the website.
//example of a text that can break your site: <script>$("body").empty()</script> or: <script>a program that accesses user passwords</script>
//The escape function converts html tags to unrecognizable code but when it's posted it is translated back to what it was to be safely viewed
//the escape function is used inside the createTweetElement() function
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
*/
}

//-----refresh a server automatically with nodemon
{
  //npm i -D nodemon = this package let's you run a server that will self refresh whenever you change code in your server file code
// to run a file using nodemon you first have to edit the .json file, under the "script" section add: "local": "./node_modules/.bin/nodemon -L <express_server.js>", "dev": "./node_modules/.bin/nodemon -L <express_server.js>" (dont forget to remove angle brackets)
//here is a shorter syntax: "nodemon -L server.js"
//then in the terminal type npm run local 
//nodemon can get really slow to reload. type this code to allocate full memory when nodemon is reloading: NODE_OPTIONS=--max-old-space-size=4096
}

//-------database application connecting a sql database to js (check express server for the implementation of a server along w sql database)
{
  //the db we will be using is postgreSQL(postgress or psql). in order to use psql you need to install the npm package: *** npm install pg
  //make sure the installed pg version is compatible with the node version you are running otherwise it won't work
  //The following connects javascript to a database, then in pool.query you can create a query using sql sintax and handel the data in the form of a promise:
  /*
  //this code should run with an express server code

const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber', //ussername set in the terminal before the @ symbol
  password: 'labber', //same as machine password
  host: 'localhost', //this connects to the server that contains the database
  database: 'bootcampx' //name of the database
});

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  //this actually returns an array of objects
  return res.rows;
})
//you shouldn't have this .catch if you are running this pool in a rout that is already catching errors
.catch(err => {
  console.error('query error', err.stack)
  return err
});

*/

//sql injection (this is when you have ${...} streight into your query from the web app interface, where a user can type sql code to mess with your database. The way of finding out if your code is vulnerable is by typing into the html form: -- this comments out code and it will brake your query if it is recognized as code)
/*
this is how your code should look like(The $1 is identified by sql as injected information that should not be used as code, it also specifies the position it will retreive data from the values variable):

//whatever you place in values you have to use it in the query otherwise the entire program won't work
const values = [`%${injection_from_user_1}%`, `%${injection_from_user_2}%`]
const queryString = `
SELECT id, name, cohort_id
FROM students
WHERE name = $2
LIMIT $1;
`
pool.query(queryString, values)
.then(res => {
  //this actually returns an array of objects
  return res.rows;
})
//you shouldn't have this .catch if you are running this pool in a rout that is already catching errors
.catch(err => {
  console.error('query error', err.stack)
  return err
});
*/

/* 
//this is how you create a query for a search button:
//the options argument is an object that can contain a number of searchable filters
const searchProperties = function(searchOptions, limit = 10) {
  
  const values = [];
  let queryString = `
  SELECT avg(property_reviews.rating) as average_rating, properties.*
  FROM properties
  JOIN property_reviews ON properties.id = property_reviews.property_id
`;

//this if statement check if any of the searchable filters where activated(added to the searchOptions object), if yes it adds that value and adds a query string to filter that object.

//if options object is not passed in, js will crash since options.city won't exist, this if prevents js from crashing. if no filter is applied don't run the code
if(options){

  //you can't query with more than one WHERE, the next filters have to be wrttiten as AND, but we don't know which filter will be active first so this code adds a WHERE, before the correct query
  if(Object.keys(options).length !== 0){
    queryString += `WHERE `
  }

  //this will determine if there should be an AND added or not
  let booleanOptions = false

  if (options.city) {
    //this will let the next filters use AND, since WHERE will already have been used. if city filter isn't activated WHERE will be used instead of AND by the functions below
    booleanOptions = true 
    values.push(`%${options.city}%`);
    queryString += `city LIKE $${values.length}`;
  }

  if (options.owner_id) {
    //if boolean is true it means a filter before this one was activated meaning I need to add an AND, and also set the boolean to true for the next filter to know it has to use AND
    if(booleanOptions){
      queryString += `AND `
    }
    booleanOptions = true
    
    values.push(`%${options.owner_id}%`);
    queryString += `owner_id LIKE $${values.length}`;
  }
}

//this part of the query has to always be present but it has to be at the end of the query that is why it is only added after the above is executed
values.push(limit);
queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${values.length};
  `;
  return pool
    .query(queryString, values)
    .then(res => {
      return res.rows;
    });
};
*/
}

//-----creating an npm package
{
  //by creating an npm package your code can be used publically and installed just like you would install any other npm package

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

//-------JSON modules
{
  //-------JSON modules (used for dada interchange format)(this converts data into a format that can be used, before JSON you had to use XML to convert that data and it was way more complicated)
   //if you chnge a page url from www to graph you will see the JSON file/object of tht page, the data should be well oginized with key and value pairs 
  //this is one form of APIs, where data i stored as JSON object and info can be easily gathered (find the url with the JSON object you want the use the reques module to request it, then you can use the fs module to store the gathered info)
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
  
  //map loops through an array/object and takes in a function, that function will run an action for every item in that array/object
  const names = animals.map(function(animalsElements){
    return animalsElements.name + ' is a '+ animalsElements.species
  })
  
  const namesSort = animals.map(animalsElements => animalsElements.name)
  
  
  console.log(names)
  console.log(namesSort)
  
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

  //React export import syntax
  {
    //when writinf code for react module.exports doesn't work so you need to use a diferent syntax, however this sintax is not recognized by node so if you do have this code in your file you won't be able to run it in yout terminal using: node <filename.js>

    //export default <function myFunction(){}>: this will only export one function, if the file contains more functions you will have to type the same as before but without the default

    //import <functionName> from '<path>': this will import a function that was exported as: export default. if you want to import a function from a file where more than one function was exported you will have to do the following: import {<functionName>} from '<path>'
  }
}

//----fs module. reads(can also write) info from a file
{
  /* (this code assumes that some .txt files have a single number in it and it adds the number from data1.txt with the number in file data2.txt)(to execute this code)
  
const fs = require('fs')

const sumFileData = function(filePath1, filePath2, callback) {
  let totalSum = 0
  fs.readFile(filePath1, 'utf8', (error, data)=>{
    if(error){
    return callback(error, null)
    }
    totalSum += Number(data)
    fs.readFile(filePath2, 'utf8', (error, data)=>{
      if(error){
      return callback(error, null)
      }
      totalSum += Number(data)
      return callback(null, totalSum)
    })
  })
};

sumFileData('./filePath1.txt', './filePath2.txt', (error, data) => {
  if (error) {
    return console.log(error);
  }
  return console.log(data);
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

//-------Multitsking or asynchronous
{
  //the reason for async is to be able to process tasks that take a long time outside of the call stack, if a heavy process is running in the callstack the page will freeze untill that process is finished. So when you place heavier processes within async functions they can be processed while the call stack is processing synchronous functions. However async functions will only log after all of the sunchronous functions have been completed.
  //Call stack (locally processed code, can only process one code at a time)
  //Web API (code processed by another code provider or if it's a local comand like timeOut is willo be processed by your PC but it will be processed outside of the call stack)
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

//-------dealing with matrix(2D array)
{
  {
  //this function takes in a matrix (2D array) and transforms columns into rows and rows into columns
const transpose = function (matrix) {
  const rows = matrix.length; //determine ammount or rows
  const cols = matrix[0].length; //determine ammount of columns
  const outputMatrix = []; //declare the output array

//you cant use push here because you are creating a nested array, the push notation won't work, you need to create the nested arrays then set values with '=' noptation. the loop bellow runns the same ammount of times as cols is set to. outputMatrix receives a certain ammount of arrays (i = cols).   
  for (let i = 0; i < cols; i++) {
    //i will be a row set to have the length of matrix columns(this will invert columns into rows and rows into columns)
    //i is set to be an empty array that holds an ammount of values
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
  {
  //this function takes in a matrix and a word, it then scans the matrix and returns true of false if the provided word is found in the matris in either horizontal or vertical axis
  const wordSearch = (letters, word) => {
    //this stores the matrix in an inverted manner
    const invertedLetters = [];
    
    
    //this loop goes over the array in the column axis (numbers of iterations is the ammount of columns)
    for (let i = 0; i < letters[0].length; i++) {
      const colArr = [];
  
      //this loop goes over the rows axis (numbers of iterations is the ammount of rows)
      for (let j = 0; j < letters.length; j++) {
        //this pushes into the array inverting cols for rows
        colArr.push(letters[j][i]);
      }
      
      //this places the colArr outside of the loop scope
      invertedLetters.push(colArr);
    }
    
    //map loops through an array and runs a callout function for every item in that array. for this case it is storing data into 'ls' and returning ls.join (this methood joins the items in the nested arrays into strings)
    const horizontalJoin = letters.map(ls => ls.join(''));
    //console.log(horizontalJoin)
    const verticalJoin = invertedLetters.map(cs => cs.join(''))
    
    //these loops check the strings and compare them to the second parameter passed into the function. if they find a match they return true (this is what the module .include does). the great thing about this module is that it can analize a infinite sized string, if within it it finds the sequence of letters that match the searched word it will consider it a match
    for (let l of horizontalJoin) {
      if (l.includes(word)) {return true}
    }
  
    for (let l of verticalJoin) {
      if (l.includes(word)) {return true}
    }
  
    return false;
  };
    
  
  //test code
  console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'WEFMHFBDZ'));
  }
}

//----chaining/cascade/waterfall vs promises(handels async functions)
{
  //--------basic promise (promises handles 4 types of events: resolve, reject, pending, settled)
{//basic promise
  //promises
const flipCoin = () => {//declare a simple function returning a Promise
  return new Promise((heads, tails) => {//the promise takes in 2 functions(fulfilment of the promise or a rejection of the promise)(heads=resolve, tails=reject)
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
{//chainned promisse. using the same example as above this promise stacks .then(). this example shows that you can stack .then() or whateverFunction() and pass in a variable as an argument, that argument will carry the value returned from the previous function
  const flipCoin = () => {
    return new Promise((heads, tails) => {
      if(Math.random() > 0.5) {
        return heads() 
      }
      return tails()
    }) 
  }
  
  flipCoin()
    .then(()=> console.log("heads"))
    .then((whatever) => console.log(whatever))//whatever carries the same value returned by the .then above
    .catch(()=> console.log("tails"))
}

//for apps bellow: To use promises with request(requesting html) you need to install a package: npm i request-promise-native)(then you need to require it: const request = require('request-promise-native')
//if you are just usinr request methood then: npm init -y(crete a .json) then npm install request
//However the request module has been discontinued, so now we need to use node-fetch for API requests. Another really good API requester is axios(check react file for more on how to use axios)

//Here is a simple node-fetch (axios is WAY better(check react file for more info))
{
//npm install node-fetch@2 for this to work
//const fetch = require('node-fetch');

//this token comes from https://aka.ms/ge (this is the microsoft graph site)
//this is the authentication for me to access the info
const token = "EwCQA8l6BAAUAOyDv0l6PcCVu89kmzvqZmkWABkAAU1g0f1qujFk19WLLQ82wK9yu1+MMAEZBmow/6Q/IhFcIdyfhK3ae18cuDyxdl8kE73z7PgtsXEefZwMuS8coNTrcCXmq8b1NojOFgPcKMjdna/IpPACLJItXszDH4Ol5XmFkdmFv0DTFciMlUXLjFmZUgbYH/UQfr2or2qv+XDUBso1n4ryivAtV+14JDPBgxkjH1AbYwNJ+Po9EchJutvk8znZ78ec5sxflyQS170mgVnxzjAg661ca60wmW4r14sc4Yu2F4Iu/AZxqaCnvI4nWDTZ/S85VYJ7rolyyYOQddt2zjMcidun6AwbeTPhzEkdamCeuGb6b1UWRqevNqADZgAACC4iEo5JXf/oYAKO1l6WBwBdEEDJhpQTlkCvvuEm9s/2EaQ8IoJUY0za2c+OBWZpB/WB+cATD86wThwyJP9hWLn1uD3EOdzuc1VX8TFbtKHHrLrVB4FEjLqaGYI9mcn0g0i0EMCcCivq7Gbfxih7M9BdUmk8USWovAGTlSKZwtPULF8HhnKYwHzl4FJOR2OrbFawu6Yt6uBmpB9wxcfAgwviVjloMBedgCckMLSd6FZmL60+jeZ9S+NPy3Zyr8JgNbzJy7z6f5SFU4avgnJe0MUpnNzLgkpbfaJew6PEgoZLrZo3/+B0Js1a4+inCkOdvb1vockzNhaC4zeZLtm4rqCp6EU0FPWsGzmCppAHEuDNEQo/zAyfD7LYrot8W+UL2l92fMx6/vhKLI1SVNntYOV9X/AGL9IEX39XJqht4qABFBGcaLa3/pIH7srSqyG0RpdiUYwHlejRyIcF5dC/6LN8XHIoTyUpRVKA28ly5qyenSdUoO+c9aqFxpNqDTe8DymG6jL2FFxSClYkFRm1t2f4S2rmfu4WZQUzcuRyszrNQ9r/7dc5aQd8o0/sagiaMDE3pb+J/sttwUn/KyCnXL9h2iQULF3xs9bsAqNFED1z3q1MLx2i+0+J0hxjw5gh8pO7d9+O9uhGux6uaUUBNj8r0CfnQgF0bqcj5qjKfW7MDvcvKH+S5gEPiW+WiEHmk7e1X5BDQfWTSSaCw0J7u/F0qGc9r64YT4G65sRzN5h3hAObz/JuhSEByhcJsyssRdLG5sEqVDNEHs4lm8U7xgWLhmFfJe80wuwYGiRRIftJuBwGHpsoM+jHoaMC"


const fetchAPI = () => {
  return fetch(
    //this is the url
    'https://graph.microsoft.com/v1.0/users/daniel.guterres@hotmail.com',
    {
      headers: {
        //this is the authentication
        "Authorization": `Bearer ${token}`,
        //this determains the tipe of info I want to fetch
        "Content-Type": "application/json"
      } 
    }
  )
}

fetchAPI()
  .then((response) => {
    
      //if I want to send the information to be processed somewhere else I would use return response.json. this would return a promise that would have to be resolved by the receiver of this info. If I want to resolve it here I can do as follows:
      response.json()
      .then(
        (res) => {
          console.log(res)
        }
      )
  })
}

//Here is a simple request
{
  //this get's the IP of your PC
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json')
}

fetchMyIP()
  .then((body) => {console.log(body)})
}

//bellow are 2 app examples completing the same task the first one uses chaining and the second one uses promise (the apps below get info from an API and inform what time the ISS will pass overhead at your location)
{
  //chaining this is when you place one function inside another in order to access the return value from the outer function.
  //the example below is a combination of three functions that fetch data from an API then return some info. each function uses info from the outer function in order to run
  //callback is used when you are using asynchronous code(you don't know when sopmething is going to be executed). but when you use too many callbacks you end up with a chain and this is not ideal, Promises are used instead 
  
  {//here is the full app
    //the request functions below have some if statements aimed to handle error events (wrong url or wrong data passed in) without crashing the app but still outputting a helpful message regarding the error. These events are controlled by the callback arguments (check index.js on how these events are hangled within the commented out testing code)
const request = require('request');

//The functiop informs the IP adress of the pc running this app via API request
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

//The function runs all API requests above using cascade methood
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

//here is the master code that runs the entire app
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
})

 //here each function is tested individually    
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
  
}

{
  //this request runs the request methood along with the promise methood
const request = require('request-promise-native');

//this get's the IP of your PC
const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json')
}

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip
  return request(`https://ipwho.is/${ip}`)
}

const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
}

const nextISSTimesForMyLocation = function() {
 return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    //console.log(body)
    const { response } = JSON.parse(data)
    return response
  })
}

//to test each function individually you have to use promis nbotation
//the code below test's fetchMyIP, it can access the 'body' parameter from the request module, there are other parameters like 'data' and more
fetchMyIP()
  .then((body) => {console.log(body)})
//the code below tests all functions, they need to be tested together because of the way they are wtitten they take in info from one another, the order they are placed below is also important
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(nextISSTimesForMyLocation)
  .then((body) => {console.log(body)})
  


//the fuinction loops over the info provided by nextISSTimesForMyLocation and lopgs it in an ordered fashion
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

//the function below properly runs the app
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes)
  })
  .catch((error) => {
    console.log('it didn\'t work: ', error.message)
  })
}

}

//--------try and catch. handeling errors so your app doesn't crash if there is an error. try and catch doesn't work with asyncronus code, for async type of function you need to use promises. when in doubt use promise
{
const func = (info) => {return console.log(info)}

try{
//code you are running.
func(notDefinedVariable)
} catch(error) {
  //it doesn't matter if you have error or error.message, the code will still read whatever is after the catch even though there is an error
console.log(error.message)
}
} 
//timeago or time ago
{
  /*
  <!-- js library to calculate how much time has elapsed since a post was made. For this code to run you either have to import the module in the html code or download it as a module in the directory where the app lives. Here is the synthax for how it should be used in a .js file: timeago.format(dateTweetWasPostedInNumericFormat)-->
    <script 
    src="https://cdnjs.cloudflare.com/ajax/libs/timeago.js/4.0.2/timeago.min.js" 
    integrity="sha512-SVDh1zH5N9ChofSlNAK43lcNS7lWze6DTVx1JCXH1Tmno+0/1jMpdbR8YDgDUfcUrPp1xyE53G42GFrcM0CMVg==" 
    crossorigin="anonymous" 
    referrerpolicy="no-referrer">
  </script>
  
  */
}

//serve npm package
{
  //npm install -g serve
  //install globally in order to see the created files in the browser. when you navigate to a folder and type serve you can open a local host session in your browser and you will see all files within that folder
  
}

//jest a web app testing framework
{
  //when jest is installed you can start is by typing "npm test" (if that's whats specified in the json file). type: 'a' to run all tests, it also runs tests automatically when there is a change to a file in the project
}

//storybook runs with react there are more examples in the React/scheduler directory in LHL course
{
  //this is a website where you can add react components and render to the browser in order to test the elements in a semarate environment
  
  //setting up storybook: you need to install the storybook module. I haven't done that yet so I'm not sure how

  //serving srotybook: before serving you need to make sure storybook is defined in your .json file as bellow, then type in the terminal: npm run strat-storybook
  //"storybook": "start-storybook -p 9009 -s public --ci"

  //index.js: storybook renders to the browser a page based on a single file in a folder located at root: stories/index.js
  //the code below creates a section where you can add components to test:
  /*
  import React from "react";

  import { storiesOf } from "@storybook/react";
  import { action } from "@storybook/addon-actions";
  
  //import a file containing an element you want to work on
  import DayListItem from "components/DayListItem";

  //create a space in the browser page to test the element
  storiesOf("DayListItem", module)

  // Provides the default background color for our component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  
  //we call add() once for each state of the element you want to test
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) 
  ));
  */
}

//shell commands
{
//shell command is like typing a command into the terminal in order to execute an action, here is how you do it
//the following command runs "ls" showing you a list of files in the folder you are in:

/*
const execSync = require('child_process').execSync;

const output = execSync('ls', { encoding: 'utf-8' });

console.log('Output was:\n', output);
*/
}