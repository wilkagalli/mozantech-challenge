# MOZANTECH FRONTEND CHALLENGE

Hello, this is the resolution of the challenge proposed by the Mozantech project. It is a SPA developed in react to show information about computer parts, as well as filter, order and show the details. The data is provided through the API provided by Mozantech.

The final result you can see here:

![Main Page](sample.PNG 'Main Page')

## Dependencies

Before running this project, make sure you have the API backend running locally, the API project can be found here: https://github.com/Mozantech/store-parts-exercise

After running, the API should be available on `http://localhost:8081`

## Available Scripts

In the project directory, you can run:

`npm install` to install the project dependencies.

`npm start` runs the app in the developement mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`npm run lint` to lint the project according to the lint rules configured in `eslintrc.json` and `.prettierrc`.

`npm run test` to run the tests for the project (only the Card component has tests for now).

## Application Components

### Header

- Show the app title;
- Is always visible when scrolling the app;

### FilterParts

- Input to filter by query;
- Select to filter by type;
- Select to order by price;

### Card

- Container to show the parts information.

### MainPage

- The main component for this application;
- Has logic to handle with the filter and the loading from the API;
- Store state for filters, order and parts;
- Navigates to parts pages when a part is selected;

### PartsPage

- The page to show specific part details;
- Gets the part information from the url;
