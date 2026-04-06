const fs = require('fs');
const path = require('path');

const src = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\MINISTRY OF PETS-logo.png.png.png';
const dest = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\public\\MINISTRY OF PETS-logo.png.png';

try {
    if (fs.existsSync(src)) {
        fs.renameSync(src, dest);
        console.log('File moved successfully');
    } else {
        console.error('Source file not found at: ' + src);
    }
} catch (err) {
    console.error('Error: ' + err.message);
}
