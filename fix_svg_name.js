const fs = require('fs');
const path = require('path');

const src = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\src\\assets\\somewhr-logo.svg.svg';
const dest = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\src\\assets\\somewhr-logo.svg';

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
