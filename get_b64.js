const fs = require('fs');
const ministrySvg = `<svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="48" stroke="#0F172A" stroke-width="4"/>
<path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15ZM50 78C34.54 78 22 65.46 22 50C22 34.54 34.54 22 50 22C65.46 22 78 34.54 78 50C78 65.46 65.46 78 50 78Z" fill="#0F172A"/>
<path d="M45 40C45 37.24 42.76 35 40 35C37.24 35 35 37.24 35 40V65H45V40Z" fill="#0F172A"/>
<path d="M65 45C65 42.24 62.76 40 60 40C57.24 40 55 42.24 55 45V65H65V45Z" fill="#F59E0B"/>
<path d="M35 65C35 67.21 36.79 69 39 69H61C63.21 69 65 67.21 65 65H35Z" fill="#0F172A"/>
<circle cx="40" cy="45" r="2" fill="white"/>
<circle cx="60" cy="50" r="2" fill="white"/>
</svg>`;

const somewhrSvg = `<svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="4"/>
  <circle cx="50" cy="50" r="25" fill="#3B82F6" fill-opacity="0.2" stroke="#3B82F6" stroke-width="4"/>
  <circle cx="50" cy="50" r="10" fill="#0F172A"/>
  <text x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="white" font-weight="bold">S</text>
</svg>`;

const minB64 = Buffer.from(ministrySvg).toString('base64');
const somB64 = Buffer.from(somewhrSvg).toString('base64');

console.log('MINISTRY_DATA: ' + minB64);
console.log('SOMEWHR_DATA: ' + somB64);
