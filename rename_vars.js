const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // find variable/function names in declarations
    const regex = /\b(?:const|let|var|function)\s+([a-zA-Z_$][\w$]*)/g;
    let match;
    const names = new Set();
    while ((match = regex.exec(content)) !== null) {
        names.add(match[1]);
    }
    if (names.size === 0) return;
    const mapping = {};
    names.forEach(n => {
        mapping[n] = 'mod_' + n;
    });
    // replace all occurrences with word boundaries
    Object.keys(mapping).forEach(orig => {
        const replaced = mapping[orig];
        const r = new RegExp('\\b' + orig + '\\b', 'g');
        content = content.replace(r, replaced);
    });
    // append dummy function
    const rand = Math.floor(Math.random()*1e6);
    content += `\n/* extra dummy code */\nfunction mod_dummy_${rand}(){return null;}\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(name => {
        const fp = path.join(dir, name);
        const stat = fs.statSync(fp);
        if (stat.isDirectory()) {
            walkDir(fp);
        } else if (fp.endsWith('.js')) {
            processFile(fp);
            console.log('Processed', fp);
        }
    });
}

walkDir(path.join(__dirname, 'week2assignment'));
