// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'None'){
    return "";
  }
  else if (license == 'Apache') {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  }
  else if (license == 'MIT') {
    return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
  }
  else if (license === 'GNU') {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'None'){
    return "";
  }
  else if (license == 'Apache') {
   return("[Apache](https://opensource.org/licenses/Apache-2.0");
  }
  else if (license == 'MIT') {
    return "[https://opensource.org/licenses/MIT]"
  }
  else if (license == 'GNU') {
    return "[https://www.gnu.org/licenses/gpl-3.0]"
  }
 
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  console.log("name", name);
  if(license == 'None'){
    return "";
  }
  else if (license == 'Apache') {
    return` Copyright ${new Date().getFullYear()} ${name}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
    [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `;
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {

  console.log(" hello from generatemarkdown", projectData);
  return `# ${projectData.title}       ${renderLicenseBadge(projectData.license)} 

## Description
${projectData.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    ${projectData.installation}
## Usage
    ${projectData.usage}
## License
${renderLicenseSection(projectData.license, projectData.username)}
## Contributing
    ${projectData.contributing}
## Tests
    ${projectData.tests}
## Questions   
   Find me on GitHub: ${projectData.username}
  Email me at: ${projectData.email}
<a href=https://github.com/${projectData.username}/${projectData.title}.git>
         
`;
};

module.exports = generateMarkdown;
