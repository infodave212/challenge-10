const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('svg.js');

// Function to prompt user for logo information
async function promptUser() {
  const userResponses = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  // Generate SVG content based on user responses
  const svg = generateSVG(userResponses);

  // Write the SVG file
  fs.writeFileSync('logo.svg', svg);

  console.log('Generated logo.svg');
}

// Function to generate SVG content
function generateSVG(data) {
 

  // Create shape based on user choice
  let shape;
  switch (data.shape) {
    case 'circle':
      shape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

      <circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    
    </svg>`
      break;
    case 'triangle':
      shape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      <polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />' 
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    
    </svg>
      `
      break;
    case 'square':
      shape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      <rect width="300" height="200" fill="${data.shapeColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    
    </svg>
      `
      break;
  }

  // Set shape color
  

  return shape
}

// Run the application
promptUser();