# Pokemon App

This is a simple React application that retrieves a list of Pokemon and displays details for each Pokemon.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd pokemon-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```plaintext
    REACT_APP_BASE_URL=https://pokeapi.co/api/v2
    ```

4. Switch to branch 'develop' before starting the project:
    ```bash
    git pull origin develop
    git checkout develop
    ```

5. Start the development server:
    ```bash
    npm start
    ```

## Testing

To run the tests,use the following command:
    ```
    npm test
    ```

## Features

- Fetch and display a list of Pokemon.
- Click on a Pokemon to view its details.
- Utilizes TypeScript, Redux Toolkit, and RTK Query.
- Clean and maintainable code structure.

## Notes

- The application is set up to use a configurable BASE API URL via the `.env` file.
