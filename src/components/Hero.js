import React from "react";
import Card from "./Card";
import "./Hero.css";
import biryani from "../assets/biryani.webp";
import mandi from "../assets/mandi.jpg";
import burger from "../assets/burger.jpg";
import friedRice from "../assets/fried rice.jpg";
import butterpaneer from "../assets/butter paneer.jpg";
import butterchicken from "../assets/butter-chicken.jpg";
import momos from "../assets/momos.jpg";
import chicken65 from "../assets/chicken65.jpg";
import juices from "../assets/juices.jpg";
import drinks from "../assets/drinks.jpg";
import snacks from "../assets/snacks.jpeg";

export default function Hero() {
  const recipes = [
    {
      foodName: "Biryani",
      image: biryani,
      price: "Rs. 250",
      time: "25 mins",
      chef: "Made by Mario",
    },
    {
      foodName: "Burgers",
      image: burger,
      price: "Rs. 120",
      time: "12 mins",
      chef: "Made by Mano",
    },
    {
      foodName: "Fried Rice",
      image: friedRice,
      price: "Rs. 150",
      time: "20 mins",
      chef: "Made by Maari",
    },
    {
      foodName: "Mandi",
      image: mandi,
      price: "Rs. 380",
      time: "30 mins",
      chef: "Made by Maya",
    },
    {
      foodName: "Butter Paneer",
      image: butterpaneer,
      price: "Rs. 210",
      time: "15 mins",
      chef: "Made by Mira",
    },
    {
      foodName: "Butter Chicken",
      image: butterchicken,
      price: "Rs. 280",
      time: "15 mins",
      chef: "Made by Miya",
    },
    {
      foodName: "Momos",
      image: momos,
      price: "Rs. 65",
      time: "5 mins",
      chef: "Made by Mie",
    },
    {
      foodName: "Chicken 65",
      image: chicken65,
      price: "Rs. 115",
      time: "12 mins",
      chef: "Made by Miyo",
    },
    {
      foodName: "Juices",
      image: juices,
      price: "Rs. 45",
      time: "8 mins",
      chef: "Made by Mira",
    },
    {
      foodName: "Snacks",
      image: snacks,
      price: "Rs. 65",
      time: "5 mins",
      chef: "Made by Mizo",
    },
    {
      foodName: "Drinks",
      image: drinks,
      price: "Rs. 55",
      time: "5 mins",
      chef: "Made by Mizu",
    },
  ];
  return (
    <div>
      <div className="mx-auto p-4 max-w-screen-xl">
        <h1 className="sm:mx-4 text-5xl">Recipes</h1>
        <h3 className="sm:mx-4 text-2xl">For Ninjas</h3>
        <div className="my-4">
          <h1 className="sm:mx-4 text-2xl">Latest Recipes</h1>
          <div className="block card-style w-full sm:grid gap-3 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="" resource={recipes[0]}></Card>
            <Card className="" resource={recipes[1]}></Card>
            <Card className="" resource={recipes[2]}></Card>
            <Card className="" resource={recipes[3]}></Card>
          </div>
        </div>
        <div>
          <h1 className="sm:mx-4 text-2xl">Most Popular</h1>
          <div className="block card-style w-full sm:grid gap-3 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="" resource={recipes[4]}></Card>
            <Card className="" resource={recipes[6]}></Card>
            <Card className="" resource={recipes[5]}></Card>
            <Card className="" resource={recipes[1]}></Card>
          </div>
        </div>
        <div>
          <h1 className="sm:mx-4 text-2xl">Load More</h1>
          <div className="block card-style w-full sm:grid gap-3 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="" resource={recipes[7]}></Card>
            <Card className="" resource={recipes[9]}></Card>
            <Card className="" resource={recipes[8]}></Card>
            <Card className="" resource={recipes[10]}></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
