const fs = require('fs');
const path = require('path');

const content = `<svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="4"/>
  <circle cx="50" cy="50" r="25" fill="#3B82F6" fill-opacity="0.2" stroke="#3B82F6" stroke-width="4"/>
  <circle cx="50" cy="50" r="10" fill="#0F172A"/>
  <text x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="white" font-weight="bold">S</text>
</svg>`;

const target = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\src\\assets\\somewhr-logo.svg';

try {
    fs.writeFileSync(target, content);
    console.log('---SUCCESS---');
} catch (e) {
    console.log('---ERROR---: ' + e.message);
}
