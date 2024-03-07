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
  const svgContent = generateSVG(userResponses);

  // Write the SVG file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

// Function to generate SVG content
function generateSVG(data) {
  const draw = SVG().size(300, 200);

  // Create shape based on user choice
  let shape;
  switch (data.shape) {
    case 'circle':
      shape = draw.circle(100);
      break;
    case 'triangle':
      shape = draw.polygon('50,0 0,100 100,100');
      break;
    case 'square':
      shape = draw.rect(100, 100);
      break;
  }

  // Set shape color
  shape.fill(data.shapeColor);

  // Add text to the shape
  const text = draw.text(data.text).fill(data.textColor).move(50, 50).font({ size: 24 });

  // Combine shape and text
  const group = draw.group();
  group.add(shape);
  group.add(text);

  return draw.svg();
}

// Run the application
promptUser();