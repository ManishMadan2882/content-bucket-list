# content-bucket-list

# Getting Started

* Clone this repository to your local machine.
* Navigate to the project directory.
* Install dependencies using 'npm install'
* Start the development server using 'npm run dev'

A React Project that has functionalities to create a Bucket and add/edit/delete Video URLs with titles with Redux-Toolkit based state management
Features
Create a Bucket
To create a new category, click the "[    +    ]" button. Enter the name of the category in the input field that appears and everythings is autosaved. The new category will be added to the list of categories on the left-hand side of the screen.

Add Videos to a Bucket
To add a list of videos to a category, edit under the  Bucket name . Click the "+" button to open the movie form. Enter the title and URL of each movie in the form and its auto-saved. The list of movies will be added to the selected category.

View Videos in a Bucket
To view the list of movies in a category, select the category from the list on the left-hand side of the screen. The list of movies will be displayed in the movie list component.

# Architecture
## Components
App.js
The main component that contains the entire application.

bucket.js
Displays a single category with its name and list of videos.

card.js
Allows users to add a list of videos to a category.

## Store
index.jsx in src/store folder
Contains the action creators that are used to create actions.

## Reducer
bucketSlice.jsx
Contains the reducers for updating the state of the application when actions are dispatched.

