// typeScript(.ts)a programming language can be statically-typed(once a variable is decleared with a data type you can change the content but it always has to be the within the same data type as the origional variable whas created at) or dynamically-typed(variable data types can change, throughout the code). typeScript gets a javascript code and transforms it into a statically-typed program. Having a statically-typed app saves the dev team from having to create test code that checks for data types, because typeScript already does that effitiently.

//in a .ts file you will code in javaScript, plus some extra tyntax native to ts

//Install typescript globally(this assumes you already have npm installed); npm i -g typescript

//check typescript version installed; tsc -v

//compiling; ts is not interpreted by browsers and other libraries and frameworks, so when you code in a ts file you have to convert it (compile) to a .js file, the way you do that is by typing into the command line "tsc <fileName.ts>" this will create a .js file in the same directory whith wich you can run it using "node <filename.js>"

//below is an example of how to declare a variable assigning a data type to it
let testOne: number = 20
console.log(testOne)

