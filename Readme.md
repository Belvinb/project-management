# Aventur - project management website <br/>
Aventur is a simple project management website developed to turn the process of creating and joining projects easier. Aventur allows users to create tasks and sub tasks and also to initiate group chat between project members.<br/>

## Table of contents

* [Technologies used](#technologies-used)
* [Features](#features)
* [Setup]()
* [Screenshots](#screenshots)



## Technologies used : <br/>
* React
* Redux toolkit
* Node.js
* Express.js
* Mongoose
* Git
* Docker
* Socket.io
* Material UI
* Figma
<!-- to do -->

## Features:<br/>
* Users can create an account and choose between a free or a premium subscription using razorpay.
* Premium users have option to either create or join a project
* After creating a project,invites can be send through email (implemented using nodemailer).
* Invited users can join a project by entering a code recieved through mail.
* User can view all the projects which the user has either joined or created.
* User can click any project and navigate to project dashboard
* Project Dashboard : <br/>
  The dashboard helps to have overall controll over the project,it is divided into various sections
  1. Workflow - user can view all the tasks and sub tasks created for the project and understand the current status of the project
  2. Members - user can view all other members who have joined the project and the project owner can send invites to more users.
  3. Assigned Tasks - A logged in user can view all the tasks assigned to them and update the current status of tasks.
  4. chat - The members of a project can engage in a group chat by clicking on the chat option.
* Users can also create subtasks and add comments to the main tasks.

## ToDo<br/>
1. Admin side management of registered users and payments received.
2. user profile management.

## Setup : <br/>

* server side<br/>
```
$ cd Aventur/server
$ npm install
$ npm run dev
```
* client side<br/>
```
$ cd Aventur/client
$ npm install
$ npm start
```
* socket server<br/>
```
$ cd Aventur/socket
$ npm install
$ npm start
```
## Screenshots : <br/>

