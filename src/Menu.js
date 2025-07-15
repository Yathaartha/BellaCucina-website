import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FoodCarousel from "./FoodCarousel";
import "./App.css";

// Appetizers
import garlicShrimp from "./assets/images/garlic-shrimp.jpg";
import buffaloWings from "./assets/images/buffalo-wings.jpg";
import bruschetta from "./assets/images/bruschetta.jpg";
import zuppaDeMussel from "./assets/images/zuppa-de-mussel.webp";
import calamari from "./assets/images/crispy-fried-calamari.jpg";

// Salads
import chefSpecialSalad from "./assets/images/chef-special-salad.jpg";
import capreseSalad from "./assets/images/caprese-salad.jpg";
import caesarSalad from "./assets/images/caeser-salad.jpg";

// Soups
import spicyTomatoSoup from "./assets/images/spicy-tomato-soup.jpg";
import classicMimeSoup from "./assets/images/classic-mime-soup.webp";

// Sides
import grilledAsparagus from "./assets/images/grilled-asparagus.jpg";
import truffleFries from "./assets/images/truffle-fries.jpg";
import rosemaryRoastedPotato from "./assets/images/rosemary-roasted-potatoes.jpg";
import meatball from "./assets/images/meatballs.jpg";
import gnocchi from "./assets/images/gnocchi.jpg";

// Kids Menu
import pastaButterGarlic from "./assets/images/pasta-butter-garlic.jpg";
import chickenTenders from "./assets/images/chicken-tenders-n-fries.webp";
import mozzarellaStick from "./assets/images/mozzarella-sticks.jpg";
import macAndCheese from "./assets/images/mac-n-cheese.avif";
import cheeseburger from "./assets/images/cheeseburger.jpg";
import chickenNuggets from "./assets/images/chicken-nuggets-n-fries.webp";

// Pasta
import spaghettiAndMeatballs from "./assets/images/spaghetti-n-meatballs.jpg";
import eggplantAndRollatiniParmigiana from "./assets/images/eggplant-rollatini-parmigiana.jpg";
import spaghettiMeatball from "./assets/images/spaghetti-meatball.jpg";
import spicyChickenAlfredo from "./assets/images/spicy-chicken-alfredo.jpg";
import drunkenZiti from "./assets/images/drunken-ziti.jpg";
import rigatoniBolognese from "./assets/images/rigatoni-bolognese.jpg";

// Sea Food Pasta
import creamBayScallop from "./assets/images/creamy-bay-scallop.jpeg";
import lobsterRavioli from "./assets/images/lobster-ravioli.jpg";
import penneAllaVodka from "./assets/images/penne-alla-vodka.jpeg";
import shrimpRisotto from "./assets/images/shrimp-risotto.jpg";
import shrimpScampi from "./assets/images/shrimp-scampi.jpg";

// Bella Specials
import lobsterMacAndCheese from "./assets/images/lobster-mac-n-cheese.jpeg";
import vegetarianLasagna from "./assets/images/vegetarian-lasagna.jpeg";
import lasagnaMeat from "./assets/images/lasagna-meat.jpeg";
import ossoBuco from "./assets/images/osso-buco.jpeg";
import seafoodCioppino from "./assets/images/seafood-cioppino.jpeg";

// Straight Out Of Grill
import steakOfTheGods from "./assets/images/steak-of-the-gods.jpeg";
import grilledSalmon from "./assets/images/grilled-salmon.jpeg";
import ribEyeSteak from "./assets/images/rib-eye-steak.jpeg";

// Lunch Special Subs
import meatballSub from "./assets/images/meatball-sub.jpeg";
import buffaloChickenSub from "./assets/images/buffalo-chicken-sub.jpg";
import chickenParmigianaSub from "./assets/images/chicken-parmigiana-sub.jpeg";
import steakAndCheese from "./assets/images/steak-n-cheese.jpeg";

// Pizza
import bbqChickenPizza from "./assets/images/bbq-chicken-pizza.jpeg";
import steakFajitaPizza from "./assets/images/steak-fajita-pizza.jpg";
import chickenFajitaPizza from "./assets/images/chicken-fajita-pizza.jpeg";
import authenticSpicyAnchoviesPizza from "./assets/images/authentic-anchovies-spicy-pizza.jpeg";
import chickenPizza from "./assets/images/chicken-pizza.jpeg";
import buffaloChickenPizza from "./assets/images/buffalo-chicken-pizza.jpeg";

// Dessert
import chocolateCake from "./assets/images/chocolate-cake.jpg";
import nyCheeseCake from "./assets/images/ny-cheese-cake.jpg";
import pannaCota from "./assets/images/panna-cota.jpg";
import cannoli from "./assets/images/cannoli.webp";

