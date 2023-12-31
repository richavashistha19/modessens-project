import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      {/* <div className="footer">
        <div className="container">
          <div className="video">
            <video width='800px' height='350px' autoPlay muted loop>
              <source src="https://youtu.be/BVMsRltq2yU?t=11"></source>
            </video>
          </div>
          <div className="about">
            <div className="logo">
              <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000" alt="logo" width='200px' height='200px'></img>
            </div>
            <div className="detail">
              <p><b>Thanks for shopping from our site.</b></p>
              <p><b>Hope this site is better.</b></p>
              <div className="icon">
                <li id="first">
                  <RiFacebookFill />
                </li>
                <li id="second">
                  <AiOutlineInstagram />
                </li>
                <li id="third">
                  <AiOutlineTwitter />
                </li>
                <li id="fourth">
                  <BsYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="page">
            <h3>Contact Us</h3>
            <p>By email:khushivats0925@gmail.com</p>
            <p> By phone: 7360936500</p>
          </div>
        </div>
        <hr />
        <div className="tag">
          <br></br>
          <br></br>
          <h1>Our Team</h1><br></br>
          <br></br>
          <br></br>
          <br></br> 
          <div className="team">
            <div className="fix">
              <img src="richa.jpg" alt="team1" />
              <p>Richa Kumari</p>
            </div>
            <div className="fix">
              <img src="Khushi.jpg" alt="team2" />
              <p>Khushi</p>
            </div>
            <div className="fix">
              <img src="Ashishya.jpg" alt="team3" />
              <p>Ashishya Singh</p>
            </div>
            <div className="fix">
              <img src="Alisha.jpg" alt="team4" />
              <p>Alisha Kumari</p>
            </div>
            <div className="fix">
              <img src="Subhranshu.jpeg" alt="team5" />
              <p>Subhranshu</p>
            </div>
          </div>
        </div>
      </div> 
      
      */}

      {/* add footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/">about us</Link>
                </li>
                <li>
                  <Link to="/">our services</Link>
                </li>
                <li>
                  <Link to="/">privacy policy</Link>
                </li>
                <li>
                  <Link to="/">affiliate program</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">shipping</Link>
                </li>
                </ul>

            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <Link to="/">clothes</Link>
                </li>
                <li>
                  <Link to="/">Accesseries</Link>
                </li>
                <li>
                  <Link to="/">shoes</Link>
                </li>
                </ul>
                </div>
            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <Link to="/">
                  <AiOutlineInstagram />
                </Link>
                <Link to="/">
                  <RiFacebookFill />
                </Link>
                <Link to="/">
                  <AiOutlineTwitter />
                </Link>
                <Link to="/">
                  <BsYoutube />
                </Link>
              </div>
            </div>


          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;