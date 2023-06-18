# Chroma Poke Craft

Chroma Poke Craft is a web application built using ReactJS and Next.js that allows users to view and catch pokemons. It utilizes the PokeAPI to fetch pokemon data and provides features such as pagination, pokemon details, and an owned pokemon collection.

## Features

- View a list of pokemons with pagination functionality.
- Click on a pokemon from the list to view its details, including image, name, type, weight, height, abilities, moves, and stats.
- Catch pokemons with a success probability of 50% on the pokemon detail page.
- Add caught pokemons to the user's owned pokemon collection, which persists even after a full page reload.
- Release (remove) pokemons from the owned pokemon collection.

## Technologies Used

- ReactJS
- Next.js
- PokeAPI (https://pokeapi.co/)
- Tailwind CSS

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd chroma-poke-craft`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

## Folder Structure

- `/components`: Contains React components used in the application.
- `/pages`: Contains the Next.js pages for different routes.
- `/styles`: Contains CSS modules for styling the components.
- `/utils`: Contains utility functions and modules.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-optimized version of the app.
- `npm start`: Starts the production server.
- `npm run test`: Runs the automated tests.

## Testing

The project includes automated tests to ensure the correctness of the implemented functionalities. The tests cover unit tests for individual components as well as integration tests for multiple components working together. To run the tests, use the command `npx jest`.