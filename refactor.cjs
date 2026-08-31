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

    // Background replacements (dark -> phonk light)
    content = content.replace(/bg-\[#05050A\]|bg-\[#0B0D16\]|bg-\[#0B0D1A\]|bg-\[#111422\]/g, 'bg-[#F4F4F0]');
    
    // Primary text replacement
    content = content.replace(/text-white/g, 'text-[#111111]');
    
    // Gradients replacement -> solid black for headlines
    content = content.replace(/bg-gradient-to-[a-z]+ from-\[[^\]]+\] (via-\[[^\]]+\] )?to-\[[^\]]+\]/g, 'text-[#111111]');
    content = content.replace(/text-transparent bg-clip-text/g, '');

    // Buttons and borders
    content = content.replace(/border-white\/\d+/g, 'border-black/10');
    content = content.replace(/bg-\[#4F46E5\] text-white/g, 'bg-[#111111] text-[#CCFF00]');
    content = content.replace(/bg-\[#4F46E5\] text-\[#111111\]/g, 'bg-[#111111] text-[#CCFF00]');
    content = content.replace(/text-\[#4F46E5\]/g, 'text-[#111111]');
    content = content.replace(/border-\[#4F46E5\]/g, 'border-[#111111]');

    // Accents / Labels
    content = content.replace(/text-\[#8B5CF6\]/g, 'text-[#111111]');
    content = content.replace(/text-\[#A855F7\]/g, 'text-[#111111]');

    // Secondary text
    content = content.replace(/text-gray-300|text-gray-400/g, 'text-gray-600');
    content = content.replace(/text-gray-500/g, 'text-gray-700');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
});
