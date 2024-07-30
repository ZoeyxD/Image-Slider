# Image Slider Project

This repository contains an image slider project built with HTML, CSS, and JavaScript. The slider allows users to navigate through images using navigation buttons and dots. The project is served using Node.js and Express on `localhost:8080`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/ZoeyxD/Image-Slider.git
    cd Image-Slider
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

## Usage

1. **Start the server:**
    ```sh
    node server.js
    ```

2. **Open your browser and navigate to:**
    ```
    http://localhost:8080
    ```

## Features

- **Responsive Design:** The slider adapts to different screen sizes.
- **Navigation:** Users can navigate through slides using previous/next buttons and navigation dots.
- **Keyboard Support:** Users can navigate through slides using the left and right arrow keys.
- **Lazy Loading:** Images are lazy-loaded to improve performance.

## Project Structure

```
ImageSlider/
├── node_modules/ # Installed Node.js modules
├── public/ # Public assets
│ ├── favicon.ico # Favicon for the site
│ ├── index.html # Main HTML file
│ ├── styles.css # Stylesheet for the slider
│ ├── script.js # JavaScript for slider functionality
│ ├── site.webmanifest # Web manifest for PWA
│ └── images/ # Folder containing image assets
├── package-lock.json # Automatically generated file for package versions
├── package.json # Project metadata and dependencies
├── server.js # Node.js server setup
└── README.md # Project documentation