const menuData = [
  {
    category: "Appetizer",
    items: [
      { image: garlicShrimp, name: "Garlic Shrimp", price: "$13.95" },
      { image: buffaloWings, name: "Buffalo Wings", price: "$14.95 - $16.95" },
      { image: bruschetta, name: "Bruschetta", price: "$8.95" },
      { image: zuppaDeMussel, name: "Zuppa - de - Mussel", price: "$13.95" },
      { image: calamari, name: "Crispy Fried Calamari", price: "$13.95" },
    ],
  },
  {
    category: "Salad",
    items: [
      {
        image: chefSpecialSalad,
        name: "Chef Special (VEG) Salad",
        price: "$12.95",
      },
      { image: capreseSalad, name: "Caprese Salad", price: "$10.95" },
      {
        image: caesarSalad,
        name: "Caesar Salad",
        price: "$12.95 - $14.95",
      },
    ],
  },
  {
    category: "Soup",
    items: [
      { image: spicyTomatoSoup, name: "Spicy Tomato Soup", price: "$5.95" },
      {
        image: classicMimeSoup,
        name: "Classic Mime Strong Soup",
        price: "$5.95",
      },
    ],
  },
  {
    category: "Sides",
    items: [
      { image: grilledAsparagus, name: "Grilled Asparagus", price: "$58.95" },
      { image: truffleFries, name: "Truffle Fries", price: "$8.95" },
      {
        image: rosemaryRoastedPotato,
        name: "Rosemary Roasted Potato",
        price: "$6.95",
      },
      { image: meatball, name: "Meatball", price: "$8.95" },
      { image: gnocchi, name: "Gnocchi", price: "$5.95" },
    ],
  },
  {
    category: "Kids Menu",
    items: [
      { image: pastaButterGarlic, name: "Pasta Butter Garlic", price: "$6.95" },
      {
        image: chickenTenders,
        name: "Chicken Tenders and Fries",
        price: "$7.95",
      },
      { image: mozzarellaStick, name: "Mozzarella Stick", price: "$5.95" },
      { image: macAndCheese, name: "Mac and Cheese", price: "$5.95" },
      { image: cheeseburger, name: "Cheeseburger", price: "$7.95" },
      {
        image: chickenNuggets,
        name: "Chicken Nuggets And Fries",
        price: "$6.95",
      },
    ],
  },
  {
    category: "Pasta",
    items: [
      {
        image: spaghettiAndMeatballs,
        name: "Spaghetti and Meatballs",
        price: "$8.95",
      },
      {
        image: eggplantAndRollatiniParmigiana,
        name: "Special Eggplant And Rollatini Parmigiana",
        price: "$18.95",
      },
      { image: spaghettiMeatball, name: "Spaghetti Meatball", price: "$18.95" },
      {
        image: spicyChickenAlfredo,
        name: "Spicy Chicken Alfredo",
        price: "$18.95",
      },
      {
        image: drunkenZiti,
        name: "Drunken Ziti",
        price: "$18.95",
      },
      {
        image: rigatoniBolognese,
        name: "Rigatoni Bolognese",
        price: "$18.95",
      },
    ],
  },
  {
    category: "Sea Food Pasta",
    items: [
      { image: creamBayScallop, name: "Creamy Bay Scallop", price: "$24.95" },
      { image: lobsterRavioli, name: "Lobster Ravioli", price: "$26.95" },
      {
        image: penneAllaVodka,
        name: "Penne Alla Vodka (Shrimp)",
        price: "$23.95",
      },
      { image: shrimpRisotto, name: "Shrimp Risotto", price: "$23.95" },
      { image: shrimpScampi, name: "Shrimp Scampi", price: "$23.95" },
    ],
  },
  {
    category: "Bella Specials",
    items: [
      {
        image: lobsterMacAndCheese,
        name: "Lobster Mac & Cheese",
        price: "$26.95",
      },
      {
        image: vegetarianLasagna,
        name: "Vegetarian Lasagna (Gluten-Free)",
        price: "$16.95",
      },
      { image: lasagnaMeat, name: "Lasagna - Meat", price: "$24.95" },
      { image: ossoBuco, name: "Osso Buco", price: "$24.95" },
      { image: seafoodCioppino, name: "Seafood Cioppino", price: "$26.95" },
    ],
  },
  {
    category: "Straight Out Of Grill",
    items: [
      {
        image: steakOfTheGods,
        name: "Steak Of The Gods",
        price: "$12.00",
      },
      { image: grilledSalmon, name: "Grilled Salmon", price: "$24.95" },
      { image: ribEyeSteak, name: "Rib Eye Steak", price: "$24.95" },
    ],
  },
  {
    category: "Lunch Special Subs",
    items: [
      { image: meatballSub, name: "Meatball Sub", price: "$12.00" },
      {
        image: buffaloChickenSub,
        name: "Buffalo Chicken Sub",
        price: "$12.00",
      },
      {
        image: chickenParmigianaSub,
        name: "Chicken Parmigiana Sub",
        price: "$12.00",
      },
      { image: steakAndCheese, name: "Steak & Cheese", price: "$12.00" },
    ],
  },
  {
    category: "Pizza",
    items: [
      { image: bbqChickenPizza, name: "BBQ Chicken Pizza", price: "$14.95" },
      {
        image: steakFajitaPizza,
        name: "Steak Fajita Pizza",
        price: "$14.95",
      },
      {
        image: chickenFajitaPizza,
        name: "Chicken Fajita Pizza",
        price: "$14.95",
      },
      {
        image: authenticSpicyAnchoviesPizza,
        name: "Authentic Spicy Anchovies Pizza",
        price: "$14.95",
      },
      {
        image: chickenPizza,
        name: "Chicken Pizza",
        price: "$14.95",
      },
      {
        image: buffaloChickenPizza,
        name: "Buffalo Chicken Pizza",
        price: "$14.95",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      { image: chocolateCake, name: "Chocolate Cake", price: "$10.95" },
      { image: nyCheeseCake, name: "New York Cheese Cake", price: "$9.95" },
      { image: pannaCota, name: "Panna Cotta", price: "$8.95" },
      { image: cannoli, name: "Cannoli", price: "$8.95" },
    ],
  },
];

function Menu() {
  return (
    <div className="homepage-root" style={{ background: "#181818" }}>
      <Header />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 16px",
          minHeight: "calc(100vh - 200px)",
        }}>
        {menuData.map((cat, idx) => (
          <div key={cat.category} style={{ marginBottom: 48 }}>
            <FoodCarousel category={cat.category} items={cat.items} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Menu;

