//This is a react framework, having a traditional react application means that the page will be rendered in the browser. The issue with this is that bots (google, and social media apps) can't read your website making it not SEO friendly. next.js pre renders your page on the server so that bots can read it and since the page is pre rendered it also loads faster in the client side.
//The down side of server side rendering is that a rendered page coming from the server cannot know what is happening on the client side, meaning it can't handel events(onClick, onChange etc). so with a nextJs app you use a combination of client and server rendering depending on the page

//File structures are a bit diferent

//static generatrion

{//creating a next app
/*
when starting a next app from scratch instead of creating a react app you need to follow the steps below since it already creates a react app. Also when running the code below you will be promped with the name of the project, that name will also be the name of the folder where the project is going to live, so run the code below from a folder where you want the app folder to live in, otherwise you'll end up with nested folders.

create a nextJs app: npx create-next-app@<version>; npx create-next-app@13.4 (you'll need nvm 20 or higher) (** THere is something wrong with the version 13.4 when using 'use client', the version 13.2 and 12.3.4 is working)

when creating a next app you will be promped with a fiew questions, if you don't know what something means just chose the default value, sometimes it's "Yes" and other times it's "No"

to run the app go to the project folder and type npm run dev. I haven't tried running this from a virtual machine, since I know this is a react app and react apps are the worst to run in a VM, so I run this from the main computer. However you might have to install nextJs by typing: npm install next react react-dom. However you'll have to create the app from the machine you will be working on

*/
}

{//Folder structure
/*

*the files with react components can have the following extenssions: .tsx(for typeScript), .js, .jsx

*app: from within this folder you can create folders and files and they will automatically create routs for the files and folders created
-Defaults:
+the .tsx files are the react components containing html and javascript
+page.tsx is the index page
+global.css is a file with the main css coading, there are stylings that don't need to be applied to a specific component, and it will still configure the web page. This happens when you name a class "body" for example

-to create: (any file named page.tsx will be the index page of the rout (based on the folder the page.tsx file is placed in)(for older versions than version 13 the index page should be named: index)
+users/page.tsx; this will be the page rendered at rout: app.com/users
+components; this folder holds the files with the react components you build

*public: here we put our images

*/
}

//Links: in HTML we use <a ...></a> to create a link, however this methood causes a full page reload and it makes apps slow, that's why nextJs has a built in element specific for links called "Link" the sinthax is the same simply replace "a" for "Link". However you do need to import Link at the top of the file; import Link from 'next/link'

{//Rendering (rendering can be CSR(client side rendering) or SSR(server side rendering))
/*

*By default, all files in the app folder are going to be rendered in the server

*To render on client side you should create components completely isolated so that you are rendering the least info possible on client side, then on top of the file type: 'use client'

*/
}

{//Fetching data (alternative to useState and useEffect)
/*

*There is this odd sintax when using async functions like API requests, the following uses the fetch function for an API request from a component (the issue with the sintax below is that it only works on version 13 or newer, but those versions aren't working when I use 'use client' so I'm not sure how to use this feature, even though it's crucial to know;

const UsersPage = async () => {
  //api request
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  return (
    <div>
    </div>
  )
}

*Cash: this is a way of storing data retreived from API requests, so that  it can be loaded faster. however to learn this the step above needs to work and I couldn't find a way to follow the tutorial on this

*/
}

{//CSS modules
/*

*you can create CSS files that are only going to work for specific files, making it possible to repeat class names as long as the class names are in different files

*to create a CSS module file, name it <same name as component>.module.css
-the only issue hereis that you can't name classes with hyphen (ex: card-top) you/ll have to youse camelcase to name the classes
-another tintax restriction is that you need to import it the call it in a different way;
import styles from '<file path>'

<... className={styles.card}>

*/
}

{//
/*



*/
}