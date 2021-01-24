# Getting Started with Create React App

To get the frontend running locally:
  1. Clone this repo
  2. npm install to install all req'd dependencies
  3. npm start to start the local server (this project uses create-react-app)

## Functionality overview:

This application contains a SearchBox component. It uses Marvel API for all requests.

### General functionality

1. The user can choose category from Comics, Characters, Series. Comics will be loaded by default.
2. When user chooses a category that data will be fetched from marvel API and gets loaded on UI.
3. There is a search box where user can type the search text. The data will be updated with search text after clicking on Search button.
4. User can navigate between categories and the selected category data will be shown.
5. In console last 5 search texts are logged.
