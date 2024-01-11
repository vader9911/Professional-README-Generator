// Helper function to generate the license badge
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-brightgreen)`;
}

// Helper function to generate the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';

    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';

    case 'ISC':
      return 'https://opensource.org/licenses/ISC';

    case 'Other':
      return '';

    default:
      return '';
  }
}

// Helper function to generate the license section of README
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  if (licenseLink) {
    return `This application is covered under the [${license} License](${licenseLink}).`;
  } else {
    return 'No license information available.';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
  
${data.Description}
  
## Table of Contents
  
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
      
${data.Installation}
  
## Usage
  
${data.Usage}
  
## License
  
${licenseSection}
  
## Contributing
  
${data.Contributing}
  
## Tests
  
${data.Tests}
  
## Questions

If you have any questions or need further assistance, feel free to [contact me on GitHub](${data.Questions}).
          
`}

module.exports = generateMarkdown;
