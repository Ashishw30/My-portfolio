const fs = require('fs');
const files = ['About.jsx', 'ApiLab.jsx', 'BugTrackerDemo.jsx', 'Contact.jsx', 'Experience.jsx', 'Hero.jsx', 'Projects.jsx', 'QALab.jsx', 'ResumeSection.jsx', 'Skills.jsx', 'TestCaseExplorer.jsx', 'TestMySkills.jsx', 'WorkSamples.jsx'];
const uiFiles = ['Chatbot.jsx', 'Section.jsx', 'TiltCard.jsx', 'BackToTop.jsx', 'Modal.jsx'];

files.forEach(f => {
  try {
    fs.unlinkSync('src/components/sections/' + f);
    console.log('deleted ' + f);
  } catch(e) {
    console.log('failed ' + f);
  }
});
uiFiles.forEach(f => {
  try {
    fs.unlinkSync('src/components/ui/' + f);
    console.log('deleted ' + f);
  } catch(e) {
    console.log('failed ' + f);
  }
});
