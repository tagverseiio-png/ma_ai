const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(dirPath);
    });
}

walk('./src', function(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Purples/Pinks/Indigos -> Neon Green or Black
    // Background blurs, shadows, etc -> Neon Green
    content = content.replace(/#8B5CF6/ig, '#CCFF00');
    content = content.replace(/#D946EF/ig, '#CCFF00');
    content = content.replace(/#4F46E5/ig, '#CCFF00');
    content = content.replace(/#6366F1/ig, '#CCFF00');
    content = content.replace(/#A855F7/ig, '#CCFF00');

    // Any remaining 'bg-[#4F46E5]' style classes which were previously turned to '#CCFF00'
    // Actually wait, some of these might be text colors. Neon green on cream background is hard to read.
    // If it's text-transparent bg-clip-text gradient, the text is now neon green.
    // Let's ensure text is readable. 
    // Wait, brutalist phonk often uses Black for text and Neon Green for backgrounds, borders, or accents.
    // So 'text-[#CCFF00]' on '#F4F4F0' is invisible!
    // We should fix 'text-[#CCFF00]' -> 'text-[#111111]' if it's on a light background.
    content = content.replace(/text-\[#CCFF00\]/g, 'text-[#111111]');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
});
