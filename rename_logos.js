const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\src\\assets';

const files = [
    { src: 'ministry-logo.svg.png', dest: 'ministry-logo.png' },
    { src: 'somewhr-logo.svg.svg', dest: 'somewhr-logo.svg' }
];

files.forEach(f => {
    const srcPath = path.join(root, f.src);
    const destPath = path.join(root, f.dest);
    if (fs.existsSync(srcPath)) {
        fs.renameSync(srcPath, destPath);
        console.log('Renamed ' + f.src + ' to ' + f.dest);
    } else {
        console.log('Source missing: ' + f.src);
    }
});
