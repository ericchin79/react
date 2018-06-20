# react
---
let's experiment with some ReactJs

* GitHub is the code repository the code will be stored in

* React.js Is the language the developers are writing in, which is a A JavaScript library for building user interfaces https://reactjs.org/

* Lodash is the utility framework providing a A modern JavaScript utility library delivering modularity, performance & extras. https://lodash.com/

* Moment.js is the utility framework used to parse, validate, manipulate, and display dates and times in JavaScript. https://momentjs.com/

* Unit & Integration tests are written using [Jasmine]

* Atomic Design - we will be following this methodology ( Atoms, Molecules, Organisms, Templates, Pages ) http://atomicdesign.bradfrost.com/chapter-2/

* Bootstrap - Responsive grid layout and all the things ( https://getbootstrap.com/ )

* React Bootstrap what if, we just used what was available in the world instead of `Nationwide bootstrap`
    - watch this video ( https://www.youtube.com/watch?v=Mn4VLuDpwNw )
    - `npm install --save react-bootstrap`
    - `npm install --save bootstrap`
    - open index JS
    - import bootstrap
    - Props ( https://www.youtube.com/watch?v=MH7AAJKHoLU )
    - stack overflow questions ( https://stackoverflow.com/questions/tagged/react-bootstrap )
 
## Developer Tools
---

* Due to an Mcafee exemption, using your admin rights, ensure to install everything inside C:\devl

* CMDR is a software package created out of pure frustration over the absence of nice console emulators on Windows. ( http://cmder.net/ )

* Visual Studio Code Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. ( https://code.visualstudio.com/ )

* Github Desktop is a tool to assist you checkout branches with pull requests, view CI statuses, and co-author commits without touching the command line. ( https://desktop.github.com/ )

### Setup -- Follow these steps in order, and you will be all set
---
Install Node

1. Ask a developer which version of Node we use ( current: Latest Version )
2. Go download the installer file here ( https://nodejs.org/en/download/releases/ ) 
3. Install Node in C:devl/node
4. Open a command line, set your nationwide repository
5. `npm config set registry http://repo.nwie.net/nexus/content/groups/npm/`
6. verify it worked by typing `npm config list`

Install CMDR ( get the full version )
1. Go here and download the full version (http://cmder.net/)
2. Install it into C:/devl/CMDR
3. It is important to note, even if you don't use this tool you SHOULD always run CMDR or your CMD as administrator

Install GIT locally
1. Install Git ( https://git-scm.com ) into C:/devl/Git
2. Install GitHub Desktop ( https://desktop.github.com ) into C:/devl/GitHubDesktop
3. Login to GitHub ( https://github.nwie.net/ )

Run Though GIT tutorials ( optional )
1. Run though the GIT training
2. Hello World ( https://guides.github.com/activities/hello-world  ) [10 minutes]
3. Learn the command line ( https://try.github.io/levels/1/challenges/1  ) [1 hour]
4. GIT branching (  http://learngitbranching.js.org/  ) [1 hour]

GitHub Setup
1. Go to github.nwie.net and login with your nwie credentials
2. Once logged in, you need to go out to our individual code bases
3. Setup your Nationwide Account inside your GIT Desktop workspace

Setup a react application to verify it works
1. `npx create-react-app my-first-react-app`
2. `cd my-first-react-app`
3. `npm start`
4. Watch this https://www.youtube.com/watch?v=S66rHpyU-Eg&t=0s&list=PL2itXvB3jRjsuhk4fApmFL-VzSuaUd_IJ&index=2
5. Redux Watch this - https://www.youtube.com/watch?v=93p3LxR9xfM

SharePoint Setup ( https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment )
1. install YEoman and gulp `npm install -g yo gulp`
2. SharePoint Framework Yeoman generator `npm install -g @microsoft/generator-sharepoint`
3. Force the generator to install locally `npm install @microsoft/generator-sharepoint --save-dev`

Setup a brand new web part project
1. create a new project directory `md helloworld-webpart`
2. change to that directory `cd helloworld-webpart`
3. Create a new HelloWorld web part `yo @microsoft/sharepoint`
4. This will start the webpart wizard and prompt you prompted .......
    - solution name `hello-world-webpart`
    - choose `sharepoint online only ( latest )`
    - where to put the files `use current folder`
    - do you want tenant admin the choce of... `No`
    - which client side componet type `webpart`
    - what is your webpart name `HelloWorld`
    - what is your web part description `HelloWorld description`
    - which JS framework `React` 
5. Steps taken from ( https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part )

CONGRATS! Your workspace setup is compelte!
- if you are having issues move on to the `Fix your ADW Setup using Sharepoint` section
- otherwise, you are now ready to check out the ADW code

### Adding a second webpart
---
- the following steps show you how to manually do this task

Adding a second web part ( as many as you need )
1. Change to your existing project directory
2. Create a new web part `yo @microsoft/sharepoint`
3. This will start the webpart wizard and prompt you....
    - solution name `howdy-world-webpart`
    - choose `sharepoint online only ( latest )`
    - where to put the files `use current folder`
    - do you want tenant admin the choce of... `No`
    - which client side componet type `webpart`
    - what is your webpart name `222HelloWorld222`
    - what is your web part description `2nd description`
    - which JS framework `React`
 
Deploying to Sharepoint (  )
1. Once you have finished building
2. Run the following command from your project directory `gulp package -solution`
3. Running the code locally, you run this command `gulp serve`  or you can try `gulp serve --nobrowser`

### Node commands 
---
1. `npm start`
2. `npm run build`
3. `npm test`
4. `npm run eject`
5. `npm start`
6. `npm run build` - to create a prod build 

***

An [example][id]. Then, anywhere
else in the doc, define the link:

  [id]: http://example.com/  "Title"