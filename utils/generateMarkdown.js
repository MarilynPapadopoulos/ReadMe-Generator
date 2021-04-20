// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    console.log("[[License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]");
  }
  else if (license == 'MIT') {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
  }
  else if (license === 'GNU') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  }
 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return  "[https://img.shields.io/badge/License-${license}%202.0-blue.svg](https://img.shields.io/badge/License-${license}%202.0-blue.svg)"
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
function renderLicenseSection(license) {
  // if (!license) {
  //   return ""
  // }
  // else {

  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {

  console.log("generatemarkdown", projectData);
  return `# ${projectData.title} ${renderLicenseBadge(projectData.license)}
         
          ## Description
          ${projectData.description}
          ## Table of Contents
          * [Installation](#installation)
          * [Usage] (#usage)
          * [License] (#license)
          * [Contributing] (#contributing)
          * [Tests] (#tests)
          * [Questions] (#questions)
          
          ## Installation
             ${projectData.installation}
          ## Usage
             ${projectData.usage}
          ## License
          ${renderLicenseBadge(projectData.license)}
          ${renderLicenseLink(projectData.license)}
             ${projectData.license}
          ## Contributing
             ${projectData.contributing}
          ## Tests
             ${projectData.tests}
          ##Questions   
          ## ${projectData.username}
          ## ${projectData.email}
          <a href=https://github.com/${projectData.username}/${projectData.title}.git>
         

`;
}

module.exports = generateMarkdown;
