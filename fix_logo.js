const fs = require('fs');
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');

// Possible filenames we saw or attempted
const candidates = [
    'MINISTRY OF PETSlogo.png.png.png',
    'MINISTRY OF PETS-logo.png.png.png',
    'MINISTRY OF PETS-logo.png.png',
    'pets-logo.png'
];

let target = null;
for (const c of candidates) {
    if (fs.existsSync(path.join(root, c))) {
        target = c;
        break;
    }
}

if (target) {
    const finalName = 'ministry-logo.png';
    const dest = path.join(publicDir, finalName);
    fs.copyFileSync(path.join(root, target), dest);
    // Log success so I can see it in status
    console.log('---SUCCESS---');
    console.log('MOVED ' + target + ' to public/' + finalName);
} else {
    console.log('---FAILED---');
    console.log('No source file found');
}
