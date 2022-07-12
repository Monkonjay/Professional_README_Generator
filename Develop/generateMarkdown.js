// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    switch (license) {
      case 'Apache': 
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'BSD3':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      case 'IBM':
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      default:
        return ''
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "No License") return '';
    else {
      return '-[License](#license)\n';
    }
  };
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'No License') {
      return '';
    }else {
      return `## License\n
  The active license is ${license} found:\n
  ${renderLicenseBadge(license)}`;
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  ${data.contact}
  - Github [${data.user}](https://github.com/${data.user})
  - Email ${data.email}`;
  }
  
  module.exports = generateMarkdown;
  