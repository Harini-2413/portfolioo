import React, { useState } from 'react';
import { Card, Image, Button, Nav } from 'react-bootstrap';
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import './PortfolioSection.css';

const PROFILE_PIC = 'https://via.placeholder.com/200/FFD700/000000?text=Harini';
const HAND_IMAGE = 'https://via.placeholder.com/300x200?text=Hand';

function PortfolioSection({ initialIsDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  const themeClass = isDarkMode ? 'dark-portfolio' : 'light-portfolio';

  return (
    <Card className={`portfolio-card ${themeClass}`}>
      <Card.Body className="d-flex flex-column p-0">
        <div className="portfolio-internal-header p-4 pb-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="logo-text">HARINI</span>
            <div className="theme-toggle-icon">
              {initialIsDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </div>
          </div>
          <Nav className="portfolio-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>

        {/* Hero Section */}
        <div className="hero-section p-4 pt-0">
          <div className="row g-0 align-items-center">
            <div className="col-8">
              <span className="hello-bubble">Hello!</span>
              <h1 className="my-2">
                I'm <span className="highlight-name">Harini</span> 👋
              </h1>
              <p className="role-text">
                UI/UX Designer, Front End Developer & Thinker
              </p>
              <p className="location-text">Based in India.</p>
              <div className="d-flex gap-2 mt-3">
                <Button variant="primary" className="download-btn">
                  Download CV
                </Button>
                <Button variant="outline-secondary" className="contact-btn">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center position-relative">
              <div className="profile-image-container">
                <div className="profile-blob yellow-bg-blob">
                <Image src={PROFILE_PIC} roundedCircle className="profile-pic-hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-sidebar">
          <a href="#" className="social-icon-link"><FaLinkedinIn size={20} /></a>
          <a href="#" className="social-icon-link"><FaTwitter size={20} /></a>
          <a href="#" className="social-icon-link"><FaGithub size={20} /></a>
          <a href="#" className="social-icon-link"><FaInstagram size={20} /></a>
          <a href="#" className="social-icon-link"><FaFacebookF size={20} /></a>
        </div>

        <div className="this-is-it-section p-4 mt-auto">
          <div className="row g-0 align-items-end">
            <div className="col-4 d-flex justify-content-center position-relative">
                <div className="pointing-hand-container">
                    <div className="hand-blob grey-bg-blob"></div>
                    <Image src={HAND_IMAGE} className="pointing-hand-image" />
                </div>
            </div>
            <div className="col-8">
              <h2 className="section-title">This is it :)</h2>
              <p className="section-text">
                Harini is a UI/UX Designer & Front-End Developer with a passion for designing beautiful and functional user experiences. She focuses on creating intuitive interfaces that captivate users. Her journey began with a curiosity for how websites work, leading her to master various front-end technologies. She believes in the power of design to solve complex problems and enhance daily interactions.
              </p>
              <p className="section-text-small">
                She's also keen on designing and prototyping, bringing ideas to life with organized sketching, wireframing, or mockup designs. Always on the lookout for new challenges.
              </p>
            </div>
          </div>
          <div className="abstract-shapes-section-2">
            <div className="shape yellow-blob-section-2"></div>
            <div className="shape grey-blob-section-2"></div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PortfolioSection;