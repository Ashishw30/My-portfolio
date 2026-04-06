const fs = require('fs');
const src = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\MINISTRY OF PETS-logo.png.png.png';
const dest = 'c:\\Users\\Admin\\OneDrive\\Documents\\Portfolio\\public\\MINISTRY OF PETS-logo.png.png';

try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
    fs.unlinkSync(src);
    console.log('Success');
} catch (e) {
    console.log('Error: ' + e.message);
}
