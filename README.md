# Pizza Portal 🍕
<hr>

Welcome to the Pizza Portal, where pizzas sing and tummies dance! Dive into our flavorful menu filled with delicious Italian pizzas that are guaranteed to be the best (according to our moms).
You can view a live demo of the project here - <a href="https://pizza-portal.netlify.app/">Pizza Portal</a>

## Overview
This React application displays a mouthwatering menu of Italian pizzas using React components. Each pizza is showcased with its name, ingredients, price, and availability status.

## Features

- Dynamic Rendering: The menu dynamically renders based on the availability of pizza data.
- Flexible Components: Components like Pizza and Order are flexible and reusable, receiving data through props.
- Conditional Rendering: Pizzas are displayed conditionally based on availability (sold out or in stock).
- Interactive: Customers can view the menu and place orders within opening hours.

## How to Use

**Viewing the Menu:**
- Open the application to view our current pizza offerings.
- Pizzas are displayed with names, ingredients, and prices.

**Placing Orders:**
- If the restaurant is open (between 12:00 PM and 10:00 PM), customers can place orders online by clicking the "Order" button.

## Components
- App: The main component that renders the header, menu, and footer.
- Header: Displays the restaurant's title.
- Menu: Renders the pizza menu based on data availability.
- Pizza: Displays individual pizza items with details.
- Footer: Displays restaurant hours and an order section based on current time.

## Technologies Used
- React: Frontend library for building user interfaces.
- JavaScript (ES6+): Modern JavaScript syntax used throughout the application.
- CSS: Styling is applied using CSS with custom styles defined in index.css.

## Installation
To run this application locally:

Clone the repository:
```
git clone <repository-url>
```
Navigate to the project directory:
```
cd pizza-portal
```
Install dependencies:
```
npm install
```
Start the development server:
```
npm start
```
