import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Portal 🍕</h1>
      {/* comment to test git */}
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Rendering a list */}
      {/* Normally pass in object and deal with object in more specific component */}
      {/* conditional rendering with && */}
      {/* {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      )} */}
      {/* && is one option - ternary operator another */}
      {pizzaData.length > 0 ? (
        // one parent element so need a react fragrment!
        <>
          <p>
            Get Cheesy with It: Where Pizzas Sing and Tummies Dance – Voted the
            Universe's Best Pizza (According to Our Moms)
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Still working on our menu, come back soon for updates!</p>
      )}
      {/* pizza component different thanks to props! */}
    </main>
  );
}

function Footer() {
  const currentTime = new Date().getHours();
  const openHour = 12;
  const closerHour = 22;
  const isOpen = currentTime >= openHour && currentTime <= closerHour;

  // removed if block

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closerHour={closerHour} />
      ) : (
        <p>
          We're happy to welcome you bewteen {openHour}:00 and {closerHour}:00
        </p>
      )}
    </footer>
  );
}
// can destructure props for easier use
function Order({ closerHour }) {
  return (
    <div className="order">
      <p>We're open until {closerHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// pizza component at the moment is reusable but not flexible
// data always the same

// now that props added the component is flexible
function Pizza(props) {
  // now receieve prop of an object, not specific items
  // prop is now the pizzaObj

  // conditional rendering with mutiple returns eg
  // render null if pizza is sold out

  // early return for if pizza sold out
  // if (props.pizzaObj.soldOut) return null;

  return (
    // conditionally render class
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {/* conditionally render text */}
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
