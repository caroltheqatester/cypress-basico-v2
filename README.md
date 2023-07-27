# Customer Service Center

This project was created by the [TAT](https://talkingabouttesting.com/) school and is part of the Basic Automated Testing with Cypress course. 

The aim of the course is to practice basic commands by solving the exercises proposed in this [repository](https://github.com/wlsf82/cypress-basico-v2/tree/main/lessons).

### Content covered in the course

Among the topics covered in the course are: continuous integration (CI) with Github Actions, custom commands, using libraries like Lodash, running tests in headless mode and through the cypress interface.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.1.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

You can run the tests simulating a desktop or mobile viewport.

### Desktop

Run `npm test` (or `npm t` for the short version) to run the test in headless mode on a desktop viewport.

Or, run `npm run cy:open` to open Cypress in interactive mode on a desktop viewport.

### Mobile

Run `npm run test:mobile` to run the test in headless mode on a mobile viewport.

Or, run `npm run cy:open:mobile` to open Cypress in interactive mode on a mobile viewport.
___

Tested with 💚 by [me](https://www.linkedin.com/in/carolinebarbosavilar/).