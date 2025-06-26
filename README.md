# My Responsive Portfolio Website

This project is a modern, responsive portfolio website built with React.js, featuring a clean design, customizable sections, and dual light/dark theme previews. It's designed to showcase your work and skills in an elegant and interactive way.

## Features

* *Responsive Design:* Adapts seamlessly to various screen sizes (desktop, tablet, mobile).
* *Customizable Portfolio Cards:* Two distinct portfolio preview cards, one light-themed and one dark-themed, showcasing detailed content.
* *Hero Section:* A prominent introductory section with your name, role, location, and call-to-action buttons (Download CV, Get In Touch).
* *Internal Navigation:* Fictional internal navigation links (Home, About, Resume, Skills, Projects, Contact) within the portfolio cards.
* *Social Media Integration:* A dedicated sidebar for social media icons (LinkedIn, Twitter, GitHub, Instagram, Facebook).
* *"This is it :)" Section:* An additional descriptive section with a unique layout and abstract shapes.
* *Reusable Components:* Built with React components for modularity and easy maintenance.
* *Bootstrap Integration:* Utilizes React-Bootstrap for responsive layout and pre-styled UI components.

## Technologies Used

* *React.js*: A JavaScript library for building user interfaces.
* *Bootstrap*: The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.
* *React-Bootstrap*: React components built with Bootstrap.
* **React Icons (react-icons/fa): Provides popular icon sets as React components (used for social media icons and theme toggles).
* **React Bootstrap Icons (react-bootstrap-icons): React components for Bootstrap icons (used for the global header's hamburger menu).
* *CSS3*: For custom styling and theme adjustments.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm (Node Package Manager, usually comes with Node.js) or Yarn

### Steps

1.  *Navigate to your desired directory*: Open your terminal or VS Code's integrated terminal and go to the folder where you want to create your project.

    bash
    cd C:\Users\balaj\OneDrive\Desktop\portfolio
    

2.  *Create the React Application*: Use Create React App to set up a new React project.

    bash
    npx create-react-app my-portfolio-design
    
    *When prompted "Ok to proceed? (y/N)", type y and press Enter.*

3.  *Navigate into your project directory*:

    bash
    cd my-portfolio-design
    

4.  *Install Dependencies*: Install all the necessary packages including Bootstrap, React-Bootstrap, React Icons, and React Bootstrap Icons.

    bash
    npm install bootstrap react-bootstrap react-icons react-bootstrap-icons
    # OR if you prefer yarn:
    # yarn add bootstrap react-bootstrap react-icons react-bootstrap-icons
    

5.  *Copy the Code*: Replace the content of the following files with the code provided in our conversation:
    * src/App.js
    * src/App.css
    * src/index.js
    * src/index.css
    * src/components/Header.js
    * src/components/AuthPrompt.js
    * src/components/PortfolioSection.js
    * src/components/PortfolioSection.css

    **Important Note for PortfolioSection.js**: Ensure the href attributes for Nav.Link and <a> tags (social icons) are set to href="/" or href="#" instead of javascript:void(0) to avoid security errors. For example:
    javascript
    <Nav.Link href="/">Home</Nav.Link>
    <a href="#" className="social-icon-link"><FaLinkedinIn size={20} /></a>
    

## Running the Application

Once all dependencies are installed and the code files are updated:

1.  *Start the Development Server*:

    bash
    npm start
    # OR if you prefer yarn:
    # yarn start
    

2.  *Access in Browser*: The application will open automatically in your default web browser at http://localhost:3000. If it doesn't, manually open your browser and navigate to that address.

## Customization

To make this portfolio your own:

* *Content*:
    * In src/components/PortfolioSection.js, update the name (ANISH KUMAR SINHA, Anish), role, location, and the descriptive text in the "This is it :)" section.
    * Replace the placeholder PROFILE_PIC and HAND_IMAGE constants with URLs to your actual images.
    * Update the href attributes for social media icons and internal navigation links to your real profiles or specific sections.
* *Styling*:
    * Modify src/components/PortfolioSection.css to adjust colors, fonts, spacing, and element positions to match your personal brand.
    * Change the overall background color in src/App.css if desired.

## Project Structure