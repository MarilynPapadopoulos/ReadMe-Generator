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
function renderLicenseSection(projectData) {
  
  if(projectData.license == 'None'){
    return "";
  }
  else if (projectData.license == 'Apache') {
    return` Copyright ${new Date().getFullYear()} ${projectData.username}

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
  else if (projectData.license == 'MIT') {
    return `Copyright ${new Date().getFullYear()} <COPYRIGHT HOLDER>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    `;
  }
  else if (projectData.license == 'GNU') {
    return `${projectData.title}  ${projectData.description}
    Copyright (C) ${new Date().getFullYear()}  ${projectData.username}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see: 
[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)`
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {

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
${renderLicenseSection(projectData)}
## Contributing
    ${projectData.contributing}
## Tests
    ${projectData.tests}
## Questions   
Find me on [GitHub!](https://github.com/${projectData.username}/${projectData.title})

If you have additional questions, email me at: ${projectData.email}         
`;
};

module.exports = generateMarkdown;
