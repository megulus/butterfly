# App Name


### Overview

The app defaults to the neutral smiley. If query params are used, the server responds with the appropriate smiley:

?v=5 Awesome!
?v=4 Great!
?v=3 OK,
?v=2 Mmmmmh
?v=1 Oops
 
Clicking the edit button next to the smiley brings up the "mood edit" view, allowing the user to change the mood selection.

The question view contains the 5 questions (in randomized order). Clicking stars updates the user's rating for that question. If the user enters 1 or 2 stars, a text box appears alllowing for additional input on that question. The user is not required to fill out text inputs. Once the user has given a rating for all five questions, the "Send" button is activated. Upon submission, the user is thanked for their feedback.

### Code

The app is built using Backbone.js (which depends on both Underscore.js and jQuery). Two models handle the app's data: the EmployeeMood and AllUserInput models. EmployeeMood handles the assets and user inputs for the user's mood selection, while AllUserInput handles the assets and inputs for the questions (star ratings and additional text, if applicable). When the models are updated, the corresponding views are updated as well.

There are views for the footer, the selected mood, mood editing, the question container, and for individual questions (basically, for everything except the header, the only element of the app that never changes). 

### Building and Running

Note: Bower, npm, node.js and gulp must be installed globally. 

To install the Bower packages, navigate to the project root directory and run the command

	$ bower install

To run the build tools (basic html/css/js minification), navigate to project root directory and run the command

	$ npm install

To run the basic node server, navigate to the project root directory and run the command

	$ node basicNodeServer.js

Navigate to localhost:8000 in a browser.

The server serves files from the build directory.


### Tools

Backbone
jQuery
Underscore
Bootstrap


### Fixes

The following still need to be addressed:

1. Highlighting the stars as they are selected, so that the yellow highlighting fills the container to the left without overflowing to the right.

2. Residual line left by the question container upon submission.

3. Logo alignment in the header.

4. Mood selection box needs to be the same width as the question view.
