import React from "react";
import "./footer.css";
import video2 from "../../Assets/FooterVideo.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with Us!</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address." />
            <button className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Wonderland
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              ipsam ipsa sit libero, error nostrum rem at nulla dolorum facilis!
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/**
             Grop Two
             */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Booking
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                HostalWorld
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Trip Advisor
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/*Group 3 */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Callifonia
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Urope
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Amsterdam
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Indonisia
              </li>

              <li className="footerlist flex">
                <FiChevronRight className="icon" />
                Swissterland
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>COPYRIGHTS-RESERVED CHA97 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
