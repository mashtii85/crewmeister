# CrewmeisterCodeChallenge

## Introduction

A project to see list of absence on crewmeister and their reason plus number of days they reqeusted and whether they got confirmation, or rejection.

I was trying to obey seperation of concern by dividing functionalites between projects using mono repo approach.
I

## Stack

Nx mono repo, Nextjs, react query, tailwind, styled-components, eslint, prettier, cypress, jest, typescript

## How it works

### Instalation

Fist step i to install packages using yarn or npm.

- Run `npm i`
  OR
- Run `yarn`
  You can choose one of the above package manager to install packages

### Run

By running npm start project started and you can see list of absence chained to the correspondent members
We can sort absences by name and type. On action column we can see details of each member on an Off Canvas.
We can also filter the list by absence type and by date and by pressing reset date filter the choosen date will be reset.
On pagination section we have page size, total number of rows, slices of rows which is presenting, next and previous buttons which are automatically hide, for example if we are showing rows 1 to 10 then we can't see previous button.

### Tests

#### End-to-end test

For Testing application, I went for cypress, you may ask why? Short answer would be you can write end-to-end, Integration and unit test. You are just need to give it a try. here's coprehensive answer to why, https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn

To start testing end-to-end you need to run npm run e2e. The test will be run on headead mode so you can see what's going on.
Within test I tested name and type sorts both ascending and desending orders, Filters by date and types, Off canvas, and pagination. You can run e2e test by the following script.
Run `npm run e2e`
A dashboard will appear which ask you in which browser you are going to test app. After choosing your favorite browser test list will appear. You are suppose to choose absence and then tests will be started.

#### Unit test

There is also a small unit test using jest on utilities lib which examine sortObject function.
Run `npm run utilities:test`

## Project Structure

### Projects

- crewmeister
- crewmeister-e2e
  We have two front-end project crewmeister and it's correspondent e2e project. crewmeister is what the stroy begins.

### Libs

- assets
- services
- styles
- types
- ui-components
- utilities

Each library should follow plural naming as you can see.

assets:
Every thing from images and svg files goes to this library

services:
Core functionlity and blue print of CRUD operation is placed in this library. We have a base service which is handle CRUD operation lives in here. the reason we created a base service is that some day if we want to use axios instead of fetch here's the only place we should change the code. BaseService Class is a singleton. So it's created once and will be reused as project is live.
Each component has a service for it's own, these services lives in this library as well. Each service will use the baseService.

styles:
I used tailwind design system with styled-components, so as the name implies all the styles are placed in this library. One thing you should be aware of is that in mono repos you some times shouldn't exprot all of the files in a library. It could be tricky and some time will be troublesome. For example if we want to style two `<td>` tag then we have two `StyledTd` with different functionality. The same goes here and works in here. So I was trying to avoid export all files in a single index file

types
In this project I utilize TypeScript and love the power it gives us developer. So any types consisting of interfaces or types goes to this library. The rule is that every interface starts with `I` and every type starts with `T`. In this way we can clarify those modules start with `I` or `T` are actually types.

ui-components
Old days when we want to create a nextjs app or create react app or any other react app, we created src and on src everything goes to the `components` folder. Suppose we have migrated everything from components folder to ui-components library. It will take care of every react component and let our main app small and clean. In fact that's the whole point of using mono repos.

utilies:
If we want to have a helper to let a currency, comma separated, then the comma-separated function is a utility and it would lives in this library. So any utility lives in this library.

## Components

Table:
I created the table from the base. It's written in a way that we can reuse it with any other component. You can empower every row with the ability to sort. Also we can have our custom record, for example if we want a record have a differnet background, we can override it by formatter function. We can have our custom task bar on table too.

Offcanvas:
This component can also be reused all over the project.

### Do we really needs a mono repo and different libraries

You may think with yourself and say what the heck? do I need lots of libs, I can create a project and do what I want in a second. Or in far better way, you say, it would be great for project with large scales.
I would say yes! when we always put separation of concern at first and even second priority then after 2 or 3 years for example application won't be a mess. In this way everything is placed where it belongs to.
Every small project is going to be a gigantic, one day or at least let's think in this way. So if from the very begining we have the structure and core which has the ability to expand and grow then we are in business.

Here's the project deps.
![alt text](https://github.com/mashtii85/crewmeister/blob/main/graph.png?raw=true)
We can see dependencies between packages

### Stacks

Design system: I used to work with Material UI and IUI lately. Then I heard tailwind is on the market and has a lot to say. So I decided to give it a shot and it turns out I love it. yes it was the first time I was using tailwind

react-query: I think it's a must for anyone who works with API to about react-query. we also have SWR, but I love the way react query works. I used apollo client and it's kind of like that

styled-components: Well it's been years I am working with styled-components and it's really nice. you can provide themes and have css in js.

prettier/linter: it's a must that every application should follow the same pattern and I think with prettier and linter we can reach this goal. for linting all projects and libs:
Run `npm run lint`

nextjs
For now I am only using the power of nextjs pagination and no more

TypeScript
I remember when I first started to code in js with the background of comile time programming. Well it was pretty hard and troublesome for me to work with js. everything fine but when you run the code not one, lots of errors comes out of blue and you will bombared with lots of undefined and unhandled errors. A year later I got familiar with TS and I love to work with it. maybe you thing it make us slower. Yes at first it does, but when you go further and project gets bigger and bigger it will become a God.

nx-monorepo:
Words can not express how powerfull this monorepo is. You should try it. In simple way, if we have 3 projects, backend, frontend and mobile, all written in js then you can place all in the mono repo. You can empower any package to build and publish in npm or github packages

# Have a word

I know Absence componet needs to be gaurded with Context so the complexity becomes much less, unfortunately I don't have enought time to refactor it and sorry for that.
Finally, thank you for giving me this opportunity and challenge. The readme ilustrate a big picture, I can talk about each section for hours :). It would be wonderfull if you could give me feedback. Anyway I hope you like it.
