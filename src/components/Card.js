import React from "react";
import "./Card.css";
import { FaClock } from "react-icons/fa";
// import { faClock } from "@fortawesome/fa-regular";

export default function Card(props) {
  return (
    <div className="card bg-white rounded-2xl w-3/12 m-4 shadow-xl cursor-pointer hover:scale-110 transition-all">
      <div className="pic-div">
        <span className="time-div absolute flex items-center rounded-3xl bg-yellow-200 m-1 px-2 py-1">
          <FaClock className="inline-block" />
          &nbsp;
          {props.resource.time}
        </span>
        <img
          className="rounded-t-2xl h-full w-full overflow-hidden"
          src={props.resource.image}
          alt={props.resource.foodName}
        />
      </div>
      <div className="content-div">
        <div className="flex justify-between px-2 py-2">
          <div>
            <h1 className="text-2xl">{props.resource.foodName}</h1>
            <h3>{props.resource.chef}</h3>
          </div>
          <div>
            <h1 className="font-bold">{props.resource.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
