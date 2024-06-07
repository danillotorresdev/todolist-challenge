## Todo app Micro-Frontend

A micro-frontend architecture demo in TypeScript using Webpack Module Federation.

### Design and Architectural Choices

- Used React functional components with hooks for simplicity and readability.
- Chakra UI for styling to ensure a consistent and accessible UI.
- LocalStorage for persistence to keep the application state across sessions.
- Jest and React Testing Library for testing core functionality.
- **Webpack Module Federation**: Chosen for its ability to independently develop and deploy multiple micro-frontends, allowing seamless integration and composition of applications at runtime.

### Best Practices

- **Error Boundary**: Implemented an error boundary to catch errors that occur during rendering, preventing the entire UI from crashing.
- **Lazy Loading**: Utilized lazy loading to load micro-frontends asynchronously, improving performance and reducing initial load times.
- **React Hooks**: Leveraged React hooks for state management and side effects, promoting code reuse and composability.
- **Unit Testing**: Employed unit tests with Jest and React Testing Library to ensure the reliability and correctness of core functionality.

### Running locally

#### 1. Start the microfrontend apps

This serves the microfrontends on ports `3080`, `3081`.

This makes their isolated development playgrounds available at

- `http://localhost:3080/`
- `http://localhost:3081/`

and their JS bundles (available for consumption by the parent app) at

- `http://localhost:3081/remoteEntry.js`

```sh
# First microfrontend To-do app
cd microfrontend1
npm install
npm start
```

#### 2. Start parent app

This serves the parent app at `http://localhost:3080/`.

The parent app is configured to lazy-load the microfrontends (asyncronously, over the network from `http://localhost:3081/remoteEntry.js`, etc) at run-time.

```sh
cd parent
npm install
npm start
```

### Project Structure

```
microfrontend1
│
└── src
    │
    └── ui
        │
        ├── pages
        │   │
        │   └── ToDo
        │       │
        │       └── ToDo.tsx
        │
        └── components
            │
            └── FilterButtons
                │
                └── FilterButtons.tsx
```

### Running Tests

To run tests for the microfrontend1 project, navigate to the `microfrontend1` directory and execute the following commands:

```sh
cd microfrontend1
npm test
```

To run tests with coverage, you can use the following command:

```sh
npm run test:coverage
```

This will generate a coverage report showing the percentage of code covered by your tests.

### Module Federation and Parent App

- **Webpack Module Federation**: The project leverages Webpack Module Federation for its ability to independently develop and deploy multiple micro-frontends. This allows seamless integration and composition of applications at runtime.
- **Parent App Role**: The parent app serves primarily to demonstrate how the todo app seamlessly integrates with other micro-frontends. It showcases the ease of integrating the todo app into a larger ecosystem of micro-frontends.
