const fs = require('fs');

const html = fs.readFileSync('src/components/temp', 'utf8');

// A simple regex to find all sections
const sectionRegex = /<div id="(SECTION\w*)"(?:.*?)>(.*?)<\/div><div id="SECTION/g;
// Wait, the div closing might be tricky because of nested divs.
// Regex won't work well on deeply nested HTML.
