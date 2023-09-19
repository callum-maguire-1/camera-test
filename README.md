# camera-test


How to run this application? 
run npm start twice and change the Application A link to point to the url of Application B.
run npx open cypress and run spec.cy.js.

Application A: has a link
Application B: access the camera and takes a picture

This is a simple version of a production application. The flow in the application is a cypress test that click a link and goes to another url. The camera throws a error with DOMException: Permission denied. My test should be able click a link and take a picture, I am controlled both application A and B.