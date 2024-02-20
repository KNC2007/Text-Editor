# Text-Editor [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Text editor that runs in the browser. Single-page application that meets the PWA criteria. Create notes or code snippets with or without an internet connection. Reliably retrieve notes for later use.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage-information)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#test-instructions)
6. [Questions](#questions)

## Installation
Fork this repo and clone it to your machine. Then type npm i in the terminal to install the dependencies listed in the package.json. 

## Usage Information
Type `npm run start` into the terminal from the root directory. The application will start up the backend and serve the client. Run the text editor application from the terminal. JavaScript files have been bundled using webpack. Run the webpack plugins and find a generated HTML file, service worker, and a manifest file. Use next-gen JavaScript in the application and find that the text editor still functions in the browser without errors. Open the text editor and find that IndexedDB has immediately created a database storage. Enter content and subsequently click off of the DOM window and the content in the text editor has been saved with IndexedDB. Reopen the text editor after closing it and the content in the text editor has been retrieved from the  IndexedDB. Click on the Install button and download the web application as an icon on the desktop. Load the web application and locate the registered service worker using workbox. Register a service worker and see static assets pre cached upon loading along with subsequent pages and static assets.
    
![Text Editor with text saved to IndexedDB.](./assets/JATE%20text%20editor.png)

Link to deployed application: https://pwa-text-editor-ckt.onrender.com 

## License
This project is licensed under the MIT License license.
* For more information about this license, click here: https://choosealicense.com/licenses/mit/.

## Contributing 
Resources used:
* https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide

## Test Instructions
N/A

## Questions
* GitHub Username: KNC2007
* Click here to access my GitHub Profile: https://github.com/knc2007
* To reach me for additional questions, please email me at: [cnkalbach@gmail.com](mailto:cnkalbach@gmail.com)
