//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "BSD-2-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD-3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      console.log("Invalid option");
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Licenses](#licenses)

  -[Contribution](#Contributing)

  -[Tests](#Tests)

  -[Questions](#Questions)

  ## Description 
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This application is licensed under: ${ data.license } For more information click on badge link above.
  ## Contributing
  ${data.contributing}
  ## Tests 
  ${data.tests}
  ## Questions
  https://github.com/${data.github}
  Feel free to contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
