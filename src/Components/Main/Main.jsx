import React from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import { GrLocation } from "react-icons/gr";
import { HiOutlineClipboardCheck } from "react-icons/hi";

//DataList
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Sea Villa",
    location: "Sri Lanka",
    grade: "CULTURAL RELAX",
    fees: "$700",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Ariana",
    location: "Maldives",
    grade: "LUXURY",
    fees: "$1400",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$800",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Zeesh",
    location: "Canada",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Citrus",
    location: "Sri Lanka",
    grade: "CULTURAL RELAX",
    fees: "$500",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "City Hotel",
    location: "UAE",
    grade: "CULTURAL RELAX",
    fees: "$1500",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Queens",
    location: "England",
    grade: "CULTURAL RELAX",
    fees: "$950",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Palmino",
    location: "Malasia",
    grade: "CULTURAL RELAX",
    fees: "$400",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Rajasthaaan",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$750",
    destination:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  },
];

function Main() {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, destination }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{destination}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Main;
