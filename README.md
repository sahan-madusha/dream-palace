markdown

# React Property Search Application

## Overview

This project is a client-side web application that allows users to search for properties based on various criteria. Whether you're looking for a new home or just exploring real estate options, this application provides a user-friendly interface to filter and view property listings. Users can search for properties using the following filters:

- **Property Type**: Choose from House, Flat, or Any.
- **Price Range**: Set a minimum and maximum price for the property.
- **Bedrooms**: Filter properties based on the number of bedrooms.
- **Date Added**: Search properties based on their listing date (after a specific date or between two dates).

The app is built with **React.js**, handles state management for the search and favorites functionality, and stores the user's favorite properties in **local storage** for easy access.

---

## Features

- **Property Search**: Multi-criteria search based on property type, price, bedrooms, date added, and postcode area.
- **Property Listing**: Displays properties with images, short descriptions, and prices for quick browsing.
- **Property Page**: Each property has a dedicated page that shows large images, floor plans, detailed descriptions, and an interactive Google Map.
- **Favorites**: Users can add or remove properties to/from their favorites list. The list can be managed via drag-and-drop or a simple "favorite" button.
- **Responsive Design**: The app adapts to various screen sizes, ensuring a seamless experience on iPads, mobile devices, and desktops.
- **Local Storage**: Users’ favorite properties are saved in local storage, ensuring they persist across sessions. The favorites list can be easily cleared.

---

## Setup

### Prerequisites

Before running the application, ensure the following are installed:

- **Node.js (v14.x or higher)**: A JavaScript runtime needed to run the app.
- **npm**: Node package manager for managing dependencies.

You can check if these are installed by running the following commands:

bash
node -v
npm -v

If they aren't installed, you can download and install them from the official websites:

- [Download Node.js](https://nodejs.org/)
- npm is installed automatically with Node.js.

---

## Installation

### Clone the Repository or Use ZIP File

#### **Option 1: Clone the Repository**

1. Clone the project from GitHub using the following command:
   ```bash
   git clone https://github.com/sahan-madusha/dream-palace.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dream-palace
   cd client
   npm i
   npm start
   ```

#### **Option 2: Download ZIP File**

1. Download a ZIP file.
2. Extract the ZIP file.
3. Open a terminal and navigate to the extracted folder:
   ```bash
   cd dream-palace
   cd client
   npm i
   npm start
   ```

---

### Dependencies

This project requires the following dependencies to run:

- `react`: A JavaScript library for building user interfaces.
- `react-datepicker`: For selecting dates when filtering properties by "date added."
- `react-dom`: The entry point for DOM-related operations in React.
- `react-input-mask`: For handling input masking (e.g., postcodes or phone numbers).
- `react-router-dom`: Provides routing capabilities for navigating between pages.
- `react-scripts`: A set of scripts for running the app in development mode, building it for production, and more.
- `react-select`: A flexible select input control used for filtering.
- `react-widgets`: A library for date pickers, input fields, and other useful components.

---

### Running the App

After installing the dependencies, you can start the development server:

bash
npm start

This will run the application at `http://localhost:3000`. You should now be able to search for properties, view detailed property pages, and manage your favorite properties.

---

## Usage

Once the app is up and running, you can:

- **Search Properties**: Use the filters at the top of the page to search properties by type, price range, number of bedrooms, date added, and postcode area.
- **View Property Listings**: Browse the list of properties that match your search criteria. Each listing includes an image, short description, and price.
- **Detailed Property Page**: Click on any property listing to open the property details, which include high-quality images, floor plans, descriptions, and a Google Map showing the location.
- **Manage Favorites**: Add properties to your favorites list by clicking the "favorite" button or dragging and dropping the property to your favorites section. The list is stored in local storage for easy access across sessions.

---

## Additional Notes

- **Local Storage**: The list of favorite properties is saved to the local browser storage, meaning it will persist even after refreshing the page or closing the browser. Users can clear their favorites list at any time.
- **Mobile-Friendly**: The app is designed to be fully responsive, adjusting to smaller screen sizes like tablets and mobile phones.

---

Thank you for checking out the React Property Search Application! If you have any questions, feedback, or suggestions, feel free to open an issue or create a pull request. Happy property hunting!
