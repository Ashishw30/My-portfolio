const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\public';
const src = path.join(root, 'ministry-logo.svg.png');
const dest = path.join(root, 'ministry-logo.png');

try {
    if (fs.existsSync(src)) {
        fs.renameSync(src, dest);
        console.log('---SUCCESS---');
    } else {
        console.log('---SRC_MISSING---');
    }
} catch (e) {
    console.log('---ERROR---: ' + e.message);
}
