# Booking Application  

This project is a single-page application built with the following tech stack:  
**React**, **React Router**, **React Final Form**, **MUI**, **Axios**, **Redux**, **Redux-First-History**, **Redux-Saga**, **ENV**, **Eslint**, and **Beeceeptor**.

The application allows users to search for hotels based on a selected destination and provides an intuitive interface for navigation and booking. It includes three main sections:

## Features  
1. **Main Page**:  
   - Serves as the entry point of the application.  
   - Includes a form for selecting a destination.  
   - Fetches and displays data dynamically from the server using Axios.

2. **About Page**:  
   - Displays information about the application.  
   - Serves as an introduction to the purpose and functionality of the project.

3. **Hotels Page**:  
   - Displays the list of hotels retrieved from the server after form submission.  
   - Implements a responsive grid layout using MUI for a clean, user-friendly display.  
   - Allows users to browse hotel details interactively.

## Form Functionality  
- The "Destination" field is dynamically populated with data fetched from the server (mocked with `Beeceeptor`).  
- The form includes validation for required fields using **React Final Form**.  
- On form submission:
  1. The data is sent to the server via Axios in the `payload`.  
  2. A successful response triggers a redirect to the "Hotels" page.  
  3. The Hotels page displays the list of hotels fetched from the server.

## Tools and Libraries Used  
- **Create React App**: Bootstrapped the React application.  
- **React Router**: Handles routing for navigation between pages.  
- **React Final Form**: Manages form state and validation.  
- **MUI**: Provides components for a modern and responsive UI.  
- **Axios**: Handles API requests and responses.  
- **Redux**: Manages application state.  
- **Redux-First-History**: Enhances Redux for managing browser history.  
- **Redux-Saga**: Handles side effects like API calls.  
- **Json-server**: Mock server for simulating backend API responses.  
- **ENV**: Stores and manages environment variables.  
- **Eslint**: Enforces code quality and style.
