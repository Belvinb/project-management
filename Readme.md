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

### Home page
![Home page 1](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016412/Aventur/Screenshot_from_2022-10-17_19-42-36_i6siaq.png)

![Home page 2](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016412/Aventur/Screenshot_from_2022-10-17_19-43-59_kkhjg1.png)

### Signup page
![Sign up](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016408/Aventur/Screenshot_from_2022-10-17_19-44-18_qbws49.png)

### Login page
![login](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016408/Aventur/Screenshot_from_2022-10-17_19-44-33_iy8mnz.png)

### Project home page
![project home](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016411/Aventur/Screenshot_from_2022-10-17_19-44-58_zzltvk.png)

![all projects](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016411/Aventur/Screenshot_from_2022-10-17_19-45-09_lqqxl6.png)

### Create projects
![create projects](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016415/Aventur/Screenshot_from_2022-10-17_19-46-47_jo2o1q.png)

### Join projects
![join projects](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016416/Aventur/Screenshot_from_2022-10-17_19-46-53_oxmjpf.png)

### project management page

#### Workflow
* All Tasks <br/>
![All Tasks](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016411/Aventur/Screenshot_from_2022-10-17_19-46-11_vhsuze.png)
* Create Task <br/>
![create task](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016416/Aventur/Screenshot_from_2022-10-17_19-47-11_qy2fyz.png)

#### Assigned Tasks
![Assigned Tasks](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016412/Aventur/Screenshot_from_2022-10-17_19-46-27_ayhbbt.png)
* View Task Details, create subtask ,add comments<br/>
![Task](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016417/Aventur/Screenshot_from_2022-10-17_19-49-07_gxk8xt.png)
![subTask](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016418/Aventur/Screenshot_from_2022-10-17_19-49-12_ra8ur3.png)

#### Project members
![members](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016412/Aventur/Screenshot_from_2022-10-17_19-46-35_jmjvzk.png)
* Add members<br/>
![Add members](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016415/Aventur/Screenshot_from_2022-10-17_19-47-20_vppsz8.png)


#### Chat
![chat](https://res.cloudinary.com/doxthu5pb/image/upload/v1666016416/Aventur/Screenshot_from_2022-10-17_19-48-48_ddydsx.png)



