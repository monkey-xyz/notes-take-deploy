# Notes Taker

## About the Project

[Heroku Deployment](https://note-taking-ex.herokuapp.com/)

This assignment was to use a premade front-end note taking app and create a back-end local server for storing (and, grabbing) data that the user input.

A live demonstration of the app is hosted through Heroku.

## Features

The front-end is an application that features two pages, the Index (landing) page and the Notes page that is accessible through a button on the index.

Using a JSON file, the information written into the inputs on the Notes page is saved into an array and then returned through a list column. In the future, there is a chance to return to the code to update the delete command.

The code is separated into the main script **server.js**, and a route to hold the processes for the notes, **notes.js**.

A blank array is provided in the **db.json** file, on the chance that the server is reset and all data is lost it will provide in the list column a message of No saved Notes.

## Tools

* Node.js
* Express.js
* Nano ID

## Documentation

TBA